import { flexMessage, gmailMailMap } from "../interfaces";
import { CreditCardPaymentMail } from "../mailClasses/CreditCardPaymentMail";
import { CreditCardUsageDetailMail } from "../mailClasses/CreditCardUsageDetailMail";
import { CreditCardUsageMail } from "../mailClasses/CreditCardUsageMail";
import { QrPayChargeMail } from "../mailClasses/QrPayChargeMail";
import { QrPayUsageMail } from "../mailClasses/QrPayUsageMail";
import { LogDebugSheet } from "../sheetClasses/LogDebugSheet";
import { ProcessedMailSheet } from "../sheetClasses/ProcessedMailSheet";
import { LineManager } from "./LineManager";
import { FlexMessageManager } from "./FlexMessageManager";
import { Config } from "../config";
import { Mail } from "../mailClasses/_Mail";

/**
 * AuPay使用履歴メールからの情報抽出処理を管理するマネージャクラス
 * @author catdance124
 */
export class AuPayMailManager {
    /**
     * 設定オブジェクト
     */
    private _config: Config;

    /**
     * クレジットカード支払いメールオブジェクト
     */
    private _creditCardPaymentMail: CreditCardPaymentMail;

    /**
     * クレジットカード利用詳細メールオブジェクト
     */
    private _creditCardUsageDetailMail: CreditCardUsageDetailMail;

    /**
     * クレジットカード利用メールオブジェクト
     */
    private _creditCardUsageMail: CreditCardUsageMail;

    /**
     * Flex Messageマネージャオブジェクト
     */
    private _flexMessageManager: FlexMessageManager;

    /**
     * LINEマネージャオブジェクト
     */
    private _lineManager: LineManager;

    /**
     * デバッグログシートオブジェクト
     */
    private _logDebugSheet: LogDebugSheet;

    /**
     * - メールオブジェクトの配列
     */
    private _mailObjects: {
        mail: Mail;
        createFlexMessage: (report: any) => flexMessage[];
    }[];

    /**
     * QRコード支払い完了メールオブジェクト
     */
    private _qrPayChargeMail: QrPayChargeMail;

    /**
     * QRコード利用メールオブジェクト
     */
    private _qrPayUsageMail: QrPayUsageMail;

    /**
     * コンストラクタ
     */
    constructor() {
        this._creditCardUsageMail = new CreditCardUsageMail();
        this._creditCardUsageDetailMail = new CreditCardUsageDetailMail();
        this._creditCardPaymentMail = new CreditCardPaymentMail();
        this._qrPayUsageMail = new QrPayUsageMail();
        this._qrPayChargeMail = new QrPayChargeMail();
        this._flexMessageManager = new FlexMessageManager();
        this._lineManager = new LineManager();
        this._logDebugSheet = LogDebugSheet.getInstance();
        this._config = new Config();

        this._mailObjects = [
            {
                mail: this._creditCardUsageMail,
                createFlexMessage: (report) =>
                    this._flexMessageManager.createCreditCardUsageFlexMessage(
                        report
                    ),
            },
            {
                mail: this._creditCardUsageDetailMail,
                createFlexMessage: (report) =>
                    this._flexMessageManager.createCreditCardUsageDetailFlexMessage(
                        report
                    ),
            },
            {
                mail: this._creditCardPaymentMail,
                createFlexMessage: (report) =>
                    this._flexMessageManager.createPaymentSummaryFlexMessage(
                        report
                    ),
            },
            {
                mail: this._qrPayUsageMail,
                createFlexMessage: (report) =>
                    this._flexMessageManager.createQrPayUsageFlexMessage(
                        report
                    ),
            },
            {
                mail: this._qrPayChargeMail,
                createFlexMessage: (report) =>
                    this._flexMessageManager.createQrPayChargeFlexMessage(
                        report
                    ),
            },
        ];
    }

    /**
     * 与えられたメールのうち未処理のものを処理する
     * @param mails - メールリスト
     */
    private _executeUnprocessedMails(
        mails: GoogleAppsScript.Gmail.GmailMessage[]
    ) {
        // 処理済みメールシート取得
        const processedMailSheet = ProcessedMailSheet.getInstance();

        // 未処理のメールを走査して処理する
        for (let mail of mails) {
            const id = mail.getId();
            // シート記載の処理済みはskip
            const isProcessed = processedMailSheet.existId(id);
            if (isProcessed) {
                continue;
            }

            // 処理を委託
            this._processMail(mail);

            // 処理終わりにシートに追記
            processedMailSheet.insert({
                id: id,
                date: mail.getDate(),
                subject: mail.getSubject(),
            });
        }
    }

    /**
     * メールを処理する
     * @param mail - 処理するメール
     */
    private _processMail(mail: GoogleAppsScript.Gmail.GmailMessage) {
        const subject = mail.getSubject();
        this._logDebugSheet.log("mail receive", subject);

        let lineMessages: flexMessage[] = [];

        // 各メールオブジェクトで処理とメッセージ作成
        for (let mailObject of this._mailObjects) {
            if (subject.match(mailObject.mail.subject)) {
                const report = mailObject.mail.processMail(mail.getPlainBody());
                this._logDebugSheet.log("report", report);
                lineMessages = mailObject.createFlexMessage(report);
                break;
            }
        }

        // メッセージがあれば送信
        if (0 < lineMessages.length) {
            this._lineManager.sendPushMessageToGroup(lineMessages);
        }
    }

    /**
     * メールを検索する
     * @param searchText - 検索するテキスト
     * @param maxThreadCount - 検索するスレッドの最大数
     * @returns - 古い順にソートされた検索結果のメール
     */
    private _searchMails(
        searchText: string,
        maxThreadCount = 10
    ): GoogleAppsScript.Gmail.GmailMessage[] {
        // Gメールから検索
        const threads = GmailApp.search(searchText, 0, maxThreadCount);
        const messages = GmailApp.getMessagesForThreads(threads);

        // スレッドを展開、同一IDの除去
        let messageMap: gmailMailMap = {};
        for (let i = 0; i < messages.length; i++) {
            for (let j = 0; j < messages[i].length; j++) {
                messageMap[messages[i][j].getId()] = messages[i][j];
            }
        }
        return Object.keys(messageMap)
            .map(function (id) {
                return messageMap[id];
            })
            .sort(function (a, b) {
                return a.getDate().getTime() - b.getDate().getTime();
            });
    }

    /**
     * 本スクリプトで対象とするすべてのメールを検索し処理する
     */
    executeAllMails() {
        // 指定タイトルのメールをすべて検索
        const searchQuery = this._mailObjects
            .map(function (mailObject) {
                return `subject:("${mailObject.mail.subject}")`;
            })
            .join(" OR ");
        const mails = this._searchMails(
            searchQuery,
            this._config.maxThreadCount
        );
        this._executeUnprocessedMails(mails);
    }

    /**
     * 詳細メールのみを検索し処理する
     */
    executeCreditCardUsageDetailsMails() {
        const searchQuery = `subject:("${this._creditCardUsageDetailMail.subject}")`;
        const mails = this._searchMails(searchQuery, 100);
        this._executeUnprocessedMails(mails);
    }

    /**
     * 速報メールのみを検索し処理する
     */
    executeCreditCardUsageMails() {
        const searchQuery = `subject:("${this._creditCardUsageMail.subject}")`;
        const mails = this._searchMails(searchQuery, 100);
        this._executeUnprocessedMails(mails);
    }
}

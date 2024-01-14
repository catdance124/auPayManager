import {
    creditCardUsageBasicReport,
    creditCardUsageExReport,
} from "../interfaces";
import { CommonUtils, CreditCardUtils } from "../utils";
import { CreditCardReportSheet } from "../sheetClasses/CreditCardReportSheet";
import { Mail } from "./_Mail";
import { Config } from "../config";

/**
 * クレジットカード利用メールクラス
 * @author catdance124
 */
export class CreditCardUsageMail extends Mail {
    /**
     * Config オブジェクト
     */
    private _config: Config;
    /**
     * クレジットカード利用レポートシート
     */
    private _creditCardReportSheet: CreditCardReportSheet;

    /**
     * コンストラクタ
     */
    constructor() {
        super("【ご利用速報】au PAY カード");
        this._creditCardReportSheet = CreditCardReportSheet.getInstance();
        this._config = new Config();
    }

    /**
     * クレジットカード利用レポートをシートに登録する
     * @param creditCardUsageBasicReport - クレジットカード利用レポート
     * @returns 登録されたクレジットカード利用レポート
     */
    private _register(creditCardUsageBasicReport: creditCardUsageBasicReport) {
        // 支払日を計算
        const creditCardImportantDate = CreditCardUtils.calculateImportantDate(
            creditCardUsageBasicReport.date
        );

        // シート出力

        const id = "A" + CommonUtils.createId();
        this._creditCardReportSheet.insert({
            id: id,
            paymentDate: creditCardImportantDate.paymentDate,
            date: creditCardUsageBasicReport.date,
            content: creditCardUsageBasicReport.content,
            amount: creditCardUsageBasicReport.amount,
            paymentLabel: this._config.paymentLabel.default,
        });

        const summedAmount = this._creditCardReportSheet.getSummedAmount(
            creditCardImportantDate.paymentDate
        );

        return {
            id: id,
            paymentLabel: this._config.paymentLabel.default,
            summedAmount:
                summedAmount.eachLabel[this._config.paymentLabel.default],
            closingDate: creditCardImportantDate.closingDate,
        } as creditCardUsageExReport;
    }

    protected _extract(plainBody: string) {
        let report = {} as creditCardUsageBasicReport;

        const lines = plainBody.split("\n");
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].match("▼ご利用日時")) {
                report.date = CommonUtils.parseDate(
                    lines[i + 1].trim(),
                    "yyyy/M/d　HH:mm"
                );
            } else if (lines[i].match("▼ご利用内容")) {
                report.content = lines[i + 1].trim();
            } else if (lines[i].match("▼ご利用金額")) {
                report.amount = CommonUtils.convertYenStrToNum(
                    lines[i + 1].trim()
                );
            }
        }

        return report;
    }

    processMail(plainBody: string) {
        const creditCardUsageBasicReport = this._extract(plainBody);

        const creditCardUsageExReport = this._register(
            creditCardUsageBasicReport
        );

        const creditCardUsageReport = Object.assign(
            creditCardUsageBasicReport,
            creditCardUsageExReport
        );

        return creditCardUsageReport;
    }
}

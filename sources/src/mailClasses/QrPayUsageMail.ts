import { Config } from "../config";
import { qrPayUsageReport } from "../interfaces";
import { QrPayReportSheet } from "../sheetClasses/QrPayReportSheet";
import { CommonUtils } from "../utils";
import { Mail } from "./_Mail";

/**
 * QRペイ利用メールクラス
 * @author catdance124
 */
export class QrPayUsageMail extends Mail {
    /**
     * Config オブジェクト
     */
    private _config: Config;
    /**
     * QR Pay 利用・チャージレポートシート
     */
    private _qrPayReportSheet: QrPayReportSheet;

    /**
     * コンストラクタ
     */
    constructor() {
        super("【au PAY】ご利用のお知らせ");
        this._qrPayReportSheet = QrPayReportSheet.getInstance();
        this._config = new Config();
    }

    /**
     * QRペイ利用レポートを登録する
     * @param qrPayUsageReport - QRペイ利用レポート
     */
    private _register(qrPayUsageReport: qrPayUsageReport) {
        this._qrPayReportSheet.insert({
            label: "利用",
            date: qrPayUsageReport.date,
            amount: qrPayUsageReport.amount,
            content: qrPayUsageReport.content,
            remainingAmount: qrPayUsageReport.remainingAmount,
        });
    }

    protected _extract(plainBody: string) {
        let report = {} as qrPayUsageReport;

        const lines = plainBody.split("\n");
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].match("■利用日時")) {
                report.date = CommonUtils.parseDate(
                    lines[i + 1].trim().replace(/\([^()]*\)/g, ""),
                    "yyyy年M月d日 HH:mm:ss"
                );
            } else if (lines[i].match("■利用店舗")) {
                report.content = lines[i + 1].trim();
            } else if (lines[i].match("■支払金額")) {
                report.amount = CommonUtils.convertYenStrToNum(
                    lines[i + 1].trim()
                );
            } else if (lines[i].match("■決済後残高")) {
                report.remainingAmount = CommonUtils.convertYenStrToNum(
                    lines[i + 1].trim()
                );
            }
        }

        report.chargeAlert =
            report.remainingAmount < this._config.qrPayReminingThreshold;

        return report;
    }

    processMail(plainBody: string) {
        const qrPayUsageReport = this._extract(plainBody);
        this._register(qrPayUsageReport);

        return qrPayUsageReport;
    }
}

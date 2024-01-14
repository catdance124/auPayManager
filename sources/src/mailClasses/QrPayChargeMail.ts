import { qrPayChargeReport } from "../interfaces";
import { QrPayReportSheet } from "../sheetClasses/QrPayReportSheet";
import { CommonUtils } from "../utils";
import { Mail } from "./_Mail";

/**
 * QRペイチャージメールクラス
 * @author catdance124
 */
export class QrPayChargeMail extends Mail {
    /**
     * QR Pay 利用・チャージレポートシート
     */
    private _qrPayReportSheet: QrPayReportSheet;

    /**
     * コンストラクタ
     */
    constructor() {
        super("【au PAY】チャージ完了のお知らせ");
        this._qrPayReportSheet = QrPayReportSheet.getInstance();
    }

    /**
     * QRペイチャージレポートを登録する
     * @param qrPayChargeReport - QRペイチャージレポート
     */
    private _register(qrPayChargeReport: qrPayChargeReport) {
        this._qrPayReportSheet.insert({
            label: "チャージ",
            date: qrPayChargeReport.date,
            amount: qrPayChargeReport.amount,
            content: qrPayChargeReport.method,
            remainingAmount: qrPayChargeReport.remainingAmount,
        });
    }

    protected _extract(plainBody: string) {
        let report = {} as qrPayChargeReport;

        const lines = plainBody.split("\n");
        for (let line of lines) {
            if (line.match("・チャージ日時：")) {
                report.date = CommonUtils.parseDate(
                    line.replace(/・チャージ日時：/g, "").trim(),
                    "yyyy/MM/dd HH:mm:ss"
                );
            } else if (line.match("・チャージ金額：")) {
                report.amount = CommonUtils.convertYenStrToNum(
                    line.replace(/・チャージ金額：/g, "").trim()
                );
            } else if (line.match("・チャージ方法：")) {
                report.method = line.replace(/・チャージ方法：/g, "").trim();
            } else if (line.match("・au PAY 残高：")) {
                report.remainingAmount = CommonUtils.convertYenStrToNum(
                    line.replace(/・au PAY 残高：/g, "").trim()
                );
            }
        }

        return report;
    }

    processMail(plainBody: string) {
        const qrPayChargeReport = this._extract(plainBody);
        this._register(qrPayChargeReport);

        return qrPayChargeReport;
    }
}

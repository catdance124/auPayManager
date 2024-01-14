import {
    creditCardPaymentBasicReport,
    creditCardPaymentExReport,
} from "../interfaces";
import { CommonUtils } from "../utils";
import { CreditCardReportSheet } from "../sheetClasses/CreditCardReportSheet";
import { Mail } from "./_Mail";
import { Config } from "../config";

/**
 * クレジットカード請求金額確定メールクラス
 * @author catdance124
 */
export class CreditCardPaymentMail extends Mail {
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
        super("【au PAY カード】ご請求金額確定のお知らせ");
        this._creditCardReportSheet = CreditCardReportSheet.getInstance();
        this._config = new Config();
    }

    protected _extract(plainBody: string) {
        let report = {} as creditCardPaymentBasicReport;

        const lines = plainBody.split("\n");
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].match("▼お支払日")) {
                report.paymentDate = CommonUtils.parseDate(
                    lines[i + 1].trim().replace(/（[^()]*）/g, ""),
                    "yyyy年M月d日"
                );
                // 支払日の前後変動を矯正
                report.paymentDate.setDate(this._config.creditCardPaymentDay);
            }
        }

        return report;
    }

    processMail(plainBody: string) {
        const creditCardPaymentBasicReport = this._extract(plainBody);

        // 合計とメモを取得
        const summedAmount = this._creditCardReportSheet.getSummedAmount(
            creditCardPaymentBasicReport.paymentDate
        );
        const paymentNotes = this._creditCardReportSheet.getPaymentNotes(
            creditCardPaymentBasicReport.paymentDate
        );

        const creditCardPaymentExReport = {
            summedAmount,
            paymentNotes,
        } as creditCardPaymentExReport;

        const creditCardPaymentReport = Object.assign(
            creditCardPaymentBasicReport,
            creditCardPaymentExReport
        );

        return creditCardPaymentReport;
    }
}

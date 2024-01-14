import {
    creditCardDetailBasicReport,
    creditCardDetailExReport,
} from "../interfaces";
import { CommonUtils, CreditCardUtils } from "../utils";
import { CreditCardReportSheet } from "../sheetClasses/CreditCardReportSheet";
import { Mail } from "./_Mail";
import { Config } from "../config";

/**
 * クレジットカード利用詳細メールクラス
 * @author catdance124
 */
export class CreditCardUsageDetailMail extends Mail {
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
        super("【ご利用詳細】au PAY カード");
        this._creditCardReportSheet = CreditCardReportSheet.getInstance();
        this._config = new Config();
    }

    /**
     * クレジットカード詳細利用レポートをシートに登録する
     * @param creditCardDetailBasicReport - クレジットカード詳細利用レポート
     * @returns 登録されたクレジットカード利用レポート
     */
    private _register(
        creditCardDetailBasicReport: creditCardDetailBasicReport
    ) {
        // 支払日を計算
        const creditCardImportantDate = CreditCardUtils.calculateImportantDate(
            creditCardDetailBasicReport.date
        );
        const upsertedRecord = this._creditCardReportSheet.upsertPaymentDetail(
            creditCardDetailBasicReport
        );

        const summedAmount = this._creditCardReportSheet.getSummedAmount(
            creditCardImportantDate.paymentDate
        );

        return {
            id: upsertedRecord.id,
            paymentLabel: upsertedRecord.paymentLabel,
            summedAmount:
                summedAmount.eachLabel[this._config.paymentLabel.default],
            closingDate: creditCardImportantDate.closingDate,
            date: upsertedRecord.date,
        } as creditCardDetailExReport;
    }

    protected _extract(plainBody: string) {
        let report = {} as creditCardDetailBasicReport;
        let reports = [];

        const lines = plainBody.split("\n");
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].match("▼ご利用日")) {
                report = {} as creditCardDetailBasicReport;
                report.date = CommonUtils.parseDate(
                    lines[i + 1].trim() + " 23:59:59",
                    "yyyy年M月d日 HH:mm:ss"
                );
            } else if (lines[i].match("▼ご利用金額")) {
                report.amount = CommonUtils.convertYenStrToNum(
                    lines[i + 1].trim()
                );
            } else if (lines[i].match("▼ご利用先")) {
                report.content = lines[i + 1].trim();
                reports.push(report);
            }
        }

        return reports;
    }

    processMail(plainBody: string) {
        const creditCardDetailBasicReports = this._extract(plainBody);

        const creditCardDetailReports = [];

        for (let creditCardDetailBasicReport of creditCardDetailBasicReports) {
            const creditCardDetailExReport = this._register(
                creditCardDetailBasicReport
            );
            creditCardDetailReports.push(
                Object.assign(
                    creditCardDetailBasicReport,
                    creditCardDetailExReport
                )
            );
        }

        return creditCardDetailReports;
    }
}

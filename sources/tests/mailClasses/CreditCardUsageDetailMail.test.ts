import { CreditCardUsageDetailMail } from "../../src/mailClasses/CreditCardUsageDetailMail";
import { CreditCardReportSheet } from "../../src/sheetClasses/CreditCardReportSheet";
import { Config } from "../../src/config";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";
import {
    creditCardDetailSampleBody,
    creditCardReportSampleRows,
} from "../mocks/dataForTest";

describe("CreditCardUsageDetailMail", () => {
    let creditCardUsageDetailMail: CreditCardUsageDetailMail;
    let creditCardReportSheet: CreditCardReportSheet;
    const config = new Config();

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        creditCardUsageDetailMail = new CreditCardUsageDetailMail();
        // シートにサンプルデータを登録する
        creditCardReportSheet = CreditCardReportSheet.getInstance();
        creditCardReportSheet.rows = [...creditCardReportSampleRows];
        Object.defineProperty(
            creditCardUsageDetailMail,
            "_creditCardReportSheet",
            {
                value: creditCardReportSheet,
            }
        );
    });

    it("plain bodyからクレジットカード詳細利用レポートを抽出し、シートに登録する", () => {
        const creditCardDetailReports = creditCardUsageDetailMail.processMail(
            creditCardDetailSampleBody
        );

        expect(creditCardDetailReports).toEqual([
            {
                id: expect.stringMatching(/^X.+/),
                date: CommonUtils.parseDate(
                    "2023/12/10 23:59:59",
                    "yyyy/MM/dd HH:mm:ss"
                ),
                content: "test store1",
                amount: 1000,
                paymentLabel: config.paymentLabel.default,
                summedAmount: 5014,
                closingDate: CommonUtils.parseDate("2023/12/15", "yyyy/MM/dd"),
            },
            {
                id: expect.stringMatching(/^A.+/),
                date: CommonUtils.parseDate(
                    "2023/12/21 19:38",
                    "yyyy/MM/dd HH:mm"
                ),
                content: "test store2",
                amount: 748,
                paymentLabel: config.paymentLabel.default,
                summedAmount: 34353,
                closingDate: CommonUtils.parseDate("2024/1/15", "yyyy/MM/dd"),
            },
        ]);
    });
});

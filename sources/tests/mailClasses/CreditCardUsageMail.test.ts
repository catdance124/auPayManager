import { CreditCardUsageMail } from "../../src/mailClasses/CreditCardUsageMail";
import { CreditCardReportSheet } from "../../src/sheetClasses/CreditCardReportSheet";
import { Config } from "../../src/config";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";
import {
    creditCardUsageSampleBody,
    creditCardReportSampleRows,
} from "../mocks/dataForTest";

describe("CreditCardUsageMail", () => {
    let creditCardUsageMail: CreditCardUsageMail;
    let creditCardReportSheet: CreditCardReportSheet;
    const config = new Config();

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        creditCardUsageMail = new CreditCardUsageMail();
        // シートにサンプルデータを登録する
        creditCardReportSheet = CreditCardReportSheet.getInstance();
        creditCardReportSheet.rows = [...creditCardReportSampleRows];
        Object.defineProperty(creditCardUsageMail, "_creditCardReportSheet", {
            value: creditCardReportSheet,
        });
    });

    it("plain bodyからクレジットカード利用レポートを抽出し、シートに登録する", () => {
        const creditCardUsageReport = creditCardUsageMail.processMail(
            creditCardUsageSampleBody
        );

        expect(creditCardUsageReport).toEqual({
            // idはAから始まるランダムな文字列
            id: expect.stringMatching(/^A.+/),
            date: CommonUtils.parseDate("2023/12/10 15:46", "yyyy/MM/dd HH:mm"),
            content: "カードショッピング利用",
            amount: 5000,
            paymentLabel: config.paymentLabel.default,
            summedAmount: 9014,
            closingDate: CommonUtils.parseDate("2023/12/15", "yyyy/MM/dd"),
        });
    });
});

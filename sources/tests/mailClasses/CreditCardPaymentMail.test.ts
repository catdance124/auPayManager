import { CreditCardPaymentMail } from "../../src/mailClasses/CreditCardPaymentMail";
import { CreditCardReportSheet } from "../../src/sheetClasses/CreditCardReportSheet";
import { Config } from "../../src/config";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";
import {
    creditCardPaymentSampleBody,
    creditCardReportSampleRows,
} from "../mocks/dataForTest";

describe("CreditCardPaymentMail", () => {
    let creditCardPaymentMail: CreditCardPaymentMail;
    let creditCardReportSheet: CreditCardReportSheet;
    const config = new Config();

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        creditCardPaymentMail = new CreditCardPaymentMail();
        // シートにサンプルデータを登録する
        creditCardReportSheet = CreditCardReportSheet.getInstance();
        creditCardReportSheet.rows = [...creditCardReportSampleRows];
        Object.defineProperty(creditCardPaymentMail, "_creditCardReportSheet", {
            value: creditCardReportSheet,
        });
    });

    it("plain bodyからクレジットカード支払いレポートを抽出し、シートから合計金額とメモを取得して返す", () => {
        const creditCardPaymentReport = creditCardPaymentMail.processMail(
            creditCardPaymentSampleBody
        );

        expect(creditCardPaymentReport).toEqual({
            paymentDate: CommonUtils.parseDate("2024/01/10", "yyyy/MM/dd"),
            summedAmount: {
                all: 10763,
                eachLabel: {
                    家計: 4014,
                    特殊: 5281,
                    貯金: 1468,
                },
            },
            paymentNotes: [
                {
                    amount: 4390,
                    content: "STORE3",
                    date: CommonUtils.parseDate(
                        "2023/12/10 18:46",
                        "yyyy/M/d HH:mm"
                    ),
                    paymentNote: "cat支払い",
                },
                {
                    amount: 891,
                    content: "STORE6",
                    date: CommonUtils.parseDate(
                        "2023/12/13 12:30",
                        "yyyy/M/d HH:mm"
                    ),
                    paymentNote: "dog支払い",
                },
            ],
        });
    });
});

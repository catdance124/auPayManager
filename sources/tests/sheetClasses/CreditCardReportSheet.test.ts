import { CreditCardReportSheet } from "../../src/sheetClasses/CreditCardReportSheet";
import { CommonUtils, CreditCardUtils } from "../../src/utils";
import { Config } from "../../src/config";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";
import { creditCardReportSampleRows } from "../mocks/dataForTest";

describe("CreditCardReportSheet", () => {
    let creditCardReportSheet: CreditCardReportSheet;
    const config = new Config();

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        creditCardReportSheet = CreditCardReportSheet.getInstance();
        creditCardReportSheet.rows = [...creditCardReportSampleRows];
    });

    afterEach(() => {
        // レコードを初期化する
        creditCardReportSheet.rows = [...creditCardReportSampleRows];
    });

    it("利用速報レポートをinsertする", () => {
        // 3番目に古い利用日時のレコードを挿入する
        const date = CommonUtils.parseDate(
            "2023/12/10 15:46",
            "yyyy/M/d HH:mm"
        );
        const creditCardUsageBasicReport = {
            date: date,
            content: "test content",
            amount: 1000,
        };

        const creditCardImportantDate = CreditCardUtils.calculateImportantDate(
            creditCardUsageBasicReport.date
        );
        const id = "A" + CommonUtils.createId();

        creditCardReportSheet.insert({
            id: expect.stringMatching(/^A.+/),
            paymentDate: creditCardImportantDate.paymentDate,
            date: creditCardUsageBasicReport.date,
            content: creditCardUsageBasicReport.content,
            amount: creditCardUsageBasicReport.amount,
            paymentLabel: config.paymentLabel.default,
        });

        const records = creditCardReportSheet.rows;
        expect(records.length).toBe(creditCardReportSampleRows.length + 1);
        // 3番目に位置しているか確認
        expect(records[2]).toEqual([
            expect.stringMatching(/^A.+/),
            creditCardImportantDate.paymentDate,
            creditCardUsageBasicReport.date,
            creditCardUsageBasicReport.content,
            creditCardUsageBasicReport.amount,
            config.paymentLabel.default,
            undefined,
        ]);
    });

    it("利用詳細レポートをinsertする", () => {
        // 3番目に古い利用日時のレコードを挿入する
        const date = CommonUtils.parseDate(
            "2023/12/10 15:46",
            "yyyy/M/d HH:mm"
        );
        const creditCardDetailBasicReport = {
            date: date,
            content: "test content",
            amount: 1000,
        };

        const upsertedRecord = creditCardReportSheet.upsertPaymentDetail(
            creditCardDetailBasicReport
        );

        const records = creditCardReportSheet.rows;
        expect(records.length).toBe(creditCardReportSampleRows.length + 1);
        // 3番目に位置しているか確認
        expect(records[2]).toEqual([
            expect.stringMatching(/^X.+/),
            CreditCardUtils.calculateImportantDate(date).paymentDate,
            creditCardDetailBasicReport.date,
            creditCardDetailBasicReport.content,
            creditCardDetailBasicReport.amount,
            config.paymentLabel.default,
            undefined,
        ]);
        // 追加されたレコードが返却されているか確認
        expect(upsertedRecord).toEqual({
            id: expect.stringMatching(/^X.+/),
            paymentDate:
                CreditCardUtils.calculateImportantDate(date).paymentDate,
            date: creditCardDetailBasicReport.date,
            content: creditCardDetailBasicReport.content,
            amount: creditCardDetailBasicReport.amount,
            paymentLabel: config.paymentLabel.default,
            paymentNote: undefined,
        });
    });

    it("利用詳細レポートをupdateする", () => {
        // 18番目に古い利用日時のレコードを更新する
        const creditCardDetailBasicReport = {
            date: CommonUtils.parseDate("2023/12/27 19:38", "yyyy/M/d HH:mm"),
            content: "test content",
            amount: 748,
        };

        const upsertedRecord = creditCardReportSheet.upsertPaymentDetail(
            creditCardDetailBasicReport
        );

        const records = creditCardReportSheet.rows;
        expect(records.length).toBe(creditCardReportSampleRows.length);
        // 18番目のレコードが更新されているか確認
        expect(records[17]).toEqual([
            creditCardReportSampleRows[17][0],
            creditCardReportSampleRows[17][1],
            creditCardReportSampleRows[17][2],
            creditCardDetailBasicReport.content,
            creditCardDetailBasicReport.amount,
            creditCardReportSampleRows[17][5],
            creditCardReportSampleRows[17][6],
        ]);
        // 更新されたレコードが返却されているか確認
        expect(upsertedRecord).toEqual({
            id: creditCardReportSampleRows[17][0],
            paymentDate: creditCardReportSampleRows[17][1],
            date: creditCardReportSampleRows[17][2],
            content: creditCardDetailBasicReport.content,
            amount: creditCardDetailBasicReport.amount,
            paymentLabel: creditCardReportSampleRows[17][5],
            paymentNote: creditCardReportSampleRows[17][6],
        });
    });

    it("レコードの支払いラベルを更新する", () => {
        // 11番目に古い利用日時のレコードを更新する
        const id = "A18c7a728cca1";
        const updatedRecord = creditCardReportSheet.updatePaymentLabel(
            id,
            config.paymentLabel.optional[0]
        );

        const records = creditCardReportSheet.rows;
        expect(records.length).toBe(creditCardReportSampleRows.length);
        // 11番目のレコードが更新されているか確認
        expect(records[10]).toEqual([
            id,
            creditCardReportSampleRows[10][1],
            creditCardReportSampleRows[10][2],
            creditCardReportSampleRows[10][3],
            creditCardReportSampleRows[10][4],
            config.paymentLabel.optional[0],
            creditCardReportSampleRows[10][6],
        ]);
        // 更新されたレコードが返却されているか確認
        expect(updatedRecord).toEqual([
            id,
            creditCardReportSampleRows[10][1],
            creditCardReportSampleRows[10][2],
            creditCardReportSampleRows[10][3],
            creditCardReportSampleRows[10][4],
            config.paymentLabel.optional[0],
            creditCardReportSampleRows[10][6],
        ]);
    });

    it("レコードの支払いメモを更新する", () => {
        // 11番目に古い利用日時のレコードを更新する
        const id = "A18c7a728cca1";
        const note = "test note";
        const updatedRecord = creditCardReportSheet.updatePaymentNote(id, note);

        const records = creditCardReportSheet.rows;
        expect(records.length).toBe(creditCardReportSampleRows.length);
        // 11番目のレコードが更新されているか確認
        expect(records[10]).toEqual([
            id,
            creditCardReportSampleRows[10][1],
            creditCardReportSampleRows[10][2],
            creditCardReportSampleRows[10][3],
            creditCardReportSampleRows[10][4],
            creditCardReportSampleRows[10][5],
            note,
        ]);
        // 更新されたレコードが返却されているか確認
        expect(updatedRecord).toEqual([
            id,
            creditCardReportSampleRows[10][1],
            creditCardReportSampleRows[10][2],
            creditCardReportSampleRows[10][3],
            creditCardReportSampleRows[10][4],
            creditCardReportSampleRows[10][5],
            note,
        ]);
    });

    it("対象支払日の支払いメモを取得する", () => {
        const date = CommonUtils.parseDate(
            "2023/12/10 15:46",
            "yyyy/M/d HH:mm"
        );
        const paymentDate =
            CreditCardUtils.calculateImportantDate(date).paymentDate;

        const paymentNotes = creditCardReportSheet.getPaymentNotes(paymentDate);

        expect(paymentNotes.length).toBe(2);
        expect(paymentNotes[0]).toEqual({
            date: creditCardReportSampleRows[2][2],
            content: creditCardReportSampleRows[2][3],
            amount: creditCardReportSampleRows[2][4],
            paymentNote: creditCardReportSampleRows[2][6],
        });
        expect(paymentNotes[1]).toEqual({
            date: creditCardReportSampleRows[5][2],
            content: creditCardReportSampleRows[5][3],
            amount: creditCardReportSampleRows[5][4],
            paymentNote: creditCardReportSampleRows[5][6],
        });
    });

    it("対象支払日の合計金額を取得する", () => {
        const date = CommonUtils.parseDate(
            "2023/12/10 15:46",
            "yyyy/M/d HH:mm"
        );
        const paymentDate =
            CreditCardUtils.calculateImportantDate(date).paymentDate;

        const summedAmount = creditCardReportSheet.getSummedAmount(paymentDate);

        expect(summedAmount.all).toBe(10763);
        expect(summedAmount.eachLabel[config.paymentLabel.default]).toBe(4014);
        expect(summedAmount.eachLabel[config.paymentLabel.optional[0]]).toBe(
            1468
        );
        expect(summedAmount.eachLabel[config.paymentLabel.notable]).toBe(5281);
    });
});

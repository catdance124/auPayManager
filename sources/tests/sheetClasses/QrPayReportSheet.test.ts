import { QrPayReportSheet } from "../../src/sheetClasses/QrPayReportSheet";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";

describe("QrPayReportSheet", () => {
    let qrPayReportSheet: QrPayReportSheet;

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        qrPayReportSheet = QrPayReportSheet.getInstance();
    });

    afterEach(() => {
        // レコードを初期化する
        qrPayReportSheet.rows = [];
    });

    it("シートにレコードを挿入する", () => {
        const sheetRecord1 = {
            label: "チャージ",
            date: CommonUtils.parseDate("2022-01-01", "yyyy-MM-dd"),
            amount: 1000,
            content: "テスト内容",
            remainingAmount: 5000,
        };
        qrPayReportSheet.insert(sheetRecord1);
        const sheetRecord2 = {
            label: "利用",
            date: CommonUtils.parseDate("2022-01-01", "yyyy-MM-dd"),
            amount: 1000,
            content: "テスト内容",
            remainingAmount: 4000,
        };
        qrPayReportSheet.insert(sheetRecord2);

        const records = qrPayReportSheet.rows;
        expect(records.length).toBe(2);
        expect(records[0]).toEqual([
            sheetRecord1.label,
            sheetRecord1.date,
            sheetRecord1.amount,
            sheetRecord1.content,
            sheetRecord1.remainingAmount,
        ]);
        expect(records[1]).toEqual([
            sheetRecord2.label,
            sheetRecord2.date,
            sheetRecord2.amount,
            sheetRecord2.content,
            sheetRecord2.remainingAmount,
        ]);
    });
});

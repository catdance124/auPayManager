import { ProcessedMailSheet } from "../../src/sheetClasses/ProcessedMailSheet";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";

describe("ProcessedMailSheet", () => {
    let processedMailSheet: ProcessedMailSheet;
    const numRecords = 100;

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        processedMailSheet = ProcessedMailSheet.getInstance();
    });

    afterEach(() => {
        // レコードを初期化する
        processedMailSheet.rows = [];
    });

    it("シートにメールIDを挿入する", () => {
        const mailId = "test-mail-id";
        const date = CommonUtils.parseDate("2022-01-01", "yyyy-MM-dd");
        const subject = "Test Subject";
        for (let i = 0; i < numRecords; i++) {
            const sheetRecord = {
                id: mailId + i.toString(),
                date: date,
                subject: subject + i.toString(),
            };
            processedMailSheet.insert(sheetRecord);
        }

        const records = processedMailSheet.rows;
        expect(records.length).toBe(numRecords);
        for (let i = 0; i < numRecords; i++) {
            expect(records[i][0]).toBe(mailId + i.toString());
            expect(records[i][1]).toBe(date);
            expect(records[i][2]).toBe(subject + i.toString());
        }
    });

    it("指定のメールIDが存在するかどうかを確認する", () => {
        const mailId = "test-mail-id";
        // モックの_idListを設定する
        const idList = [];
        for (let i = 0; i < numRecords; i++) {
            idList.push(mailId + i.toString());
        }
        Object.defineProperty(processedMailSheet, "_idList", {
            value: idList,
        });

        for (let i = 0; i < numRecords; i++) {
            expect(processedMailSheet.existId(mailId + i.toString())).toBe(
                true
            );
        }
        for (let i = 0; i < numRecords; i++) {
            expect(
                processedMailSheet.existId(
                    "non-existing-mail-id" + i.toString()
                )
            ).toBe(false);
        }
    });
});

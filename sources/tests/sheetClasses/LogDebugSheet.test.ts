import { LogDebugSheet } from "../../src/sheetClasses/LogDebugSheet";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";

describe("LogDebugSheet", () => {
    let logDebugSheet: LogDebugSheet;
    const numRecords = 100;

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        // テスト対象のインスタンスを作成する
        logDebugSheet = LogDebugSheet.getInstance();
    });

    afterEach(() => {
        // レコードを初期化する
        logDebugSheet.rows = [];
    });

    it("シートにログレコードを挿入する", () => {
        const label = "test label";
        const value = "test value";
        for (let i = 0; i < numRecords; i++) {
            logDebugSheet.log(label + i.toString(), value + i.toString());
        }

        const records = logDebugSheet.rows;
        expect(records.length).toBe(numRecords);
        for (let i = 0; i < numRecords; i++) {
            expect(records[i][1]).toBe(label + i.toString());
            expect(records[i][2]).toBe(value + i.toString());
        }
    });

    it("値が文字列の配列の場合、シートに複数のログレコードを挿入する", () => {
        const label = "test label";
        const value = "test value";
        const values = [];
        for (let i = 0; i < numRecords; i++) {
            values.push(value + i.toString());
        }
        logDebugSheet.log(label, values);

        const records = logDebugSheet.rows;
        expect(records.length).toBe(numRecords);
        for (let i = 0; i < numRecords; i++) {
            expect(records[i][1]).toBe(label);
            expect(records[i][2]).toBe(JSON.stringify(values[i]));
        }
    });

    it("値がオブジェクトの場合、シートにログレコードを挿入する", () => {
        const label = "test label";
        const value = { key: "test value" };
        for (let i = 0; i < numRecords; i++) {
            logDebugSheet.log(label + i.toString(), value);
        }

        const records = logDebugSheet.rows;
        expect(records.length).toBe(numRecords);
        for (let i = 0; i < numRecords; i++) {
            expect(records[i][1]).toBe(label + i.toString());
            expect(records[i][2]).toBe(JSON.stringify(value));
        }
    });

    it("値がオブジェクトの配列の場合、シートに複数のログレコードを挿入する", () => {
        const label = "test label";
        const value = "test value";
        const values = [];
        for (let i = 0; i < numRecords; i++) {
            values.push({ key: value + i.toString() });
        }
        logDebugSheet.log(label, values);

        const records = logDebugSheet.rows;
        expect(records.length).toBe(numRecords);
        for (let i = 0; i < numRecords; i++) {
            expect(records[i][1]).toBe(label);
            expect(records[i][2]).toBe(JSON.stringify(values[i]));
        }
    });
});

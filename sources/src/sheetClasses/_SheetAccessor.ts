/**
 * スプレッドシートアクセサクラス
 * @author catdance124
 */
export class SheetAccessor {
    /**
     * ヘッダー配列
     */
    private _headers: string[];
    /**
     * スプレッドシート
     */
    private _sheet: GoogleAppsScript.Spreadsheet.Sheet;
    /**
     * コンストラクタ
     * @param headers - ヘッダー配列
     * @param sheetName - シート名
     */
    constructor(headers: string[], sheetName: string) {
        this._headers = headers;
        this._sheet = this._getSheet(headers, sheetName);
    }

    /**
     * シートのデータ数を取得する
     * @returns データ数
     */
    private _getRecordNumber(): number {
        const maxRow = this._sheet.getMaxRows();
        let lastRow = maxRow;
        if (this._sheet.getRange(maxRow, 1).isBlank()) {
            lastRow = this._sheet
                .getRange(maxRow, 1)
                .getNextDataCell(SpreadsheetApp.Direction.UP)
                .getRowIndex();
        }
        const recordNumber = lastRow - [this._headers].length;
        return recordNumber;
    }

    /**
     * シートを設定する
     * @param sheetName - シート名
     * @param n - シートの挿入位置
     */
    private _getSheet(
        headers: string[],
        sheetName: string
    ): GoogleAppsScript.Spreadsheet.Sheet {
        let sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
        if (!sheet) {
            sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
            sheet.setName(sheetName);
        }
        // plainなシートであればヘッダーを設定
        if (sheet.getLastRow() == 0) {
            sheet
                .getRange(1, 1, [headers].length, headers.length)
                .setValues([headers]);
            sheet.setFrozenRows(1);
        }
        return sheet;
    }

    /**
     * シート上部の過去レコードを非表示にする
     * @param visibleRecordMaxNumber - シートに表示するレコード数
     */
    hideUpperRows(visibleRecordMaxNumber: number = 30): void {
        const recordNumber = this._getRecordNumber();
        if (visibleRecordMaxNumber < recordNumber) {
            this._sheet.hideRows(
                1 + [this._headers].length,
                recordNumber - visibleRecordMaxNumber
            );
        }
    }

    /**
     *  シートから値を読み込む
     * @returns 値
     */
    readValuesFromSheet(): any[][] {
        const recordNumber = this._getRecordNumber();
        if (0 < recordNumber) {
            return this._sheet
                .getRange(
                    1 + [this._headers].length,
                    1,
                    recordNumber,
                    this._headers.length
                )
                .getValues();
        } else {
            return [];
        }
    }

    /**
     * シートに値を書き込む
     * @param values - 値
     */
    writeValuesToSheet(values: any[][]): void {
        if (0 < values.length) {
            this._sheet
                .getRange(
                    1 + [this._headers].length,
                    1,
                    values.length,
                    this._headers.length
                )
                .setValues(values);
        }
    }
}

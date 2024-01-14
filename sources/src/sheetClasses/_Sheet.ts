import { sheetRecord } from "../interfaces";
import { SheetAccessor } from "./_SheetAccessor";

/**
 * スプレッドシート基底クラス
 * @author catdance124
 */
export class Sheet {
    /**
     * データ配列
     */
    private _rows: any[][];
    /**
     * スプレッドシートアクセサクラス
     */
    private _sheetAccessor: SheetAccessor;
    /**
     * ヘッダー配列
     */
    protected _headers: string[];

    /**
     * データ配列を取得する
     * @returns データ配列
     */
    get rows(): any[][] {
        return this._rows;
    }

    /**
     * コンストラクタ
     * @param headers - ヘッダー配列
     * @param sheetName - シート名
     */
    protected constructor(headers: string[], sheetName: string) {
        this._sheetAccessor = new SheetAccessor(headers, sheetName);
        this._headers = headers;
        this._rows = this._sheetAccessor.readValuesFromSheet();
    }

    /**
     * シート上部の過去レコードを非表示にする
     * @param visibleRecordMaxNumber - シートに表示するレコード数
     */
    protected _hideUpperRows(visibleRecordMaxNumber: number = 30): void {
        this._sheetAccessor.hideUpperRows(visibleRecordMaxNumber);
    }

    /**
     * レコードを指定カラムに沿ってソートする
     *
     * @protected
     * @param column - ソートするカラムのインデックス
     * @param ascending - ソート順序 デフォルトは昇順
     */
    protected _sortRows(column: number, ascending: boolean = true): void {
        let rows = this.rows;
        rows.sort((a, b) => {
            const aValue = a[column];
            const bValue = b[column];
            if (ascending) {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
        this.rows = rows;
    }

    /**
     * レコードを挿入する
     * @param sheetRecord - シートレコード
     */
    insert(sheetRecord: sheetRecord): void {
        const rowData = Object.values(sheetRecord);
        // 行を追加しシートへ出力
        let rows = this.rows;
        rows.push(rowData.concat(Array(this._headers.length - rowData.length)));
        this.rows = rows;
    }

    /**
     * データ配列を設定する
     * @param rows - データ配列
     */
    set rows(rows: any[][]) {
        this._rows = rows;
        this._sheetAccessor.writeValuesToSheet(rows);
    }
}

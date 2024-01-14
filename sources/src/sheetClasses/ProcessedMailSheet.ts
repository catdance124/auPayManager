import { processedMailSheetRecord } from "../interfaces";
import { Sheet } from "./_Sheet";

/**
 * 処理済みメールシートクラス
 * @author catdance124
 */
export class ProcessedMailSheet extends Sheet {
    /**
     * シングルトンインスタンス
     */
    private static _instance: ProcessedMailSheet;

    /**
     * シングルトンインスタンスを取得する
     * @returns シングルトンインスタンス
     */
    public static getInstance(): ProcessedMailSheet {
        if (!this._instance) {
            this._instance = new ProcessedMailSheet();
        }
        return this._instance;
    }

    /**
     * IDリスト
     */
    private _idList: string[];

    /**
     * コンストラクタ
     */
    private constructor() {
        const headers = ["ID", "受信日時", "件名"];
        const sheetName = "processed_mail";
        super(headers, sheetName);
        this._idList = this._getIdList();
    }

    /**
     * IDリストを取得する
     * @returns IDリスト
     */
    private _getIdList(): string[] {
        let idList: string[] = [];
        const rows = this.rows;
        if (0 < rows.length) {
            idList = rows.map((row) => row[this._headers.indexOf("ID")]);
        }
        return idList;
    }

    /**
     * 指定のメールIDが存在するかどうかを確認する
     * @param mailId - メールID
     * @returns メールIDの存在確認結果
     */
    existId(mailId: string): boolean {
        return this._idList.some(function (id, _index, _idList) {
            return id === mailId;
        });
    }

    insert(sheetRecord: processedMailSheetRecord): void {
        super.insert(sheetRecord);
        this._hideUpperRows();
    }
}

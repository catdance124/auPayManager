import { qrPayReportSheetRecord } from "../interfaces";
import { Sheet } from "./_Sheet";

/**
 * QR Pay利用・チャージ履歴シートクラス
 * @author catdance124
 */
export class QrPayReportSheet extends Sheet {
    /**
     * シングルトンインスタンス
     */
    private static _instance: QrPayReportSheet;

    /**
     * シングルトンインスタンスを取得する
     * @returns シングルトンインスタンス
     */
    public static getInstance(): QrPayReportSheet {
        if (!this._instance) {
            this._instance = new QrPayReportSheet();
        }
        return this._instance;
    }

    /**
     * コンストラクタ
     */
    private constructor() {
        const headers = ["種別", "日時", "金額", "内容", "残高"];
        const sheetName = "QR Pay";
        super(headers, sheetName);
    }

    insert(sheetRecord: qrPayReportSheetRecord): void {
        super.insert(sheetRecord);
        this._hideUpperRows();
    }
}

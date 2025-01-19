import { logDebugSheetRecord } from "../interfaces";
import { Sheet } from "./_Sheet";

/**
 * デバッグログシートクラス
 * @author catdance124
 */
export class LogDebugSheet extends Sheet {
    /**
     * シングルトンインスタンス
     */
    private static _instance: LogDebugSheet;

    /**
     * シングルトンインスタンスを取得する
     * @returns シングルトンインスタンス
     */
    public static getInstance(): LogDebugSheet {
        if (!this._instance) {
            this._instance = new LogDebugSheet();
        }
        return this._instance;
    }

    /**
     * コンストラクタ
     */
    private constructor() {
        const headers = ["日時", "ラベル", "log"];
        const sheetName = "log";
        super(headers, sheetName);
    }

    insert(sheetRecord: logDebugSheetRecord): void {
        super.insert(sheetRecord);
        this._hideUpperRows();
    }

    /**
     * デバッグログを出力する
     * @param label - ラベル
     * @param value - 値
     */
    log(label: string, value: string | object): void {
        const date = new Date();
        if (typeof value === "string") {
            this.insert({ date: date, label: label, value: value });
        } else if (typeof value === "object") {
            if (Array.isArray(value)) {
                for (let obj of value) {
                    this.insert({
                        date: date,
                        label: label,
                        value: JSON.stringify(obj),
                    });
                }
            } else {
                this.insert({
                    date: date,
                    label: label,
                    value: JSON.stringify(value),
                });
            }
        }
    }
}

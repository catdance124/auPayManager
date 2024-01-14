import { Config } from "../config";
import {
    summedAmountEachLabel,
    paymentNote,
    summedAmount,
    creditCardReportSheetRecord,
    creditCardDetailBasicReport,
} from "../interfaces";
import { Sheet } from "./_Sheet";
import { CommonUtils, CreditCardUtils } from "../utils";

/**
 * クレジットカード利用履歴シートクラス
 * @author catdance124
 */
export class CreditCardReportSheet extends Sheet {
    /**
     * シングルトンインスタンス
     */
    private static _instance: CreditCardReportSheet;

    /**
     * シングルトンインスタンスを取得する
     * @returns シングルトンインスタンス
     */
    public static getInstance(): CreditCardReportSheet {
        if (!this._instance) {
            this._instance = new CreditCardReportSheet();
        }
        return this._instance;
    }

    /**
     * コンフィグ
     */
    private _config: Config;

    /**
     * デフォルトの利用内容
     */
    private _defaultContent: string;

    /**
     * ID列のインデックス
     */
    private _idColumn: number;

    /**
     * 支払い日列のインデックス
     */
    private _paymentDateColumn: number;

    /**
     * 支払い元列のインデックス
     */
    private _paymentLabelColumn: number;

    /**
     * 金額列のインデックス
     */
    amountColumn: number;

    /**
     * 内容列のインデックス
     */
    contentColumn: number;

    /**
     * 日時列のインデックス
     */
    dateColumn: number;

    /**
     * メモ列のインデックス
     */
    paymentNoteColumn: number;

    /**
     * コンストラクタ
     * @param paymentDate - 支払日
     */
    private constructor() {
        // シートインスタンスを取得
        const headers = [
            "ID",
            "支払い日",
            "利用日時",
            "利用内容",
            "利用金額",
            "支払い元",
            "メモ",
        ];
        const sheetName = "creditCard";
        super(headers, sheetName);

        // フィールド変数に格納
        this._config = new Config();

        // 履歴データ関連
        this._idColumn = this._headers.indexOf("ID");
        this._paymentDateColumn = this._headers.indexOf("支払い日");
        this.dateColumn = this._headers.indexOf("利用日時");
        this.contentColumn = this._headers.indexOf("利用内容");
        this.amountColumn = this._headers.indexOf("利用金額");
        this._paymentLabelColumn = this._headers.indexOf("支払い元");
        this.paymentNoteColumn = this._headers.indexOf("メモ");
        this._defaultContent = "カードショッピング利用";
    }

    /**
     * メモ付きの支払い履歴を取得する
     * @returns メモ付き支払い履歴
     */
    getPaymentNotes(paymentDate: Date): paymentNote[] {
        let paymentNotes: paymentNote[] = [];

        let rows = this.rows;
        if (0 < rows.length) {
            rows = rows.filter((row) => {
                return (
                    row[this._paymentDateColumn].getTime() ==
                    paymentDate.getTime()
                );
            });
            for (let row of rows) {
                if (row[this.paymentNoteColumn]) {
                    paymentNotes.push({
                        date: row[this.dateColumn],
                        content: row[this.contentColumn],
                        amount: row[this.amountColumn],
                        paymentNote: row[this.paymentNoteColumn],
                    });
                }
            }
        }

        return paymentNotes;
    }

    /**
     * 支払い種別ごとの合計金額を取得する
     * @returns 支払い種別ごとの合計金額
     */
    getSummedAmount(paymentDate: Date): summedAmount {
        // 支払い種別ごとの合計を格納する変数を0埋めで用意
        let summedAmountEachLabel = this._config.paymentLabelList.reduce(
            (res, paymentLabel) => {
                res[paymentLabel] = 0;
                return res;
            },
            {} as summedAmountEachLabel
        );

        // シートから支払い種別ごとの合計を計算
        let rows = this.rows;
        if (0 < rows.length) {
            rows = rows.filter((row) => {
                return (
                    row[this._paymentDateColumn].getTime() ==
                    paymentDate.getTime()
                );
            });
            summedAmountEachLabel = rows.reduce((res, row) => {
                res[row[this._paymentLabelColumn]] += row[this.amountColumn];
                return res;
            }, summedAmountEachLabel);
        }

        // 全体の合計を計算
        const summedAmountAll = Object.values(summedAmountEachLabel).reduce(
            (sum, value) => {
                return sum + value;
            },
            0
        );

        return {
            all: summedAmountAll,
            eachLabel: summedAmountEachLabel,
        } as summedAmount;
    }

    insert(sheetRecord: creditCardReportSheetRecord): void {
        super.insert(sheetRecord);
        this._sortRows(this.dateColumn);
        this._hideUpperRows(60);
    }

    /**
     * 支払いラベルを更新する
     * @param id - レコードID
     * @param label - 支払いラベル
     * @returns 更新された行データ
     */
    updatePaymentLabel(id: string, label: string): any {
        let updatedRowData;

        let rows = this.rows;
        if (0 < rows.length) {
            // 各行を処理
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                const targetId = row[this._idColumn];
                if (targetId === id) {
                    row[this._paymentLabelColumn] = label;
                    updatedRowData = row;
                    break;
                }
            }

            this.rows = rows;
        }

        return updatedRowData;
    }

    /**
     * 支払いメモを更新する
     * @param id - レコードID
     * @param note - 支払いメモ
     * @returns 更新された行データ
     */
    updatePaymentNote(id: string, note: string): any {
        let updatedRowData;

        let rows = this.rows;
        if (0 < rows.length) {
            // 各行を処理
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                const targetId = row[this._idColumn];
                if (targetId === id) {
                    row[this.paymentNoteColumn] = note;
                    updatedRowData = row;
                    break;
                }
            }

            this.rows = rows;
        }

        return updatedRowData;
    }

    /**
     * 利用詳細を更新する
     * @param creditCardDetailBasicReport - クレジットカード利用詳細レポート
     * @return 更新されたレコード
     */
    upsertPaymentDetail(
        creditCardDetailBasicReport: creditCardDetailBasicReport
    ): creditCardReportSheetRecord {
        // 対象保持用
        let targetIndex;

        let rows = this.rows;
        if (0 < rows.length) {
            // 各行を処理
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const targetDate = row[this.dateColumn];
                const targetAmount = row[this.amountColumn];
                const targetContent = row[this.contentColumn];
                if (!targetDate) {
                    continue;
                }

                // 金額が一致*未処理*最古のレコードを対象として保持
                const isSameAmount =
                    targetAmount == creditCardDetailBasicReport.amount;
                const isUnUpdated = targetContent == this._defaultContent;
                if (isSameAmount && isUnUpdated) {
                    targetIndex = i;
                    break;
                }
            }
        }

        // 対象のレコードがある場合update、ない場合insertする
        let upsertedRecord;
        if (targetIndex) {
            rows[targetIndex][this.contentColumn] =
                creditCardDetailBasicReport.content;
            this.rows = rows;
            // 更新データを返却
            const upsertedRowData = rows[targetIndex];
            upsertedRecord = {
                id: upsertedRowData[this._idColumn],
                paymentDate: upsertedRowData[this._paymentDateColumn],
                date: upsertedRowData[this.dateColumn],
                content: upsertedRowData[this.contentColumn],
                amount: upsertedRowData[this.amountColumn],
                paymentLabel: upsertedRowData[this._paymentLabelColumn],
                paymentNote: upsertedRowData[this.paymentNoteColumn],
            };
        } else {
            // 支払日を計算
            const creditCardImportantDate =
                CreditCardUtils.calculateImportantDate(
                    creditCardDetailBasicReport.date
                );
            upsertedRecord = {
                id: "X" + CommonUtils.createId(),
                paymentDate: creditCardImportantDate.paymentDate,
                date: creditCardDetailBasicReport.date,
                content: creditCardDetailBasicReport.content,
                amount: creditCardDetailBasicReport.amount,
                paymentLabel: this._config.paymentLabel.default,
            };
            this.insert(upsertedRecord);
        }
        return upsertedRecord;
    }
}

import { paymentNote, summedAmount } from "../interfaces";
import { CommonUtils, CreditCardUtils } from "../utils";
import { LogDebugSheet } from "../sheetClasses/LogDebugSheet";
import { CreditCardReportSheet } from "../sheetClasses/CreditCardReportSheet";
import { LineManager } from "./LineManager";
import { FlexMessageManager } from "./FlexMessageManager";
import { Config } from "../config";

/**
 * AuPay使用履歴botへの返信処理を管理するマネージャクラス
 * @author catdance124
 */
export class AuPayMessageManager {
    /**
     * 設定オブジェクト
     */
    private _config: Config;
    /**
     * クレジットカード利用レポートシート
     */
    private _creditCardReportSheet: CreditCardReportSheet;
    /**
     * Flex Messageマネージャオブジェクト
     */
    private _flexMessageManager: FlexMessageManager;

    /**
     * LINEマネージャオブジェクト
     */
    private _lineManager: LineManager;

    /**
     * デバッグログシートオブジェクト
     */
    private _logDebugSheet: LogDebugSheet;
    /**
     * コンストラクタ
     */
    constructor() {
        this._lineManager = new LineManager();
        this._flexMessageManager = new FlexMessageManager();
        this._logDebugSheet = LogDebugSheet.getInstance();
        this._creditCardReportSheet = CreditCardReportSheet.getInstance();
        this._config = new Config();
    }

    /**
     * メッセージタイプのイベントを処理する
     * @param event - イベントデータ
     */
    private _processMessageTypeEvent(event: {
        message: { type: string; text: string };
        replyToken: string;
        source: {
            type: string;
            userId: string;
            groupId: string;
            roomId: string;
        };
    }) {
        if (event.message.type != "text") {
            return;
        }

        // "ルームID"であればルームIDをリプライ
        if (event.message.text == "ルームID") {
            this._replyRoomId(event);
            return;
        }

        // "updatePaymentLabel"であればメモ追加を行い、ラベルを更新しリプライ
        if (event.message.text.match("updatePaymentLabel")) {
            const lines = event.message.text.split("\n");
            const id = lines[1];
            const note = lines.slice(2).join("\n").trim();
            // メモ更新
            this._creditCardReportSheet.updatePaymentNote(id, note);
            // ラベル更新して返信
            this._replyResultOfUpdatePaymentLabel(
                event,
                id,
                this._config.paymentLabel.notable
            );
            return;
        }

        // "合計"であれば当月のサマリをリプライ
        if (event.message.text == "合計") {
            // 支払日を計算
            const creditCardImportantDate =
                CreditCardUtils.calculateImportantDate(new Date());
            // 合計を取得
            const summedAmount = this._creditCardReportSheet.getSummedAmount(
                creditCardImportantDate.paymentDate
            );
            // メモを取得
            const paymentNotes = this._creditCardReportSheet.getPaymentNotes(
                creditCardImportantDate.paymentDate
            );

            this._replySummedAmount(
                event,
                creditCardImportantDate.paymentDate,
                summedAmount,
                paymentNotes
            );
            return;
        }
    }

    /**
     * ポストバックタイプのイベントを処理する
     * @param event - イベントデータ
     */
    private _processPostbackTypeEvent(event: {
        postback: { data: any };
        replyToken: string;
        source: {
            type: string;
            userId: string;
            groupId: string;
            roomId: string;
        };
    }) {
        const postbackData = event.postback.data;
        const parsedPostbackData = CommonUtils.parseQueryString(postbackData);

        // 支払いラベル更新用クイックリプライを呼び出す
        if (parsedPostbackData.method == "quickReplyForUpdatePaymentLabel") {
            this._replyQuickReplyForUpdatePaymentLabel(
                event,
                parsedPostbackData.id
            );
        }

        // クイックリプライを押されたときに支払いラベル更新
        if (parsedPostbackData.method == "updatePaymentLabel") {
            // メモ可能な支払い元の場合
            if (parsedPostbackData.label == this._config.paymentLabel.notable) {
                const messages = [
                    {
                        type: "text",
                        text: `
                        updatePaymentLabel
                        ${parsedPostbackData.id}
                        
                        ＜ここを書き換えてメモを送信してね＞`.replace(
                            /^\s+/gm,
                            ""
                        ),
                    },
                ];
                this._lineManager.sendReplyMessage(event, messages);
            } else {
                // メモを空白に更新
                this._creditCardReportSheet.updatePaymentNote(
                    parsedPostbackData.id,
                    ""
                );
                // ラベル更新して返信
                this._replyResultOfUpdatePaymentLabel(
                    event,
                    parsedPostbackData.id,
                    parsedPostbackData.label
                );
            }
        }
    }

    /**
     * クイックリプライを返信する（支払いラベルの更新用）
     * @param event - イベントデータ
     * @param id - 支払いID
     */
    private _replyQuickReplyForUpdatePaymentLabel(
        event: {
            replyToken: string;
            source: {
                type: string;
                userId: string;
                groupId: string;
                roomId: string;
            };
        },
        id: string
    ) {
        let messages = [
            {
                type: "text",
                text: "$ 支払い元を選んでね",
                emojis: [
                    {
                        index: "0",
                        productId: "5ac2264e040ab15980c9b44b",
                        emojiId: "001",
                    },
                ],
                quickReply: {
                    items: [],
                },
            },
        ];
        for (let label of this._config.paymentLabelList) {
            Array.prototype.push.apply(messages[0].quickReply.items, [
                {
                    type: "action",
                    action: {
                        type: "postback",
                        label: label,
                        data: `method=updatePaymentLabel&id=${id}&label=${label}`,
                    },
                },
            ]);
        }
        this._lineManager.sendReplyMessage(event, messages);
        return;
    }

    /**
     * 支払いラベルの更新結果を返信する
     * @param event - イベントデータ
     * @param id - 支払いID
     * @param label - 支払いラベル
     */
    private _replyResultOfUpdatePaymentLabel(
        event: {
            replyToken: string;
            source: {
                type: string;
                userId: string;
                groupId: string;
                roomId: string;
            };
        },
        id: string,
        label: string
    ) {
        const updatedRowData = this._creditCardReportSheet.updatePaymentLabel(
            id,
            label
        );
        let messages = [];
        if (updatedRowData) {
            const creditCardImportantDate =
                CreditCardUtils.calculateImportantDate(
                    updatedRowData[this._creditCardReportSheet.dateColumn]
                );
            const creditCardReportSheet = CreditCardReportSheet.getInstance();
            messages =
                this._flexMessageManager.createCreditCardUsageFlexMessage(
                    {
                        date: updatedRowData[
                            this._creditCardReportSheet.dateColumn
                        ],
                        content:
                            updatedRowData[
                                this._creditCardReportSheet.contentColumn
                            ],
                        amount: updatedRowData[
                            this._creditCardReportSheet.amountColumn
                        ],
                        id: id,
                        paymentLabel: label + " (更新)",
                        summedAmount: creditCardReportSheet.getSummedAmount(
                            creditCardImportantDate.paymentDate
                        ).eachLabel[this._config.paymentLabel.default],
                        closingDate: creditCardImportantDate.closingDate,
                    },
                    updatedRowData[
                        this._creditCardReportSheet.paymentNoteColumn
                    ]
                );
        } else {
            messages.push({
                type: "text",
                text: "期限切れデータだよ",
            });
        }
        this._lineManager.sendReplyMessage(event, messages);
        return;
    }

    /**
     * ルームIDを返信する
     * @param event - イベントデータ
     */
    private _replyRoomId(event: {
        replyToken: string;
        source: {
            type: string;
            userId: string;
            groupId: string;
            roomId: string;
        };
    }) {
        const roomInfo = this._lineManager.getRoomInfo(event);
        const messages = [
            {
                type: "text",
                text: roomInfo.type + "_id = " + roomInfo.id,
            },
        ];
        this._lineManager.sendReplyMessage(event, messages, false);
    }

    /**
     * サマリの合計金額を返信する
     * @param event - イベントデータ
     * @param paymentDate - 支払い日
     * @param summedAmount - 支払い種別ごとの合計金額
     * @param paymentNotes - メモ付き支払い履歴
     */
    private _replySummedAmount(
        event: {
            replyToken: string;
            source: {
                type: string;
                userId: string;
                groupId: string;
                roomId: string;
            };
        },
        paymentDate: Date,
        summedAmount: summedAmount,
        paymentNotes: paymentNote[]
    ) {
        const messages =
            this._flexMessageManager.createPaymentSummaryFlexMessage({
                paymentDate: paymentDate,
                summedAmount: summedAmount,
                paymentNotes: paymentNotes,
            });
        this._lineManager.sendReplyMessage(event, messages);
        return;
    }

    /**
     * 投稿されたメッセージを処理する
     * @param event - イベントデータ
     */
    executePostedMessages(event: {
        type: any;
        message: { type: string; text: string };
        postback: any;
        replyToken: any;
        source: {
            type: string;
            userId: string;
            groupId: string;
            roomId: string;
        };
    }) {
        this._logDebugSheet.log("message receive", event);

        if (event.type == "message") {
            this._processMessageTypeEvent(event);
        } else if (event.type == "postback") {
            this._processPostbackTypeEvent(event);
        }
    }
}

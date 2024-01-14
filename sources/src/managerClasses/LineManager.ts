import { LogDebugSheet } from "../sheetClasses/LogDebugSheet";
import { CommonUtils } from "../utils";

/**
 * LINE通知機能を管理するマネージャクラス
 * @author catdance124
 */
export class LineManager {
    /**
     * LINEアクセストークン
     */
    private _lineAccessToken: string | null;

    /**
     * LINEグループID
     */
    private _lineGroupId: string | null;

    /**
     * LINE通知の有無
     */
    private _lineNotify: boolean;

    /**
     * デバッグログシート
     */
    private _logDebugSheet: LogDebugSheet;
    /**
     * コンストラクタ
     */
    constructor() {
        this._lineAccessToken = CommonUtils.getProperty("LINE_ACCESS_TOKEN");
        this._lineGroupId = CommonUtils.getProperty("LINE_GROUP_ID");
        this._lineNotify =
            CommonUtils.getProperty("LINE_NOTIFY") === "TRUE" ? true : false;
        this._logDebugSheet = LogDebugSheet.getInstance();
    }

    /**
     * 指定した投稿先にpush通知を送信
     * @param roomId - 送信先のルームID
     * @param messages - 送信するメッセージの配列
     */
    private _sendPushMessage(roomId: string | null, messages: any[]) {
        try {
            const URL = "https://api.line.me/v2/bot/message/push";
            if (this._lineNotify) {
                const res = UrlFetchApp.fetch(URL, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this._lineAccessToken,
                    },
                    payload: JSON.stringify({
                        to: roomId,
                        messages: messages,
                    }),
                    muteHttpExceptions: true,
                });
                const parsedRes = JSON.parse(res.getContentText());
                if (parsedRes.message) {
                    this._logDebugSheet.log("error", parsedRes);
                }
            }
            this._logDebugSheet.log("message post", messages);
        } catch (e: any) {
            this._logDebugSheet.log("error", e.message);
        }
    }

    /**
     * ルーム情報を取得する
     * @param event - イベントオブジェクト
     * @returns ルーム情報
     */
    getRoomInfo(event: {
        replyToken: string;
        source: {
            type: string;
            userId: string;
            groupId: string;
            roomId: string;
        };
    }): { type: string; id: string } {
        const type = event.source.type;
        let id = "";

        // typeを判定して、idを取得
        if (type == "user") {
            id = event.source.userId;
        } else if (type == "group") {
            id = event.source.groupId;
        } else if (type == "room") {
            id = event.source.roomId;
        }
        return {
            type: type,
            id: id,
        };
    }

    /**
     * 登録グループにpush通知を送信
     * @param messages - 送信するメッセージの配列
     */
    sendPushMessageToGroup(messages: any[]) {
        this._sendPushMessage(this._lineGroupId, messages);
    }

    /**
     * 指定したリプライ先にメッセージを返信
     * roomIdが渡されていて、グループIDと一致しない場合は何も行わない
     * @param replyToken - リプライ先のトークン
     * @param messages - 送信するメッセージの配列
     * @param roomId - 送信先のルームID
     */
    sendReplyMessage(
        event: {
            replyToken: string;
            source: {
                type: string;
                userId: string;
                groupId: string;
                roomId: string;
            };
        },
        messages: any[],
        needsRoomIdCheck: boolean = true
    ) {
        if (needsRoomIdCheck) {
            const roomId = this.getRoomInfo(event).id;
            if (roomId !== this._lineGroupId) {
                return;
            }
        }
        try {
            const URL = "https://api.line.me/v2/bot/message/reply";
            const res = UrlFetchApp.fetch(URL, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: "Bearer " + this._lineAccessToken,
                },
                method: "post",
                payload: JSON.stringify({
                    replyToken: event.replyToken,
                    messages: messages,
                }),
                muteHttpExceptions: true,
            });
            const parsedRes = JSON.parse(res.getContentText());
            if (parsedRes.message) {
                this._logDebugSheet.log("error", parsedRes);
            }
            this._logDebugSheet.log("message post", messages);
        } catch (e: any) {
            this._logDebugSheet.log("error", e.message);
        }
    }
}

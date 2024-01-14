import { AuPayMailManager } from "./managerClasses/AuPayMailManager";
import { AuPayMessageManager } from "./managerClasses/AuPayMessageManager";
import { CommonUtils } from "./utils";

/**
 * 定期実行メイン関数
 * 多重実行を許容しない
 */
export function main() {
    const lock = LockService.getScriptLock();
    if (lock.tryLock(1)) {
        const auPayMailManager = new AuPayMailManager();
        auPayMailManager.executeAllMails();
        lock.releaseLock();
    }
}

/**
 * メッセージを受信したときに発火する関数
 * @param e - POSTリクエストのデータ
 */
export function doPost(e: { postData: { contents: string } }) {
    const event = JSON.parse(e.postData.contents).events[0];

    const auPayMessageManager = new AuPayMessageManager();
    auPayMessageManager.executePostedMessages(event);
}

//////////////////////////////////////////////////////////////////
// 以下メンテナンス用
// 初回は過去分のクレジットカード利用履歴をある程度取得するために
// manual1を1回実行したのち、manual2を1回実行する
// 実行時間の制約があるため、それぞれで実行としている
//////////////////////////////////////////////////////////////////
export function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu("LINE通知")
        .addItem("LINE通知をONにする", "lineNotifyOn")
        .addItem("LINE通知をOFFにする", "lineNotifyOff")
        .addToUi();
    ui.createMenu("初回一括取得")
        .addItem("速報メールのみを検索し処理する", "manual1")
        .addItem("詳細メールのみを検索し処理する", "manual2")
        .addToUi();
}
export function lineNotifyOn() {
    CommonUtils.setProperty("LINE_NOTIFY", "TRUE");
}
export function lineNotifyOff() {
    CommonUtils.setProperty("LINE_NOTIFY", "FALSE");
}

export function manual1() {
    const lineNotify = CommonUtils.getProperty("LINE_NOTIFY");
    CommonUtils.setProperty("LINE_NOTIFY", "FALSE");
    const auPayMailManager = new AuPayMailManager();
    auPayMailManager.executeCreditCardUsageMails();
    CommonUtils.setProperty("LINE_NOTIFY", lineNotify);
}
export function manual2() {
    const lineNotify = CommonUtils.getProperty("LINE_NOTIFY");
    CommonUtils.setProperty("LINE_NOTIFY", "FALSE");
    const auPayMailManager = new AuPayMailManager();
    auPayMailManager.executeCreditCardUsageDetailsMails();
    CommonUtils.setProperty("LINE_NOTIFY", lineNotify);
}

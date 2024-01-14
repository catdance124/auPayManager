import { ConfigInterface } from "./interfaces";

/**
 * 設定情報を管理するクラス
 * @author catdance124
 */
export class Config implements ConfigInterface {
    /**
     * クレジットカードの締め日
     */
    readonly creditCardClosingDay = 15;
    /**
     * クレジットカードの支払日
     */
    readonly creditCardPaymentDay = 10;
    /**
     * 検索メールの件数上限
     */
    readonly maxThreadCount = 10;
    /**
     * 支払い元のラベル
     */
    readonly paymentLabel = {
        /**
         * デフォルトで使用されるラベル
         */
        default: "家計",
        /**
         * メモ記述が可能なラベル
         */
        notable: "特殊",
        /**
         * その他のラベルリスト
         */
        optional: ["貯金"],
    };
    /**
     * 支払い元のラベルのリスト
     */
    readonly paymentLabelList = [
        this.paymentLabel.default,
        this.paymentLabel.notable,
    ].concat(this.paymentLabel.optional);
    /**
     * QR Payのチャージ推奨閾値
     */
    readonly qrPayReminingThreshold = 3000;
}

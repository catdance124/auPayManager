import { queryString } from "./interfaces";
import { Config } from "./config";
import { parse } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

/**
 * クレジットカード関連のユーティリティクラス
 */
export namespace CreditCardUtils {
    /**
     * クレジットカードの重要な日付を計算する
     * @param usageDate - 利用日
     * @returns 支払日と締め日のオブジェクト
     */
    export function calculateImportantDate(usageDate: Date): {
        paymentDate: Date;
        closingDate: Date;
    } {
        const usageMonth = usageDate.getMonth();
        const usageDay = usageDate.getDate();

        // 支払日と締め日を設定する
        const config = new Config();
        let paymentDate = new Date(usageDate);
        let closingDate = new Date(usageDate);
        // 月を設定
        if (usageDay <= config.creditCardClosingDay) {
            paymentDate.setMonth(usageMonth + 1);
        } else {
            paymentDate.setMonth(usageMonth + 2);
            closingDate.setMonth(usageMonth + 1);
        }
        // 日を設定
        paymentDate.setDate(config.creditCardPaymentDay);
        closingDate.setDate(config.creditCardClosingDay);
        // 時刻を設定
        paymentDate.setHours(0, 0, 0, 0);
        closingDate.setHours(0, 0, 0, 0);

        return {
            paymentDate: paymentDate,
            closingDate: closingDate,
        };
    }
}

/**
 * 共通ユーティリティクラス
 */
export namespace CommonUtils {
    /**
     * クエリストリングを辞書に変換する
     *
     * @param queryString - 変換するクエリストリング
     * @returns 変換された辞書オブジェクト
     */
    export function parseQueryString(queryString: string): queryString {
        const params = queryString.split("&");

        let parsedData: queryString = {};

        for (let param of params) {
            const keyValue = param.split("=");
            const key = decodeURIComponent(keyValue[0]);
            const value = decodeURIComponent(keyValue[1]);
            parsedData[key] = value;
        }

        return parsedData;
    }

    /**
     * 「〇〇円」形式の文字列を数値に変換する
     * 文字列に「取消」が含まれている場合は負数にする
     *
     * @param yenStr - 変換する「〇〇円」形式の文字列
     * @returns 変換された数値
     */
    export function convertYenStrToNum(yenStr: string): number {
        let yenNum = 0;
        const res = yenStr.match(/(\d{1,3}(,\d{3})*)円/);
        if (res) {
            yenNum = Number(res[1].replace(/,/g, ""));
            if (yenStr.match("取消")) {
                yenNum *= -1;
            }
        }
        return yenNum;
    }

    /**
     * 数値を「〇〇円」形式の文字列に変換する
     *
     * @param number - 変換する数値
     * @returns 変換された「〇〇円」形式の文字列
     */
    export function formatNumberWithCommas(number: number): string {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "円";
    }

    /**
     * タイムスタンプを16進数に変換しIDを生成する
     *
     * @param [myStrong] - 乱数生成の強度（省略時は10）
     * @returns 生成されたID
     */
    export function createId(myStrong?: number): string {
        let strong = 10;
        if (myStrong) strong = myStrong;
        return (
            new Date().getTime().toString(16) +
            Math.floor(strong * Math.random()).toString(16)
        );
    }

    /**
     * スクリプトプロパティにitemをセットする
     * valueがnullの場合はkeyを削除し、getしたときnullになるようにする
     *
     * @param key - キー
     * @param value - 値
     */
    export function setProperty(key: string, value: string | null) {
        if (value === null) {
            PropertiesService.getScriptProperties().deleteProperty(key);
        } else {
            PropertiesService.getScriptProperties().setProperty(key, value);
        }
    }

    /**
     * スクリプトプロパティからitemをゲットする
     *
     * @param key - キー
     * @returns
     */
    export function getProperty(key: string): string | null {
        return PropertiesService.getScriptProperties().getProperty(key);
    }

    /**
     * dateオブジェクトを指定形式の文字列にフォーマットする
     *
     * @param utcDate - フォーマットするdateオブジェクト
     * @param format - フォーマット形式
     * @returns フォーマットされた文字列
     */
    export function formatDate(utcDate: Date, format: string): string {
        return formatInTimeZone(utcDate, "JST", format);
    }

    /**
     * 指定形式の文字列をdateオブジェクトにパースする
     * @param dateString - パースする文字列
     * @param format - パース形式
     * @returns パースされたdateオブジェクト
     */
    export function parseDate(dateString: string, format: string): Date {
        return parse(dateString, format, new Date());
    }
}

/**
 * FlexMessageのユーティリティクラス
 */
export namespace FlexMessageUtils {
    /**
     * Box要素を生成する
     *
     * @param contents - Box要素内のコンテンツ
     * @param [layout="vertical"] - Boxのレイアウト（"vertical"または"horizontal"）
     * @param [margin="none"] - Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @param [spacing="none"] - Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたBox要素
     */
    export function _getBox(
        contents: any[],
        layout: string = "vertical",
        margin: string = "none",
        spacing: string = "none"
    ): any {
        return {
            type: "box",
            layout: layout,
            margin: margin,
            spacing: spacing,
            contents: contents,
        };
    }

    /**
     * 縦方向のBox要素を生成する
     *
     * @param contents - Box要素内のコンテンツ
     * @param [margin="none"] - Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @param [spacing="none"] - Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたBox要素
     */
    export function _getVerticalBox(
        contents: any[],
        margin: string = "none",
        spacing: string = "none"
    ): any {
        return _getBox(contents, "vertical", margin, spacing);
    }

    /**
     * 横方向のBox要素を生成する
     *
     * @param contents - Box要素内のコンテンツ
     * @param [margin="none"] - Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @param [spacing="none"] - Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたBox要素
     */
    export function _getHorizontalBox(
        contents: any[],
        margin: string = "none",
        spacing: string = "none"
    ): any {
        return _getBox(contents, "horizontal", margin, spacing);
    }

    /**
     * アウトライン付きのBubble要素を生成する
     *
     * @param contents - Bubble要素内のコンテンツ
     * @returns 生成されたBubble要素
     */
    export function _getOutline(contents: any[]): any {
        return {
            type: "bubble",
            body: _getVerticalBox(contents),
            styles: {
                footer: {
                    separator: false,
                },
            },
        };
    }

    /**
     * 左寄せのテキスト要素を生成する
     *
     * @param text - テキストの内容
     * @param [size="sm"] - テキストのサイズ（"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたテキスト要素
     */
    export function _getLeftText(text: string, size: string = "sm"): any {
        return {
            type: "text",
            size: size,
            color: "#555555",
            flex: 0,
            text: text,
        };
    }

    /**
     * 通常のテキスト要素を生成する
     *
     * @param text - テキストの内容
     * @param [size="sm"] - テキストのサイズ（"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたテキスト要素
     */
    export function _getNormalText(text: string, size: string = "sm"): any {
        return {
            type: "text",
            size: size,
            color: "#555555",
            text: text,
        };
    }

    /**
     * 右寄せのテキスト要素を生成する
     *
     * @param text - テキストの内容
     * @param [size="sm"] - テキストのサイズ（"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたテキスト要素
     */
    export function _getRightText(text: string, size: string = "sm"): any {
        return {
            type: "text",
            size: size,
            color: "#111111",
            align: "end",
            text: text,
        };
    }

    /**
     * セパレータ要素を生成する
     *
     * @param [margin="sm"] - セパレータのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"）
     * @returns 生成されたセパレータ要素
     */
    export function _getSeparator(margin: string = "sm"): any {
        return {
            type: "separator",
            margin: margin,
        };
    }
}

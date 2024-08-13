import { CommonUtils, CreditCardUtils } from "../src/utils";
import { PropertiesServiceMock } from "./mocks/PropertiesService.mock";

describe("CreditCardUtils", () => {
    describe("calculateImportantDate", () => {
        it("支払い月が翌月の場合、支払日と締め日を正しく計算すること。", () => {
            const usageDate = CommonUtils.parseDate(
                "2022/01/01 00:30:00",
                "yyyy/MM/dd HH:mm:ss"
            );
            const expected = {
                paymentDate: CommonUtils.parseDate(
                    "2022/02/10 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
                closingDate: CommonUtils.parseDate(
                    "2022/01/15 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
            };

            const result = CreditCardUtils.calculateImportantDate(usageDate);

            expect(result).toEqual(expected);
        });

        it("支払い月が翌月の場合、支払日と締め日を正しく計算すること。", () => {
            const usageDate = CommonUtils.parseDate(
                "2022/01/15 23:30:00",
                "yyyy/MM/dd HH:mm:ss"
            );
            const expected = {
                paymentDate: CommonUtils.parseDate(
                    "2022/02/10 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
                closingDate: CommonUtils.parseDate(
                    "2022/01/15 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
            };

            const result = CreditCardUtils.calculateImportantDate(usageDate);

            expect(result).toEqual(expected);
        });

        it("支払い月が翌々月の場合、支払日と締め日を正しく計算すること。", () => {
            const usageDate = CommonUtils.parseDate(
                "2022/01/16 06:30:00",
                "yyyy/MM/dd HH:mm:ss"
            );
            const expected = {
                paymentDate: CommonUtils.parseDate(
                    "2022/03/10 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
                closingDate: CommonUtils.parseDate(
                    "2022/02/15 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
            };

            // 内部ではgetDate(JST)で計算しているので、日付は合う
            const result = CreditCardUtils.calculateImportantDate(usageDate);

            expect(result).toEqual(expected);
        });

        it("支払い月が翌々月の場合、支払日と締め日を正しく計算すること。", () => {
            const usageDate = CommonUtils.parseDate(
                "2022/07/31 00:30:00",
                "yyyy/MM/dd HH:mm:ss"
            );
            const expected = {
                paymentDate: CommonUtils.parseDate(
                    "2022/09/10 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
                closingDate: CommonUtils.parseDate(
                    "2022/08/15 00:00:00",
                    "yyyy/MM/dd HH:mm:ss"
                ),
            };

            // 内部ではgetDate(JST)で計算しているので、日付は合う
            const result = CreditCardUtils.calculateImportantDate(usageDate);

            expect(result).toEqual(expected);
        });
    });
});

describe("CommonUtils", () => {
    describe("parseQueryString", () => {
        it("クエリストリングを辞書オブジェクトに変換する", () => {
            const queryString = "key1=value1&key2=value2&key3=value3";
            const expected = {
                key1: "value1",
                key2: "value2",
                key3: "value3",
            };

            const result = CommonUtils.parseQueryString(queryString);

            expect(result).toEqual(expected);
        });
    });

    describe("convertYenStrToNum", () => {
        it("「〇〇円」形式の文字列を数値に変換する", () => {
            const yenStr = "10,000円";
            const expected = 10000;

            const result = CommonUtils.convertYenStrToNum(yenStr);

            expect(result).toEqual(expected);
        });

        it("文字列に「取消」が含まれている場合は負数にする", () => {
            const yenStr = "10,000円　（取消）";
            const expected = -10000;

            const result = CommonUtils.convertYenStrToNum(yenStr);

            expect(result).toEqual(expected);
        });

        it("文字列に「返品」が含まれている場合は負数にする", () => {
            const yenStr = "-10,000円（返品）";
            const expected = -10000;

            const result = CommonUtils.convertYenStrToNum(yenStr);

            expect(result).toEqual(expected);
        });
    });

    describe("formatNumberWithCommas", () => {
        it("数値を「〇〇円」形式の文字列に変換する", () => {
            const number = 10000;
            const expected = "10,000円";

            const result = CommonUtils.formatNumberWithCommas(number);

            expect(result).toEqual(expected);
        });
    });

    describe("createId", () => {
        it("should generate an ID with the specified strength", () => {
            const myStrong = 16;

            const result = CommonUtils.createId(myStrong);

            expect(result).toMatch(/^[0-9a-f]{12}$/);
        });

        it("should generate an ID with default strength if not provided", () => {
            const result = CommonUtils.createId();

            expect(result).toMatch(/^[0-9a-f]{12}$/);
        });
    });

    describe("setProperty", () => {
        beforeEach(() => {
            PropertiesService.getScriptProperties = jest
                .fn()
                .mockImplementation(() => {
                    return PropertiesServiceMock;
                });
        });

        it("スクリプトプロパティにitemをセットする", () => {
            const key = "myKey";
            const value = "myValue";

            CommonUtils.setProperty(key, value);

            const result =
                PropertiesService.getScriptProperties().getProperty(key);

            expect(result).toEqual(value);
        });

        it("valueがnullの場合はkeyを削除し、getしたときnullになるようにする", () => {
            const key = "myKey";
            const value = "myValue";

            CommonUtils.setProperty(key, value);
            CommonUtils.setProperty(key, null);

            const result =
                PropertiesService.getScriptProperties().getProperty(key);

            expect(result).toBeUndefined();
        });
    });

    describe("getProperty", () => {
        beforeEach(() => {
            PropertiesService.getScriptProperties = jest
                .fn()
                .mockImplementation(() => {
                    return PropertiesServiceMock;
                });
        });

        it("スクリプトプロパティからitemをゲットする", () => {
            const key = "myKey";
            const value = "myValue";
            PropertiesService.getScriptProperties().setProperty(key, value);

            const result = CommonUtils.getProperty(key);

            expect(result).toEqual(value);
        });
    });

    describe("formatDate", () => {
        it("dateオブジェクトを指定形式の文字列にフォーマットする", () => {
            const utcDate = new Date("2021-12-31T15:00:00Z");
            const format = "yyyy-MM-dd HH:mm";

            const result = CommonUtils.formatDate(utcDate, format);

            expect(result).toEqual("2022-01-01 00:00");
        });
    });

    describe("parseDate", () => {
        it("指定形式の文字列をdateオブジェクトにパースする", () => {
            const dateString = "2022-01-01";
            const format = "yyyy-MM-dd";

            const result = CommonUtils.parseDate(dateString, format);

            const utcDate = new Date("2021-12-31T15:00:00Z");
            expect(result).toEqual(utcDate);
        });
    });
});

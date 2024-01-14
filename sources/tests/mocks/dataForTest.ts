import { CommonUtils } from "../../src/utils";

export const creditCardPaymentSampleBody = `
▼カード情報
au PAY カード（Mastercard）

---------------------------------------

▼お支払日
2024年1月10日（火）

▼ご請求金額
12,763円

▼お引落金融機関
ａｕじぶん銀行
`;

export const creditCardUsageSampleBody = `
▼カード情報
au PAY カード（Mastercard）

------------------------------
▼ご利用日時
　2023/12/10　15:46

▼ご利用内容
　カードショッピング利用

▼ご利用金額
　5,000円　
`;

export const creditCardDetailSampleBody = `
▼カード情報
au PAY カード（Mastercard）
本会員さま　ご利用分

No.001--------
▼ご利用日
　2023年12月10日
▼ご利用金額
　1,000円
▼ご利用先
　test store1
▼本会員さまお支払月
　2024年1月
▼獲得予定ポイント
　3ポイント
▼獲得予定日
　2024年1月10日

家族会員さま　ご利用分

No.002--------
▼ご利用日
　2023年12月27日
▼ご利用金額
　748円
▼ご利用先
　test store2
▼本会員さまお支払月
　2024年1月
▼獲得予定ポイント
　8ポイント
▼獲得予定日
　2024年1月10日
`;

export const qrPayUsageSampleBody1 = `
■利用店舗
　Test Store
　問合先：03-xxxx-xxxx
■種別
　支払
■利用日時
　2023年9月26日(火) 19:25:37
■支払金額
　1,000円
■決済後残高
　6,000円
■伝票番号
　100000000000000000
`;

export const qrPayUsageSampleBody2 = `
■利用店舗
　Test Store
　問合先：03-xxxx-xxxx
■種別
　支払
■利用日時
　2023年9月26日(火) 19:25:37
■支払金額
　1,000円
■決済後残高
　2,999円
■伝票番号
　100000000000000000
`;

export const qrPayChargeSampleBody = `
au PAY 残高へのチャージ（入金）が完了いたしました。

・チャージ日時：2023/09/26 19:25:37
・チャージ金額：5,000円
・チャージ方法：au PAY 残高(クレジットカードチャージ)
・au PAY 残高：10,000円
・管理番号：************XXXX
`;

export const creditCardReportSampleRows = [
    [
        "X18c560151732",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/9 23:59", "yyyy/M/d HH:mm"),
        "STORE1",
        220,
        "家計",
        "",
    ],
    [
        "A18c52292b186",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/10 14:06", "yyyy/M/d HH:mm"),
        "STORE2",
        1468,
        "貯金",
        "",
    ],
    [
        "A18c532d1c455",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/10 18:46", "yyyy/M/d HH:mm"),
        "STORE3",
        4390,
        "特殊",
        "cat支払い",
    ],
    [
        "A18c58cf24ad2",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/11 21:08", "yyyy/M/d HH:mm"),
        "STORE4",
        630,
        "家計",
        "",
    ],
    [
        "A18c5beb8c699",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/12 11:31", "yyyy/M/d HH:mm"),
        "STORE5",
        1149,
        "家計",
        "",
    ],
    [
        "A18c6147f23f8",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/13 12:30", "yyyy/M/d HH:mm"),
        "STORE6",
        891,
        "特殊",
        "dog支払い",
    ],
    [
        "A18c6fb8d9101",
        CommonUtils.parseDate("2024/1/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/15 22:04", "yyyy/M/d HH:mm"),
        "STORE7",
        2015,
        "家計",
        "",
    ],
    [
        "A18c71c1c6748",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/16 17:21", "yyyy/M/d HH:mm"),
        "STORE8",
        3590,
        "家計",
        "",
    ],
    [
        "A18c75f2c71b7",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/17 12:57", "yyyy/M/d HH:mm"),
        "STORE9",
        1080,
        "家計",
        "",
    ],
    [
        "A18c76e827ab7",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/17 17:21", "yyyy/M/d HH:mm"),
        "STORE10",
        2531,
        "家計",
        "",
    ],
    [
        "A18c7a728cca1",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/18 9:59", "yyyy/M/d HH:mm"),
        "STORE11",
        2700,
        "家計",
        "",
    ],
    [
        "A18c84515e782",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/19 21:56", "yyyy/M/d HH:mm"),
        "STORE12",
        1170,
        "家計",
        "",
    ],
    [
        "A18c855743d00",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/20 12:43", "yyyy/M/d HH:mm"),
        "STORE13",
        841,
        "家計",
        "",
    ],
    [
        "A18c8571c0b95",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/20 13:13", "yyyy/M/d HH:mm"),
        "STORE14",
        2217,
        "家計",
        "",
    ],
    [
        "A18c8a7caf5a5",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/21 12:38", "yyyy/M/d HH:mm"),
        "カードショッピング利用",
        440,
        "家計",
        "",
    ],
    [
        "A18c8a9734b46",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/21 13:03", "yyyy/M/d HH:mm"),
        "STORE16",
        2855,
        "家計",
        "",
    ],
    [
        "A18c8b13b9e12",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/21 15:27", "yyyy/M/d HH:mm"),
        "STORE17",
        10000,
        "家計",
        "",
    ],
    [
        "A18c8bfc4e000",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/21 19:38", "yyyy/M/d HH:mm"),
        "カードショッピング利用",
        748,
        "家計",
        "",
    ],
    [
        "A18c9b37788a5",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/24 18:31", "yyyy/M/d HH:mm"),
        "STORE19",
        2071,
        "家計",
        "",
    ],
    [
        "A18c9b3d09685",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/24 18:43", "yyyy/M/d HH:mm"),
        "STORE20",
        2870,
        "家計",
        "",
    ],
    [
        "A18ca07c1ff15",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/25 19:06", "yyyy/M/d HH:mm"),
        "カードショッピング利用",
        748,
        "家計",
        "",
    ],
    [
        "A18ca0cd960b4",
        CommonUtils.parseDate("2024/2/10", "yyyy/M/d"),
        CommonUtils.parseDate("2023/12/25 20:37", "yyyy/M/d HH:mm"),
        "STORE22",
        492,
        "家計",
        "",
    ],
];

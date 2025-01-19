import {
    creditCardUsageBasicReport,
    creditCardUsageExReport,
    creditCardDetailBasicReport,
    creditCardDetailExReport,
    creditCardPaymentExReport,
    creditCardPaymentBasicReport,
    qrPayChargeReport,
    qrPayUsageReport,
    flexMessageTemplateData,
    paymentHeaderData,
    flexMessageBubble,
    flexMessage,
} from "../interfaces";
import { CommonUtils, FlexMessageUtils } from "../utils";

/**
 * Flex Messageのテンプレートを生成するためのクラス
 * @author catdance124
 */
export class FlexMessageManager {
    constructor() { }

    /**
     * 共通のFlex Messageテンプレートを生成する
     * @param flexMessageTemplateData - Flex Messageテンプレート用データ
     * @returns Flex Messageテンプレート
     */
    private _getCommonFlexMessageTemplate(
        flexMessageTemplateData: flexMessageTemplateData
    ): flexMessageBubble {
        return FlexMessageUtils._getOutline([
            this._getPaymentHeaderInfo(
                flexMessageTemplateData.paymentHeaderData
            ),
            FlexMessageUtils._getSeparator(),
            FlexMessageUtils._getVerticalBox(
                [
                    FlexMessageUtils._getHorizontalBox([
                        FlexMessageUtils._getLeftText(
                            flexMessageTemplateData.amountLabel,
                            "sm"
                        ),
                        FlexMessageUtils._getRightText(
                            flexMessageTemplateData.amount,
                            "sm"
                        ),
                    ]),
                    FlexMessageUtils._getSeparator(),
                    FlexMessageUtils._getHorizontalBox(
                        [
                            FlexMessageUtils._getLeftText(
                                flexMessageTemplateData.amountLabel2,
                                "xxs"
                            ),
                            FlexMessageUtils._getRightText(
                                flexMessageTemplateData.amount2,
                                "xxs"
                            ),
                        ],
                        "lg"
                    ),
                ],
                "lg",
                "sm"
            ),
        ]);
    }

    /**
     * Flex Messageのヘッダー情報を生成する
     * @param  paymentHeaderData - Flex Messageヘッダー用データ
     * @returns Flex Messageヘッダー
     */
    private _getPaymentHeaderInfo(paymentHeaderData: paymentHeaderData) {
        return FlexMessageUtils._getVerticalBox([
            {
                type: "text",
                text: paymentHeaderData.className,
                weight: "bold",
                color: paymentHeaderData.classColor,
                size: "sm",
            },
            {
                type: "text",
                text: paymentHeaderData.content,
                weight: "bold",
                size: "sm",
                margin: "none",
            },
            {
                type: "text",
                text: paymentHeaderData.date,
                size: "xs",
                color: "#aaaaaa",
                wrap: true,
                margin: "xs",
            },
        ]);
    }

    /**
     * クレジットカード詳細利用のFlex Messageを生成する
     * @param creditCardDetailReports - クレジットカード詳細利用レポート
     * @returns Flex Message
     */
    createCreditCardUsageDetailFlexMessage(
        creditCardDetailReports: (creditCardDetailBasicReport &
            creditCardDetailExReport)[]
    ): flexMessage[] {
        let messages: flexMessage[] = [];
        for (let creditCardDetailReport of creditCardDetailReports) {
            // 新規追加レコード以外はskip
            if (!creditCardDetailReport.id.match(/^X/)) {
                continue;
            }
            messages.push(
                this.createCreditCardUsageFlexMessage(creditCardDetailReport)[0]
            );
        }

        return messages;
    }

    /**
     * クレジットカード利用のFlex Messageを生成する
     * @param creditCardUsageReport - クレジットカード利用レポート
     * @param paymentNote - 支払いメモ
     * @returns Flex Message
     */
    createCreditCardUsageFlexMessage(
        creditCardUsageReport: creditCardUsageBasicReport &
            creditCardUsageExReport,
        paymentNote?: string
    ): flexMessage[] {
        let flexMessageContent = this._getCommonFlexMessageTemplate({
            paymentHeaderData: {
                className: "auPayカード",
                classColor: "#1DB446",
                content: creditCardUsageReport.content,
                date: CommonUtils.formatDate(
                    creditCardUsageReport.date,
                    "yyyy/MM/dd HH:mm"
                ),
            },
            amountLabel: "ご利用金額",
            amount: CommonUtils.formatNumberWithCommas(
                creditCardUsageReport.amount
            ),
            amountLabel2: `合計金額(${CommonUtils.formatDate(
                creditCardUsageReport.closingDate,
                "M/d"
            )}〆)`,
            amount2: CommonUtils.formatNumberWithCommas(
                creditCardUsageReport.summedAmount
            ),
        });

        // 支払い元表示を追加
        Array.prototype.push.apply(flexMessageContent.body.contents, [
            FlexMessageUtils._getSeparator(),
            FlexMessageUtils._getHorizontalBox(
                [
                    FlexMessageUtils._getLeftText("支払い元", "sm"),
                    FlexMessageUtils._getRightText(
                        creditCardUsageReport.paymentLabel,
                        "sm"
                    ),
                ],
                "lg"
            ),
        ]);

        // メモがあるときは追加
        if (paymentNote && paymentNote != "") {
            Array.prototype.push.apply(flexMessageContent.body.contents, [
                FlexMessageUtils._getSeparator(),
                FlexMessageUtils._getVerticalBox(
                    [
                        FlexMessageUtils._getNormalText("メモ", "sm"),
                        FlexMessageUtils._getNormalText(paymentNote, "sm"),
                    ],
                    "lg"
                ),
            ]);
        }

        // 支払い元変更ボタンを追加
        Array.prototype.push.apply(flexMessageContent.body.contents, [
            {
                type: "button",
                action: {
                    type: "postback",
                    label: "支払い元を変更",
                    data: `method=quickReplyForUpdatePaymentLabel&id=${creditCardUsageReport.id}`,
                },
                margin: "md",
                height: "sm",
                style: "link",
                color: "#1E90FF",
            },
        ]);

        const messages: flexMessage[] = [
            {
                type: "flex",
                altText: `
                        💳auPayカード利用
                        💴利用金額: ${CommonUtils.formatNumberWithCommas(
                    creditCardUsageReport.amount
                )}
                        📊合計金額: ${CommonUtils.formatNumberWithCommas(
                    creditCardUsageReport.summedAmount
                )}
                        (
                            ${CommonUtils.formatDate(
                    creditCardUsageReport.closingDate,
                    "M/d"
                )}〆
                        )
                    `.replace(/^\s+/gm, ""),
                contents: flexMessageContent,
            },
        ];

        return messages;
    }

    /**
     * 支払い合計のFlex Messageを生成する
     * @param creditCardPaymentReport - クレジットカード請求金額確定レポート
     * @returns Flex Message
     */
    createPaymentSummaryFlexMessage(
        creditCardPaymentReport: creditCardPaymentBasicReport &
            creditCardPaymentExReport
    ): flexMessage[] {
        let flexMessageContent = FlexMessageUtils._getOutline([
            this._getPaymentHeaderInfo({
                className: "auPayカード",
                classColor: "#1DB446",
                content: "利用金額合計出力",
                date: `${CommonUtils.formatDate(
                    creditCardPaymentReport.paymentDate,
                    "yyyy/MM/dd"
                )} 支払い分`,
            }),
            FlexMessageUtils._getSeparator(),
            FlexMessageUtils._getVerticalBox(
                [
                    FlexMessageUtils._getHorizontalBox([
                        FlexMessageUtils._getLeftText("合計金額", "sm"),
                        FlexMessageUtils._getRightText(
                            CommonUtils.formatNumberWithCommas(
                                creditCardPaymentReport.summedAmount.all
                            ),
                            "sm"
                        ),
                    ]),
                ],
                "lg",
                "sm"
            ),
        ]);

        // 種別ごとに合計金額を表示
        for (let label in creditCardPaymentReport.summedAmount.eachLabel) {
            const amount = CommonUtils.formatNumberWithCommas(
                creditCardPaymentReport.summedAmount.eachLabel[label]
            );
            Array.prototype.push.apply(flexMessageContent.body.contents, [
                FlexMessageUtils._getSeparator(),
                FlexMessageUtils._getHorizontalBox(
                    [
                        FlexMessageUtils._getLeftText(label, "xxs"),
                        FlexMessageUtils._getRightText(amount, "xxs"),
                    ],
                    "lg"
                ),
            ]);
        }

        // 特殊ノートを表示
        for (let paymentNote of creditCardPaymentReport.paymentNotes) {
            const date = CommonUtils.formatDate(
                paymentNote.date,
                "yyyy/MM/dd HH:mm"
            );
            const amount = CommonUtils.formatNumberWithCommas(
                paymentNote.amount
            );
            Array.prototype.push.apply(flexMessageContent.body.contents, [
                FlexMessageUtils._getSeparator(),
                FlexMessageUtils._getVerticalBox(
                    [
                        FlexMessageUtils._getNormalText(
                            paymentNote.content,
                            "sm"
                        ),
                        FlexMessageUtils._getNormalText(
                            `${date}  ${amount}`,
                            "xxs"
                        ),
                        FlexMessageUtils._getNormalText(
                            paymentNote.paymentNote,
                            "xxs"
                        ),
                    ],
                    "lg"
                ),
            ]);
        }

        const messages: flexMessage[] = [
            {
                type: "flex",
                altText: `
                        💳auPayカード利用状況
                        💴合計利用金額: ${CommonUtils.formatNumberWithCommas(
                    creditCardPaymentReport.summedAmount.all
                )}
                    `.replace(/^\s+/gm, ""),
                contents: flexMessageContent,
            },
        ];

        return messages;
    }

    /**
     * auPayチャージのFlex Messageを生成する
     * @param qrPayChargeReport - auPayチャージレポート
     * @returns Flex Message
     */
    createQrPayChargeFlexMessage(qrPayChargeReport: qrPayChargeReport): flexMessage[] {
        let flexMessageContent = this._getCommonFlexMessageTemplate({
            paymentHeaderData: {
                className: "auPay",
                classColor: "#d67322",
                content: `${qrPayChargeReport.method}でチャージされました`,
                date: CommonUtils.formatDate(
                    qrPayChargeReport.date,
                    "yyyy/MM/dd HH:mm"
                ),
            },
            amountLabel: "チャージ金額",
            amount: CommonUtils.formatNumberWithCommas(
                qrPayChargeReport.amount
            ),
            amountLabel2: "チャージ後残高",
            amount2: CommonUtils.formatNumberWithCommas(
                qrPayChargeReport.remainingAmount
            ),
        });

        const messages: flexMessage[] = [
            {
                type: "flex",
                altText: `
                        📱auPayチャージ
                        💴チャージ金額: ${CommonUtils.formatNumberWithCommas(
                    qrPayChargeReport.amount
                )}
                        👛チャージ後残高: ${CommonUtils.formatNumberWithCommas(
                    qrPayChargeReport.remainingAmount
                )}
                    `.replace(/^\s+/gm, ""),
                contents: flexMessageContent,
            },
        ];

        return messages;
    }

    /**
     * auPay利用のFlex Messageを生成する
     * @param qrPayUsageReport - auPay利用レポート
     * @returns Flex Message
     */
    createQrPayUsageFlexMessage(qrPayUsageReport: qrPayUsageReport): flexMessage[] {
        let flexMessageContent = this._getCommonFlexMessageTemplate({
            paymentHeaderData: {
                className: "auPay",
                classColor: "#d67322",
                content: qrPayUsageReport.content,
                date: CommonUtils.formatDate(
                    qrPayUsageReport.date,
                    "yyyy/MM/dd HH:mm"
                ),
            },
            amountLabel: "ご利用金額",
            amount: CommonUtils.formatNumberWithCommas(qrPayUsageReport.amount),
            amountLabel2: "決済後残高",
            amount2: CommonUtils.formatNumberWithCommas(
                qrPayUsageReport.remainingAmount
            ),
        });

        // チャージ警告を追加
        if (qrPayUsageReport.chargeAlert) {
            Array.prototype.push.apply(flexMessageContent.body.contents, [
                FlexMessageUtils._getSeparator(),
                FlexMessageUtils._getHorizontalBox(
                    [
                        {
                            type: "text",
                            size: "sm",
                            color: "#FF4500",
                            text: "チャージしてください",
                            decoration: "none",
                            align: "center",
                        },
                    ],
                    "lg"
                ),
            ]);
        }

        const messages: flexMessage[] = [
            {
                type: "flex",
                altText: `
                        📱auPay利用
                        ${qrPayUsageReport.chargeAlert
                        ? "⚠️チャージしてください"
                        : ""
                    }
                        💴利用金額: ${CommonUtils.formatNumberWithCommas(
                        qrPayUsageReport.amount
                    )}
                        👛残高: ${CommonUtils.formatNumberWithCommas(
                        qrPayUsageReport.remainingAmount
                    )}
                    `.replace(/^\s+/gm, ""),
                contents: flexMessageContent,
            },
        ];

        return messages;
    }
}

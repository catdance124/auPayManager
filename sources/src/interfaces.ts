/*
    各種設定のinterface
*/
export interface ConfigInterface {
    readonly creditCardClosingDay: number;
    readonly creditCardPaymentDay: number;
    readonly maxThreadCount: number;
    readonly paymentLabel: {
        default: string;
        notable: string;
        optional: string[];
    };
    readonly paymentLabelList: string[];
    readonly qrPayReminingThreshold: number;
}

/*
    メールレポートのinterface
*/
export interface report {}
export interface creditCardUsageBasicReport extends report {
    date: Date;
    content: string;
    amount: number;
}
export interface creditCardUsageExReport {
    id: string;
    paymentLabel: string;
    summedAmount: number;
    closingDate: Date;
}
export interface creditCardDetailBasicReport extends report {
    date: Date;
    content: string;
    amount: number;
}
export interface creditCardDetailExReport {
    id: string;
    paymentLabel: string;
    summedAmount: number;
    closingDate: Date;
}
export interface creditCardPaymentBasicReport extends report {
    paymentDate: Date;
}
export interface creditCardPaymentExReport {
    summedAmount: summedAmount;
    paymentNotes: paymentNote[];
}
export interface qrPayChargeReport extends report {
    date: Date;
    amount: number;
    method: string;
    remainingAmount: number;
}
export interface qrPayUsageReport extends report {
    date: Date;
    content: string;
    amount: number;
    remainingAmount: number;
    chargeAlert: boolean;
}

/*
    シートカラムのinterface
*/
export interface sheetRecord {
    [key: string]: any;
}
export interface processedMailSheetRecord extends sheetRecord {
    id: string;
    date: Date | GoogleAppsScript.Base.Date;
    subject: string;
}
export interface qrPayReportSheetRecord extends sheetRecord {
    label: string;
    date: Date | GoogleAppsScript.Base.Date;
    amount: number;
    content: string;
    remainingAmount: number;
}
export interface creditCardReportSheetRecord extends sheetRecord {
    id: string;
    paymentDate: Date;
    date: Date;
    content: string;
    amount: number;
    paymentLabel: string;
    paymentNote?: string;
}
export interface logDebugSheetRecord extends sheetRecord {
    date: Date;
    label: string;
    value: string;
}

/*
    FlexMessageなどのinterface
*/
export interface paymentHeaderData {
    className: string;
    classColor: string;
    content: string;
    date: string;
}
export interface flexMessageTemplateData {
    paymentHeaderData: paymentHeaderData;
    amountLabel: string;
    amount: string;
    amountLabel2: string;
    amount2: string;
}

/*
    変数などのinterface
*/
export interface summedAmountEachLabel {
    [key: string]: number;
}
export interface summedAmount {
    all: number;
    eachLabel: summedAmountEachLabel;
}
export interface queryString {
    [key: string]: string;
}
export interface gmailMailMap {
    [key: string]: GoogleAppsScript.Gmail.GmailMessage;
}
export interface paymentNote {
    date: Date;
    content: string;
    amount: number;
    paymentNote: string;
}

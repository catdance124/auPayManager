import { QrPayUsageMail } from "../../src/mailClasses/QrPayUsageMail";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";
import {
    qrPayUsageSampleBody1,
    qrPayUsageSampleBody2,
} from "../mocks/dataForTest";

describe("QrPayUsageMail", () => {
    let qrPayUsageMail: QrPayUsageMail;

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        qrPayUsageMail = new QrPayUsageMail();
    });

    it("plain bodyから利用履歴を抽出する1", () => {
        const qrPayUsageReport = qrPayUsageMail.processMail(
            qrPayUsageSampleBody1
        );

        expect(qrPayUsageReport.date).toEqual(
            CommonUtils.parseDate("2023/9/26 19:25:37", "yyyy/M/d HH:mm:ss")
        );
        expect(qrPayUsageReport.content).toBe("Test Store");
        expect(qrPayUsageReport.amount).toBe(1000);
        expect(qrPayUsageReport.remainingAmount).toBe(6000);
        expect(qrPayUsageReport.chargeAlert).toBe(false);
    });

    it("plain bodyから利用履歴を抽出する（チャージアラート）", () => {
        const qrPayUsageReport = qrPayUsageMail.processMail(
            qrPayUsageSampleBody2
        );

        expect(qrPayUsageReport.date).toEqual(
            CommonUtils.parseDate("2023/9/26 19:25:37", "yyyy/M/d HH:mm:ss")
        );
        expect(qrPayUsageReport.content).toBe("Test Store");
        expect(qrPayUsageReport.amount).toBe(1000);
        expect(qrPayUsageReport.remainingAmount).toBe(2999);
        expect(qrPayUsageReport.chargeAlert).toBe(true);
    });
});

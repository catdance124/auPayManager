import { QrPayChargeMail } from "../../src/mailClasses/QrPayChargeMail";
import { CommonUtils } from "../../src/utils";
import { SheetAccessor } from "../../src/sheetClasses/_SheetAccessor";
jest.mock("../../src/sheetClasses/_SheetAccessor");
import { SheetAccessorMock } from "../mocks/SheetAccessor.mock";
import { qrPayChargeSampleBody } from "../mocks/dataForTest";

describe("QrPayChargeMail", () => {
    let qrPayChargeMail: QrPayChargeMail;

    beforeEach(() => {
        // SheetAccessorのモックを作成する
        const _SheetAccessorMock = SheetAccessor as jest.Mock;
        _SheetAccessorMock.mockImplementation(SheetAccessorMock);
        qrPayChargeMail = new QrPayChargeMail();
    });

    it("plain bodyからチャージレポートを抽出する", () => {
        const qrPayChargeReport = qrPayChargeMail.processMail(
            qrPayChargeSampleBody
        );

        expect(qrPayChargeReport.date).toEqual(
            CommonUtils.parseDate("2023/09/26 19:25:37", "yyyy/MM/dd HH:mm:ss")
        );
        expect(qrPayChargeReport.amount).toBe(5000);
        expect(qrPayChargeReport.method).toBe(
            "au PAY 残高(クレジットカードチャージ)"
        );
        expect(qrPayChargeReport.remainingAmount).toBe(10000);
    });
});

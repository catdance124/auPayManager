[au-pay-manager](../README.md) / [mailClasses/QrPayChargeMail](../modules/mailClasses_QrPayChargeMail.md) / QrPayChargeMail

# Class: QrPayChargeMail

[mailClasses/QrPayChargeMail](../modules/mailClasses_QrPayChargeMail.md).QrPayChargeMail

QRペイチャージメールクラス

**`Author`**

catdance124

## Hierarchy

- [`Mail`](mailClasses__Mail.Mail.md)

  ↳ **`QrPayChargeMail`**

## Table of contents

### Constructors

- [constructor](mailClasses_QrPayChargeMail.QrPayChargeMail.md#constructor)

### Properties

- [\_qrPayReportSheet](mailClasses_QrPayChargeMail.QrPayChargeMail.md#_qrpayreportsheet)
- [subject](mailClasses_QrPayChargeMail.QrPayChargeMail.md#subject)

### Methods

- [\_extract](mailClasses_QrPayChargeMail.QrPayChargeMail.md#_extract)
- [\_register](mailClasses_QrPayChargeMail.QrPayChargeMail.md#_register)
- [processMail](mailClasses_QrPayChargeMail.QrPayChargeMail.md#processmail)

## Constructors

### constructor

• **new QrPayChargeMail**(): [`QrPayChargeMail`](mailClasses_QrPayChargeMail.QrPayChargeMail.md)

コンストラクタ

#### Returns

[`QrPayChargeMail`](mailClasses_QrPayChargeMail.QrPayChargeMail.md)

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[constructor](mailClasses__Mail.Mail.md#constructor)

## Properties

### \_qrPayReportSheet

• `Private` **\_qrPayReportSheet**: [`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

QR Pay 利用・チャージレポートシート

___

### subject

• **subject**: `string`

メールの件名

#### Inherited from

[Mail](mailClasses__Mail.Mail.md).[subject](mailClasses__Mail.Mail.md#subject)

## Methods

### \_extract

▸ **_extract**(`plainBody`): [`qrPayChargeReport`](../interfaces/interfaces.qrPayChargeReport.md)

メールから情報を抽出するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`qrPayChargeReport`](../interfaces/interfaces.qrPayChargeReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[_extract](mailClasses__Mail.Mail.md#_extract)

___

### \_register

▸ **_register**(`qrPayChargeReport`): `void`

QRペイチャージレポートを登録する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qrPayChargeReport` | [`qrPayChargeReport`](../interfaces/interfaces.qrPayChargeReport.md) | QRペイチャージレポート |

#### Returns

`void`

___

### processMail

▸ **processMail**(`plainBody`): [`qrPayChargeReport`](../interfaces/interfaces.qrPayChargeReport.md)

メールを処理するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`qrPayChargeReport`](../interfaces/interfaces.qrPayChargeReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[processMail](mailClasses__Mail.Mail.md#processmail)

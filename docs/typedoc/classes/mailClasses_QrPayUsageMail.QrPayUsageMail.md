[au-pay-manager](../README.md) / [mailClasses/QrPayUsageMail](../modules/mailClasses_QrPayUsageMail.md) / QrPayUsageMail

# Class: QrPayUsageMail

[mailClasses/QrPayUsageMail](../modules/mailClasses_QrPayUsageMail.md).QrPayUsageMail

QRペイ利用メールクラス

**`Author`**

catdance124

## Hierarchy

- [`Mail`](mailClasses__Mail.Mail.md)

  ↳ **`QrPayUsageMail`**

## Table of contents

### Constructors

- [constructor](mailClasses_QrPayUsageMail.QrPayUsageMail.md#constructor)

### Properties

- [\_config](mailClasses_QrPayUsageMail.QrPayUsageMail.md#_config)
- [\_qrPayReportSheet](mailClasses_QrPayUsageMail.QrPayUsageMail.md#_qrpayreportsheet)
- [subject](mailClasses_QrPayUsageMail.QrPayUsageMail.md#subject)

### Methods

- [\_extract](mailClasses_QrPayUsageMail.QrPayUsageMail.md#_extract)
- [\_register](mailClasses_QrPayUsageMail.QrPayUsageMail.md#_register)
- [processMail](mailClasses_QrPayUsageMail.QrPayUsageMail.md#processmail)

## Constructors

### constructor

• **new QrPayUsageMail**(): [`QrPayUsageMail`](mailClasses_QrPayUsageMail.QrPayUsageMail.md)

コンストラクタ

#### Returns

[`QrPayUsageMail`](mailClasses_QrPayUsageMail.QrPayUsageMail.md)

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[constructor](mailClasses__Mail.Mail.md#constructor)

## Properties

### \_config

• `Private` **\_config**: [`Config`](config.Config.md)

Config オブジェクト

___

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

▸ **_extract**(`plainBody`): [`qrPayUsageReport`](../interfaces/interfaces.qrPayUsageReport.md)

メールから情報を抽出するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`qrPayUsageReport`](../interfaces/interfaces.qrPayUsageReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[_extract](mailClasses__Mail.Mail.md#_extract)

___

### \_register

▸ **_register**(`qrPayUsageReport`): `void`

QRペイ利用レポートを登録する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qrPayUsageReport` | [`qrPayUsageReport`](../interfaces/interfaces.qrPayUsageReport.md) | QRペイ利用レポート |

#### Returns

`void`

___

### processMail

▸ **processMail**(`plainBody`): [`qrPayUsageReport`](../interfaces/interfaces.qrPayUsageReport.md)

メールを処理するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`qrPayUsageReport`](../interfaces/interfaces.qrPayUsageReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[processMail](mailClasses__Mail.Mail.md#processmail)

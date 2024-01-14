[au-pay-manager](../README.md) / [mailClasses/CreditCardUsageMail](../modules/mailClasses_CreditCardUsageMail.md) / CreditCardUsageMail

# Class: CreditCardUsageMail

[mailClasses/CreditCardUsageMail](../modules/mailClasses_CreditCardUsageMail.md).CreditCardUsageMail

クレジットカード利用メールクラス

**`Author`**

catdance124

## Hierarchy

- [`Mail`](mailClasses__Mail.Mail.md)

  ↳ **`CreditCardUsageMail`**

## Table of contents

### Constructors

- [constructor](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#constructor)

### Properties

- [\_config](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#_config)
- [\_creditCardReportSheet](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#_creditcardreportsheet)
- [subject](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#subject)

### Methods

- [\_extract](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#_extract)
- [\_register](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#_register)
- [processMail](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md#processmail)

## Constructors

### constructor

• **new CreditCardUsageMail**(): [`CreditCardUsageMail`](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md)

コンストラクタ

#### Returns

[`CreditCardUsageMail`](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md)

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[constructor](mailClasses__Mail.Mail.md#constructor)

## Properties

### \_config

• `Private` **\_config**: [`Config`](config.Config.md)

Config オブジェクト

___

### \_creditCardReportSheet

• `Private` **\_creditCardReportSheet**: [`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

クレジットカード利用レポートシート

___

### subject

• **subject**: `string`

メールの件名

#### Inherited from

[Mail](mailClasses__Mail.Mail.md).[subject](mailClasses__Mail.Mail.md#subject)

## Methods

### \_extract

▸ **_extract**(`plainBody`): [`creditCardUsageBasicReport`](../interfaces/interfaces.creditCardUsageBasicReport.md)

メールから情報を抽出するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`creditCardUsageBasicReport`](../interfaces/interfaces.creditCardUsageBasicReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[_extract](mailClasses__Mail.Mail.md#_extract)

___

### \_register

▸ **_register**(`creditCardUsageBasicReport`): [`creditCardUsageExReport`](../interfaces/interfaces.creditCardUsageExReport.md)

クレジットカード利用レポートをシートに登録する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditCardUsageBasicReport` | [`creditCardUsageBasicReport`](../interfaces/interfaces.creditCardUsageBasicReport.md) | クレジットカード利用レポート |

#### Returns

[`creditCardUsageExReport`](../interfaces/interfaces.creditCardUsageExReport.md)

登録されたクレジットカード利用レポート

___

### processMail

▸ **processMail**(`plainBody`): [`creditCardUsageBasicReport`](../interfaces/interfaces.creditCardUsageBasicReport.md) & [`creditCardUsageExReport`](../interfaces/interfaces.creditCardUsageExReport.md)

メールを処理するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`creditCardUsageBasicReport`](../interfaces/interfaces.creditCardUsageBasicReport.md) & [`creditCardUsageExReport`](../interfaces/interfaces.creditCardUsageExReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[processMail](mailClasses__Mail.Mail.md#processmail)

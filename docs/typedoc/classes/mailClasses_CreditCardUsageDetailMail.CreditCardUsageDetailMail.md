[au-pay-manager](../README.md) / [mailClasses/CreditCardUsageDetailMail](../modules/mailClasses_CreditCardUsageDetailMail.md) / CreditCardUsageDetailMail

# Class: CreditCardUsageDetailMail

[mailClasses/CreditCardUsageDetailMail](../modules/mailClasses_CreditCardUsageDetailMail.md).CreditCardUsageDetailMail

クレジットカード利用詳細メールクラス

**`Author`**

catdance124

## Hierarchy

- [`Mail`](mailClasses__Mail.Mail.md)

  ↳ **`CreditCardUsageDetailMail`**

## Table of contents

### Constructors

- [constructor](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#constructor)

### Properties

- [\_config](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#_config)
- [\_creditCardReportSheet](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#_creditcardreportsheet)
- [subject](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#subject)

### Methods

- [\_extract](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#_extract)
- [\_register](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#_register)
- [processMail](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md#processmail)

## Constructors

### constructor

• **new CreditCardUsageDetailMail**(): [`CreditCardUsageDetailMail`](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md)

コンストラクタ

#### Returns

[`CreditCardUsageDetailMail`](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md)

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

▸ **_extract**(`plainBody`): [`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md)[]

メールから情報を抽出するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md)[]

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[_extract](mailClasses__Mail.Mail.md#_extract)

___

### \_register

▸ **_register**(`creditCardDetailBasicReport`): [`creditCardDetailExReport`](../interfaces/interfaces.creditCardDetailExReport.md)

クレジットカード詳細利用レポートをシートに登録する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditCardDetailBasicReport` | [`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md) | クレジットカード詳細利用レポート |

#### Returns

[`creditCardDetailExReport`](../interfaces/interfaces.creditCardDetailExReport.md)

登録されたクレジットカード利用レポート

___

### processMail

▸ **processMail**(`plainBody`): [`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md) & [`creditCardDetailExReport`](../interfaces/interfaces.creditCardDetailExReport.md)[]

メールを処理するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md) & [`creditCardDetailExReport`](../interfaces/interfaces.creditCardDetailExReport.md)[]

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[processMail](mailClasses__Mail.Mail.md#processmail)

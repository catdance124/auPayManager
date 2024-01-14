[au-pay-manager](../README.md) / [mailClasses/CreditCardPaymentMail](../modules/mailClasses_CreditCardPaymentMail.md) / CreditCardPaymentMail

# Class: CreditCardPaymentMail

[mailClasses/CreditCardPaymentMail](../modules/mailClasses_CreditCardPaymentMail.md).CreditCardPaymentMail

クレジットカード請求金額確定メールクラス

**`Author`**

catdance124

## Hierarchy

- [`Mail`](mailClasses__Mail.Mail.md)

  ↳ **`CreditCardPaymentMail`**

## Table of contents

### Constructors

- [constructor](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md#constructor)

### Properties

- [\_config](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md#_config)
- [\_creditCardReportSheet](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md#_creditcardreportsheet)
- [subject](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md#subject)

### Methods

- [\_extract](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md#_extract)
- [processMail](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md#processmail)

## Constructors

### constructor

• **new CreditCardPaymentMail**(): [`CreditCardPaymentMail`](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md)

コンストラクタ

#### Returns

[`CreditCardPaymentMail`](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md)

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

▸ **_extract**(`plainBody`): [`creditCardPaymentBasicReport`](../interfaces/interfaces.creditCardPaymentBasicReport.md)

メールから情報を抽出するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`creditCardPaymentBasicReport`](../interfaces/interfaces.creditCardPaymentBasicReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[_extract](mailClasses__Mail.Mail.md#_extract)

___

### processMail

▸ **processMail**(`plainBody`): [`creditCardPaymentBasicReport`](../interfaces/interfaces.creditCardPaymentBasicReport.md) & [`creditCardPaymentExReport`](../interfaces/interfaces.creditCardPaymentExReport.md)

メールを処理するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`creditCardPaymentBasicReport`](../interfaces/interfaces.creditCardPaymentBasicReport.md) & [`creditCardPaymentExReport`](../interfaces/interfaces.creditCardPaymentExReport.md)

抽出された情報

#### Overrides

[Mail](mailClasses__Mail.Mail.md).[processMail](mailClasses__Mail.Mail.md#processmail)

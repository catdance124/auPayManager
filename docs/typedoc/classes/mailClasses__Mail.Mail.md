[au-pay-manager](../README.md) / [mailClasses/\_Mail](../modules/mailClasses__Mail.md) / Mail

# Class: Mail

[mailClasses/\_Mail](../modules/mailClasses__Mail.md).Mail

メール抽象クラス

**`Author`**

catdance124

## Hierarchy

- **`Mail`**

  ↳ [`CreditCardPaymentMail`](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md)

  ↳ [`CreditCardUsageDetailMail`](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md)

  ↳ [`CreditCardUsageMail`](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md)

  ↳ [`QrPayChargeMail`](mailClasses_QrPayChargeMail.QrPayChargeMail.md)

  ↳ [`QrPayUsageMail`](mailClasses_QrPayUsageMail.QrPayUsageMail.md)

## Table of contents

### Constructors

- [constructor](mailClasses__Mail.Mail.md#constructor)

### Properties

- [subject](mailClasses__Mail.Mail.md#subject)

### Methods

- [\_extract](mailClasses__Mail.Mail.md#_extract)
- [processMail](mailClasses__Mail.Mail.md#processmail)

## Constructors

### constructor

• **new Mail**(`mailSubject`): [`Mail`](mailClasses__Mail.Mail.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mailSubject` | `string` | メールの件名 |

#### Returns

[`Mail`](mailClasses__Mail.Mail.md)

## Properties

### subject

• **subject**: `string`

メールの件名

## Methods

### \_extract

▸ **_extract**(`plainBody`): [`report`](../interfaces/interfaces.report.md)

メールから情報を抽出するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`report`](../interfaces/interfaces.report.md)

抽出された情報

___

### processMail

▸ **processMail**(`plainBody`): [`report`](../interfaces/interfaces.report.md)

メールを処理するメソッド

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plainBody` | `string` | メールの本文 |

#### Returns

[`report`](../interfaces/interfaces.report.md)

抽出された情報

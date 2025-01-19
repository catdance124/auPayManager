[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [mailClasses/\_Mail](../README.md) / Mail

# Class: `abstract` Mail

メール抽象クラス

## Author

catdance124

## Extended by

- [`CreditCardPaymentMail`](../../CreditCardPaymentMail/classes/CreditCardPaymentMail.md)
- [`CreditCardUsageDetailMail`](../../CreditCardUsageDetailMail/classes/CreditCardUsageDetailMail.md)
- [`CreditCardUsageMail`](../../CreditCardUsageMail/classes/CreditCardUsageMail.md)
- [`QrPayChargeMail`](../../QrPayChargeMail/classes/QrPayChargeMail.md)
- [`QrPayUsageMail`](../../QrPayUsageMail/classes/QrPayUsageMail.md)

## Constructors

### new Mail()

> `protected` **new Mail**(`mailSubject`): [`Mail`](Mail.md)

コンストラクタ

#### Parameters

##### mailSubject

`string`

メールの件名

#### Returns

[`Mail`](Mail.md)

## Properties

### subject

> **subject**: `string`

メールの件名

## Methods

### \_extract()

> `abstract` `protected` **\_extract**(`plainBody`): [`report`](../../../interfaces/interfaces/report.md)

メールから情報を抽出するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`report`](../../../interfaces/interfaces/report.md)

抽出された情報

***

### processMail()

> `abstract` **processMail**(`plainBody`): [`report`](../../../interfaces/interfaces/report.md)

メールを処理するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`report`](../../../interfaces/interfaces/report.md)

抽出された情報

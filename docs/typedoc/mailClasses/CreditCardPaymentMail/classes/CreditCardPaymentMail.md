[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [mailClasses/CreditCardPaymentMail](../README.md) / CreditCardPaymentMail

# Class: CreditCardPaymentMail

クレジットカード請求金額確定メールクラス

## Author

catdance124

## Extends

- [`Mail`](../../_Mail/classes/Mail.md)

## Constructors

### new CreditCardPaymentMail()

> **new CreditCardPaymentMail**(): [`CreditCardPaymentMail`](CreditCardPaymentMail.md)

コンストラクタ

#### Returns

[`CreditCardPaymentMail`](CreditCardPaymentMail.md)

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`constructor`](../../_Mail/classes/Mail.md#constructors)

## Properties

### subject

> **subject**: `string`

メールの件名

#### Inherited from

[`Mail`](../../_Mail/classes/Mail.md).[`subject`](../../_Mail/classes/Mail.md#subject)

## Methods

### \_extract()

> `protected` **\_extract**(`plainBody`): [`creditCardPaymentBasicReport`](../../../interfaces/interfaces/creditCardPaymentBasicReport.md)

メールから情報を抽出するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`creditCardPaymentBasicReport`](../../../interfaces/interfaces/creditCardPaymentBasicReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`_extract`](../../_Mail/classes/Mail.md#_extract)

***

### processMail()

> **processMail**(`plainBody`): [`creditCardPaymentBasicReport`](../../../interfaces/interfaces/creditCardPaymentBasicReport.md) & [`creditCardPaymentExReport`](../../../interfaces/interfaces/creditCardPaymentExReport.md)

メールを処理するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`creditCardPaymentBasicReport`](../../../interfaces/interfaces/creditCardPaymentBasicReport.md) & [`creditCardPaymentExReport`](../../../interfaces/interfaces/creditCardPaymentExReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`processMail`](../../_Mail/classes/Mail.md#processmail)

[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [mailClasses/CreditCardUsageDetailMail](../README.md) / CreditCardUsageDetailMail

# Class: CreditCardUsageDetailMail

クレジットカード利用詳細メールクラス

## Author

catdance124

## Extends

- [`Mail`](../../_Mail/classes/Mail.md)

## Constructors

### Constructor

> **new CreditCardUsageDetailMail**(): `CreditCardUsageDetailMail`

コンストラクタ

#### Returns

`CreditCardUsageDetailMail`

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`constructor`](../../_Mail/classes/Mail.md#constructor)

## Properties

### subject

> **subject**: `string`

メールの件名

#### Inherited from

[`Mail`](../../_Mail/classes/Mail.md).[`subject`](../../_Mail/classes/Mail.md#subject)

## Methods

### \_extract()

> `protected` **\_extract**(`plainBody`): [`creditCardDetailBasicReport`](../../../interfaces/interfaces/creditCardDetailBasicReport.md)[]

メールから情報を抽出するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`creditCardDetailBasicReport`](../../../interfaces/interfaces/creditCardDetailBasicReport.md)[]

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`_extract`](../../_Mail/classes/Mail.md#_extract)

***

### processMail()

> **processMail**(`plainBody`): [`creditCardDetailBasicReport`](../../../interfaces/interfaces/creditCardDetailBasicReport.md) & [`creditCardDetailExReport`](../../../interfaces/interfaces/creditCardDetailExReport.md)[]

メールを処理するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`creditCardDetailBasicReport`](../../../interfaces/interfaces/creditCardDetailBasicReport.md) & [`creditCardDetailExReport`](../../../interfaces/interfaces/creditCardDetailExReport.md)[]

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`processMail`](../../_Mail/classes/Mail.md#processmail)

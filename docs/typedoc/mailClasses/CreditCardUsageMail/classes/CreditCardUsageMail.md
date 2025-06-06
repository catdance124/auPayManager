[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [mailClasses/CreditCardUsageMail](../README.md) / CreditCardUsageMail

# Class: CreditCardUsageMail

クレジットカード利用メールクラス

## Author

catdance124

## Extends

- [`Mail`](../../_Mail/classes/Mail.md)

## Constructors

### Constructor

> **new CreditCardUsageMail**(): `CreditCardUsageMail`

コンストラクタ

#### Returns

`CreditCardUsageMail`

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

> `protected` **\_extract**(`plainBody`): [`creditCardUsageBasicReport`](../../../interfaces/interfaces/creditCardUsageBasicReport.md)

メールから情報を抽出するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`creditCardUsageBasicReport`](../../../interfaces/interfaces/creditCardUsageBasicReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`_extract`](../../_Mail/classes/Mail.md#_extract)

***

### processMail()

> **processMail**(`plainBody`): [`creditCardUsageBasicReport`](../../../interfaces/interfaces/creditCardUsageBasicReport.md) & [`creditCardUsageExReport`](../../../interfaces/interfaces/creditCardUsageExReport.md)

メールを処理するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`creditCardUsageBasicReport`](../../../interfaces/interfaces/creditCardUsageBasicReport.md) & [`creditCardUsageExReport`](../../../interfaces/interfaces/creditCardUsageExReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`processMail`](../../_Mail/classes/Mail.md#processmail)

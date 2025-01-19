[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [mailClasses/QrPayChargeMail](../README.md) / QrPayChargeMail

# Class: QrPayChargeMail

QRペイチャージメールクラス

## Author

catdance124

## Extends

- [`Mail`](../../_Mail/classes/Mail.md)

## Constructors

### new QrPayChargeMail()

> **new QrPayChargeMail**(): [`QrPayChargeMail`](QrPayChargeMail.md)

コンストラクタ

#### Returns

[`QrPayChargeMail`](QrPayChargeMail.md)

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

> `protected` **\_extract**(`plainBody`): [`qrPayChargeReport`](../../../interfaces/interfaces/qrPayChargeReport.md)

メールから情報を抽出するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`qrPayChargeReport`](../../../interfaces/interfaces/qrPayChargeReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`_extract`](../../_Mail/classes/Mail.md#_extract)

***

### processMail()

> **processMail**(`plainBody`): [`qrPayChargeReport`](../../../interfaces/interfaces/qrPayChargeReport.md)

メールを処理するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`qrPayChargeReport`](../../../interfaces/interfaces/qrPayChargeReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`processMail`](../../_Mail/classes/Mail.md#processmail)

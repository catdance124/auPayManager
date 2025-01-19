[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [mailClasses/QrPayUsageMail](../README.md) / QrPayUsageMail

# Class: QrPayUsageMail

QRペイ利用メールクラス

## Author

catdance124

## Extends

- [`Mail`](../../_Mail/classes/Mail.md)

## Constructors

### new QrPayUsageMail()

> **new QrPayUsageMail**(): [`QrPayUsageMail`](QrPayUsageMail.md)

コンストラクタ

#### Returns

[`QrPayUsageMail`](QrPayUsageMail.md)

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

> `protected` **\_extract**(`plainBody`): [`qrPayUsageReport`](../../../interfaces/interfaces/qrPayUsageReport.md)

メールから情報を抽出するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`qrPayUsageReport`](../../../interfaces/interfaces/qrPayUsageReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`_extract`](../../_Mail/classes/Mail.md#_extract)

***

### processMail()

> **processMail**(`plainBody`): [`qrPayUsageReport`](../../../interfaces/interfaces/qrPayUsageReport.md)

メールを処理するメソッド

#### Parameters

##### plainBody

`string`

メールの本文

#### Returns

[`qrPayUsageReport`](../../../interfaces/interfaces/qrPayUsageReport.md)

抽出された情報

#### Overrides

[`Mail`](../../_Mail/classes/Mail.md).[`processMail`](../../_Mail/classes/Mail.md#processmail)

[**au-pay-manager**](../../README.md)

***

[au-pay-manager](../../README.md) / [config](../README.md) / Config

# Class: Config

設定情報を管理するクラス

## Author

catdance124

## Implements

- [`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md)

## Constructors

### Constructor

> **new Config**(): `Config`

#### Returns

`Config`

## Properties

### creditCardClosingDay

> `readonly` **creditCardClosingDay**: `15` = `15`

クレジットカードの締め日

#### Implementation of

[`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md).[`creditCardClosingDay`](../../interfaces/interfaces/ConfigInterface.md#creditcardclosingday)

***

### creditCardPaymentDay

> `readonly` **creditCardPaymentDay**: `10` = `10`

クレジットカードの支払日

#### Implementation of

[`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md).[`creditCardPaymentDay`](../../interfaces/interfaces/ConfigInterface.md#creditcardpaymentday)

***

### maxThreadCount

> `readonly` **maxThreadCount**: `10` = `10`

検索メールの件数上限

#### Implementation of

[`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md).[`maxThreadCount`](../../interfaces/interfaces/ConfigInterface.md#maxthreadcount)

***

### paymentLabel

> `readonly` **paymentLabel**: `object`

支払い元のラベル

#### default

> **default**: `string` = `"家計"`

デフォルトで使用されるラベル

#### notable

> **notable**: `string` = `"特殊"`

メモ記述が可能なラベル

#### optional

> **optional**: `string`[]

その他のラベルリスト

#### Implementation of

[`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md).[`paymentLabel`](../../interfaces/interfaces/ConfigInterface.md#paymentlabel)

***

### paymentLabelList

> `readonly` **paymentLabelList**: `string`[]

支払い元のラベルのリスト

#### Implementation of

[`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md).[`paymentLabelList`](../../interfaces/interfaces/ConfigInterface.md#paymentlabellist)

***

### qrPayReminingThreshold

> `readonly` **qrPayReminingThreshold**: `3000` = `3000`

QR Payのチャージ推奨閾値

#### Implementation of

[`ConfigInterface`](../../interfaces/interfaces/ConfigInterface.md).[`qrPayReminingThreshold`](../../interfaces/interfaces/ConfigInterface.md#qrpayreminingthreshold)

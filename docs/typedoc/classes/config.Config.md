[au-pay-manager](../README.md) / [config](../modules/config.md) / Config

# Class: Config

[config](../modules/config.md).Config

設定情報を管理するクラス

**`Author`**

catdance124

## Implements

- [`ConfigInterface`](../interfaces/interfaces.ConfigInterface.md)

## Table of contents

### Constructors

- [constructor](config.Config.md#constructor)

### Properties

- [creditCardClosingDay](config.Config.md#creditcardclosingday)
- [creditCardPaymentDay](config.Config.md#creditcardpaymentday)
- [maxThreadCount](config.Config.md#maxthreadcount)
- [paymentLabel](config.Config.md#paymentlabel)
- [paymentLabelList](config.Config.md#paymentlabellist)
- [qrPayReminingThreshold](config.Config.md#qrpayreminingthreshold)

## Constructors

### constructor

• **new Config**(): [`Config`](config.Config.md)

#### Returns

[`Config`](config.Config.md)

## Properties

### creditCardClosingDay

• `Readonly` **creditCardClosingDay**: ``15``

クレジットカードの締め日

#### Implementation of

[ConfigInterface](../interfaces/interfaces.ConfigInterface.md).[creditCardClosingDay](../interfaces/interfaces.ConfigInterface.md#creditcardclosingday)

___

### creditCardPaymentDay

• `Readonly` **creditCardPaymentDay**: ``10``

クレジットカードの支払日

#### Implementation of

[ConfigInterface](../interfaces/interfaces.ConfigInterface.md).[creditCardPaymentDay](../interfaces/interfaces.ConfigInterface.md#creditcardpaymentday)

___

### maxThreadCount

• `Readonly` **maxThreadCount**: ``10``

検索メールの件数上限

#### Implementation of

[ConfigInterface](../interfaces/interfaces.ConfigInterface.md).[maxThreadCount](../interfaces/interfaces.ConfigInterface.md#maxthreadcount)

___

### paymentLabel

• `Readonly` **paymentLabel**: `Object`

支払い元のラベル

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `default` | `string` | デフォルトで使用されるラベル |
| `notable` | `string` | メモ記述が可能なラベル |
| `optional` | `string`[] | その他のラベルリスト |

#### Implementation of

[ConfigInterface](../interfaces/interfaces.ConfigInterface.md).[paymentLabel](../interfaces/interfaces.ConfigInterface.md#paymentlabel)

___

### paymentLabelList

• `Readonly` **paymentLabelList**: `string`[]

支払い元のラベルのリスト

#### Implementation of

[ConfigInterface](../interfaces/interfaces.ConfigInterface.md).[paymentLabelList](../interfaces/interfaces.ConfigInterface.md#paymentlabellist)

___

### qrPayReminingThreshold

• `Readonly` **qrPayReminingThreshold**: ``3000``

QR Payのチャージ推奨閾値

#### Implementation of

[ConfigInterface](../interfaces/interfaces.ConfigInterface.md).[qrPayReminingThreshold](../interfaces/interfaces.ConfigInterface.md#qrpayreminingthreshold)

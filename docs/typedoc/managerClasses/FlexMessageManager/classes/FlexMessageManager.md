[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [managerClasses/FlexMessageManager](../README.md) / FlexMessageManager

# Class: FlexMessageManager

Flex Messageのテンプレートを生成するためのクラス

## Author

catdance124

## Constructors

### new FlexMessageManager()

> **new FlexMessageManager**(): [`FlexMessageManager`](FlexMessageManager.md)

#### Returns

[`FlexMessageManager`](FlexMessageManager.md)

## Methods

### createCreditCardUsageDetailFlexMessage()

> **createCreditCardUsageDetailFlexMessage**(`creditCardDetailReports`): `object`[]

クレジットカード詳細利用のFlex Messageを生成する

#### Parameters

##### creditCardDetailReports

[`creditCardDetailBasicReport`](../../../interfaces/interfaces/creditCardDetailBasicReport.md) & [`creditCardDetailExReport`](../../../interfaces/interfaces/creditCardDetailExReport.md)[]

クレジットカード詳細利用レポート

#### Returns

`object`[]

Flex Message

***

### createCreditCardUsageFlexMessage()

> **createCreditCardUsageFlexMessage**(`creditCardUsageReport`, `paymentNote`?): `object`[]

クレジットカード利用のFlex Messageを生成する

#### Parameters

##### creditCardUsageReport

[`creditCardUsageBasicReport`](../../../interfaces/interfaces/creditCardUsageBasicReport.md) & [`creditCardUsageExReport`](../../../interfaces/interfaces/creditCardUsageExReport.md)

クレジットカード利用レポート

##### paymentNote?

`string`

支払いメモ

#### Returns

`object`[]

Flex Message

***

### createPaymentSummaryFlexMessage()

> **createPaymentSummaryFlexMessage**(`creditCardPaymentReport`): `object`[]

支払い合計のFlex Messageを生成する

#### Parameters

##### creditCardPaymentReport

[`creditCardPaymentBasicReport`](../../../interfaces/interfaces/creditCardPaymentBasicReport.md) & [`creditCardPaymentExReport`](../../../interfaces/interfaces/creditCardPaymentExReport.md)

クレジットカード請求金額確定レポート

#### Returns

`object`[]

Flex Message

***

### createQrPayChargeFlexMessage()

> **createQrPayChargeFlexMessage**(`qrPayChargeReport`): `object`[]

auPayチャージのFlex Messageを生成する

#### Parameters

##### qrPayChargeReport

[`qrPayChargeReport`](../../../interfaces/interfaces/qrPayChargeReport.md)

auPayチャージレポート

#### Returns

`object`[]

Flex Message

***

### createQrPayUsageFlexMessage()

> **createQrPayUsageFlexMessage**(`qrPayUsageReport`): `object`[]

auPay利用のFlex Messageを生成する

#### Parameters

##### qrPayUsageReport

[`qrPayUsageReport`](../../../interfaces/interfaces/qrPayUsageReport.md)

auPay利用レポート

#### Returns

`object`[]

Flex Message

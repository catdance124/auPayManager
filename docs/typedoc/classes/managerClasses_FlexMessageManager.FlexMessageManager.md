[au-pay-manager](../README.md) / [managerClasses/FlexMessageManager](../modules/managerClasses_FlexMessageManager.md) / FlexMessageManager

# Class: FlexMessageManager

[managerClasses/FlexMessageManager](../modules/managerClasses_FlexMessageManager.md).FlexMessageManager

Flex Messageのテンプレートを生成するためのクラス

**`Author`**

catdance124

## Table of contents

### Constructors

- [constructor](managerClasses_FlexMessageManager.FlexMessageManager.md#constructor)

### Methods

- [\_getCommonFlexMessageTemplate](managerClasses_FlexMessageManager.FlexMessageManager.md#_getcommonflexmessagetemplate)
- [\_getPaymentHeaderInfo](managerClasses_FlexMessageManager.FlexMessageManager.md#_getpaymentheaderinfo)
- [createCreditCardUsageDetailFlexMessage](managerClasses_FlexMessageManager.FlexMessageManager.md#createcreditcardusagedetailflexmessage)
- [createCreditCardUsageFlexMessage](managerClasses_FlexMessageManager.FlexMessageManager.md#createcreditcardusageflexmessage)
- [createPaymentSummaryFlexMessage](managerClasses_FlexMessageManager.FlexMessageManager.md#createpaymentsummaryflexmessage)
- [createQrPayChargeFlexMessage](managerClasses_FlexMessageManager.FlexMessageManager.md#createqrpaychargeflexmessage)
- [createQrPayUsageFlexMessage](managerClasses_FlexMessageManager.FlexMessageManager.md#createqrpayusageflexmessage)

## Constructors

### constructor

• **new FlexMessageManager**(): [`FlexMessageManager`](managerClasses_FlexMessageManager.FlexMessageManager.md)

#### Returns

[`FlexMessageManager`](managerClasses_FlexMessageManager.FlexMessageManager.md)

## Methods

### \_getCommonFlexMessageTemplate

▸ **_getCommonFlexMessageTemplate**(`flexMessageTemplateData`): `any`

共通のFlex Messageテンプレートを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flexMessageTemplateData` | [`flexMessageTemplateData`](../interfaces/interfaces.flexMessageTemplateData.md) | Flex Messageテンプレート用データ |

#### Returns

`any`

Flex Messageテンプレート

___

### \_getPaymentHeaderInfo

▸ **_getPaymentHeaderInfo**(`paymentHeaderData`): `any`

Flex Messageのヘッダー情報を生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paymentHeaderData` | [`paymentHeaderData`](../interfaces/interfaces.paymentHeaderData.md) | Flex Messageヘッダー用データ |

#### Returns

`any`

Flex Messageヘッダー

___

### createCreditCardUsageDetailFlexMessage

▸ **createCreditCardUsageDetailFlexMessage**(`creditCardDetailReports`): \{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

クレジットカード詳細利用のFlex Messageを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditCardDetailReports` | [`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md) & [`creditCardDetailExReport`](../interfaces/interfaces.creditCardDetailExReport.md)[] | クレジットカード詳細利用レポート |

#### Returns

\{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

Flex Message

___

### createCreditCardUsageFlexMessage

▸ **createCreditCardUsageFlexMessage**(`creditCardUsageReport`, `paymentNote?`): \{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

クレジットカード利用のFlex Messageを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditCardUsageReport` | [`creditCardUsageBasicReport`](../interfaces/interfaces.creditCardUsageBasicReport.md) & [`creditCardUsageExReport`](../interfaces/interfaces.creditCardUsageExReport.md) | クレジットカード利用レポート |
| `paymentNote?` | `string` | 支払いメモ |

#### Returns

\{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

Flex Message

___

### createPaymentSummaryFlexMessage

▸ **createPaymentSummaryFlexMessage**(`creditCardPaymentReport`): \{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

支払い合計のFlex Messageを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditCardPaymentReport` | [`creditCardPaymentBasicReport`](../interfaces/interfaces.creditCardPaymentBasicReport.md) & [`creditCardPaymentExReport`](../interfaces/interfaces.creditCardPaymentExReport.md) | クレジットカード請求金額確定レポート |

#### Returns

\{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

Flex Message

___

### createQrPayChargeFlexMessage

▸ **createQrPayChargeFlexMessage**(`qrPayChargeReport`): \{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

auPayチャージのFlex Messageを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qrPayChargeReport` | [`qrPayChargeReport`](../interfaces/interfaces.qrPayChargeReport.md) | auPayチャージレポート |

#### Returns

\{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

Flex Message

___

### createQrPayUsageFlexMessage

▸ **createQrPayUsageFlexMessage**(`qrPayUsageReport`): \{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

auPay利用のFlex Messageを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qrPayUsageReport` | [`qrPayUsageReport`](../interfaces/interfaces.qrPayUsageReport.md) | auPay利用レポート |

#### Returns

\{ `altText`: `string` ; `contents`: `any` = flexMessageContent; `type`: `string` = "flex" }[]

Flex Message

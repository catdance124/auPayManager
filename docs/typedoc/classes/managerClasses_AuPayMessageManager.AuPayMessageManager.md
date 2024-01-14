[au-pay-manager](../README.md) / [managerClasses/AuPayMessageManager](../modules/managerClasses_AuPayMessageManager.md) / AuPayMessageManager

# Class: AuPayMessageManager

[managerClasses/AuPayMessageManager](../modules/managerClasses_AuPayMessageManager.md).AuPayMessageManager

AuPay使用履歴botへの返信処理を管理するマネージャクラス

**`Author`**

catdance124

## Table of contents

### Constructors

- [constructor](managerClasses_AuPayMessageManager.AuPayMessageManager.md#constructor)

### Properties

- [\_config](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_config)
- [\_creditCardReportSheet](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_creditcardreportsheet)
- [\_flexMessageManager](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_flexmessagemanager)
- [\_lineManager](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_linemanager)
- [\_logDebugSheet](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_logdebugsheet)

### Methods

- [\_processMessageTypeEvent](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_processmessagetypeevent)
- [\_processPostbackTypeEvent](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_processpostbacktypeevent)
- [\_replyQuickReplyForUpdatePaymentLabel](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_replyquickreplyforupdatepaymentlabel)
- [\_replyResultOfUpdatePaymentLabel](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_replyresultofupdatepaymentlabel)
- [\_replyRoomId](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_replyroomid)
- [\_replySummedAmount](managerClasses_AuPayMessageManager.AuPayMessageManager.md#_replysummedamount)
- [executePostedMessages](managerClasses_AuPayMessageManager.AuPayMessageManager.md#executepostedmessages)

## Constructors

### constructor

• **new AuPayMessageManager**(): [`AuPayMessageManager`](managerClasses_AuPayMessageManager.AuPayMessageManager.md)

コンストラクタ

#### Returns

[`AuPayMessageManager`](managerClasses_AuPayMessageManager.AuPayMessageManager.md)

## Properties

### \_config

• `Private` **\_config**: [`Config`](config.Config.md)

設定オブジェクト

___

### \_creditCardReportSheet

• `Private` **\_creditCardReportSheet**: [`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

クレジットカード利用レポートシート

___

### \_flexMessageManager

• `Private` **\_flexMessageManager**: [`FlexMessageManager`](managerClasses_FlexMessageManager.FlexMessageManager.md)

Flex Messageマネージャオブジェクト

___

### \_lineManager

• `Private` **\_lineManager**: [`LineManager`](managerClasses_LineManager.LineManager.md)

LINEマネージャオブジェクト

___

### \_logDebugSheet

• `Private` **\_logDebugSheet**: [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

デバッグログシートオブジェクト

## Methods

### \_processMessageTypeEvent

▸ **_processMessageTypeEvent**(`event`): `void`

メッセージタイプのイベントを処理する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.message` | `Object` | - |
| `event.message.text` | `string` | - |
| `event.message.type` | `string` | - |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |

#### Returns

`void`

___

### \_processPostbackTypeEvent

▸ **_processPostbackTypeEvent**(`event`): `void`

ポストバックタイプのイベントを処理する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.postback` | `Object` | - |
| `event.postback.data` | `any` | - |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |

#### Returns

`void`

___

### \_replyQuickReplyForUpdatePaymentLabel

▸ **_replyQuickReplyForUpdatePaymentLabel**(`event`, `id`): `void`

クイックリプライを返信する（支払いラベルの更新用）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |
| `id` | `string` | 支払いID |

#### Returns

`void`

___

### \_replyResultOfUpdatePaymentLabel

▸ **_replyResultOfUpdatePaymentLabel**(`event`, `id`, `label`): `void`

支払いラベルの更新結果を返信する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |
| `id` | `string` | 支払いID |
| `label` | `string` | 支払いラベル |

#### Returns

`void`

___

### \_replyRoomId

▸ **_replyRoomId**(`event`): `void`

ルームIDを返信する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |

#### Returns

`void`

___

### \_replySummedAmount

▸ **_replySummedAmount**(`event`, `paymentDate`, `summedAmount`, `paymentNotes`): `void`

サマリの合計金額を返信する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |
| `paymentDate` | `Date` | 支払い日 |
| `summedAmount` | [`summedAmount`](../interfaces/interfaces.summedAmount.md) | 支払い種別ごとの合計金額 |
| `paymentNotes` | [`paymentNote`](../interfaces/interfaces.paymentNote.md)[] | メモ付き支払い履歴 |

#### Returns

`void`

___

### executePostedMessages

▸ **executePostedMessages**(`event`): `void`

投稿されたメッセージを処理する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントデータ |
| `event.message` | `Object` | - |
| `event.message.text` | `string` | - |
| `event.message.type` | `string` | - |
| `event.postback` | `any` | - |
| `event.replyToken` | `any` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |
| `event.type` | `any` | - |

#### Returns

`void`

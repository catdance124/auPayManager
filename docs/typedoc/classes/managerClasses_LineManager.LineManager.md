[au-pay-manager](../README.md) / [managerClasses/LineManager](../modules/managerClasses_LineManager.md) / LineManager

# Class: LineManager

[managerClasses/LineManager](../modules/managerClasses_LineManager.md).LineManager

LINE通知機能を管理するマネージャクラス

**`Author`**

catdance124

## Table of contents

### Constructors

- [constructor](managerClasses_LineManager.LineManager.md#constructor)

### Properties

- [\_lineAccessToken](managerClasses_LineManager.LineManager.md#_lineaccesstoken)
- [\_lineGroupId](managerClasses_LineManager.LineManager.md#_linegroupid)
- [\_lineNotify](managerClasses_LineManager.LineManager.md#_linenotify)
- [\_logDebugSheet](managerClasses_LineManager.LineManager.md#_logdebugsheet)

### Methods

- [\_sendPushMessage](managerClasses_LineManager.LineManager.md#_sendpushmessage)
- [getRoomInfo](managerClasses_LineManager.LineManager.md#getroominfo)
- [sendPushMessageToGroup](managerClasses_LineManager.LineManager.md#sendpushmessagetogroup)
- [sendReplyMessage](managerClasses_LineManager.LineManager.md#sendreplymessage)

## Constructors

### constructor

• **new LineManager**(): [`LineManager`](managerClasses_LineManager.LineManager.md)

コンストラクタ

#### Returns

[`LineManager`](managerClasses_LineManager.LineManager.md)

## Properties

### \_lineAccessToken

• `Private` **\_lineAccessToken**: ``null`` \| `string`

LINEアクセストークン

___

### \_lineGroupId

• `Private` **\_lineGroupId**: ``null`` \| `string`

LINEグループID

___

### \_lineNotify

• `Private` **\_lineNotify**: `boolean`

LINE通知の有無

___

### \_logDebugSheet

• `Private` **\_logDebugSheet**: [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

デバッグログシート

## Methods

### \_sendPushMessage

▸ **_sendPushMessage**(`roomId`, `messages`): `void`

指定した投稿先にpush通知を送信

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roomId` | ``null`` \| `string` | 送信先のルームID |
| `messages` | `any`[] | 送信するメッセージの配列 |

#### Returns

`void`

___

### getRoomInfo

▸ **getRoomInfo**(`event`): `Object`

ルーム情報を取得する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Object` | イベントオブジェクト |
| `event.replyToken` | `string` | - |
| `event.source` | `Object` | - |
| `event.source.groupId` | `string` | - |
| `event.source.roomId` | `string` | - |
| `event.source.type` | `string` | - |
| `event.source.userId` | `string` | - |

#### Returns

`Object`

ルーム情報

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | `string` |

___

### sendPushMessageToGroup

▸ **sendPushMessageToGroup**(`messages`): `void`

登録グループにpush通知を送信

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messages` | `any`[] | 送信するメッセージの配列 |

#### Returns

`void`

___

### sendReplyMessage

▸ **sendReplyMessage**(`event`, `messages`, `needsRoomIdCheck?`): `void`

指定したリプライ先にメッセージを返信
roomIdが渡されていて、グループIDと一致しない場合は何も行わない

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `event` | `Object` | `undefined` | - |
| `event.replyToken` | `string` | `undefined` | - |
| `event.source` | `Object` | `undefined` | - |
| `event.source.groupId` | `string` | `undefined` | - |
| `event.source.roomId` | `string` | `undefined` | - |
| `event.source.type` | `string` | `undefined` | - |
| `event.source.userId` | `string` | `undefined` | - |
| `messages` | `any`[] | `undefined` | 送信するメッセージの配列 |
| `needsRoomIdCheck` | `boolean` | `true` | - |

#### Returns

`void`

[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [managerClasses/LineManager](../README.md) / LineManager

# Class: LineManager

LINE通知機能を管理するマネージャクラス

## Author

catdance124

## Constructors

### new LineManager()

> **new LineManager**(): [`LineManager`](LineManager.md)

コンストラクタ

#### Returns

[`LineManager`](LineManager.md)

## Methods

### getRoomInfo()

> **getRoomInfo**(`event`): `object`

ルーム情報を取得する

#### Parameters

##### event

イベントオブジェクト

###### replyToken

`string`

###### source

\{ `groupId`: `string`; `roomId`: `string`; `type`: `string`; `userId`: `string`; \}

###### source.groupId

`string`

###### source.roomId

`string`

###### source.type

`string`

###### source.userId

`string`

#### Returns

`object`

ルーム情報

##### id

> **id**: `string`

##### type

> **type**: `string`

***

### sendPushMessageToGroup()

> **sendPushMessageToGroup**(`messages`): `void`

登録グループにpush通知を送信

#### Parameters

##### messages

`any`[]

送信するメッセージの配列

#### Returns

`void`

***

### sendReplyMessage()

> **sendReplyMessage**(`event`, `messages`, `needsRoomIdCheck`): `void`

指定したリプライ先にメッセージを返信
roomIdが渡されていて、グループIDと一致しない場合は何も行わない

#### Parameters

##### event

###### replyToken

`string`

###### source

\{ `groupId`: `string`; `roomId`: `string`; `type`: `string`; `userId`: `string`; \}

###### source.groupId

`string`

###### source.roomId

`string`

###### source.type

`string`

###### source.userId

`string`

##### messages

`any`[]

送信するメッセージの配列

##### needsRoomIdCheck

`boolean` = `true`

#### Returns

`void`

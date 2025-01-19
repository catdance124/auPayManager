[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [managerClasses/AuPayMessageManager](../README.md) / AuPayMessageManager

# Class: AuPayMessageManager

AuPay使用履歴botへの返信処理を管理するマネージャクラス

## Author

catdance124

## Constructors

### new AuPayMessageManager()

> **new AuPayMessageManager**(): [`AuPayMessageManager`](AuPayMessageManager.md)

コンストラクタ

#### Returns

[`AuPayMessageManager`](AuPayMessageManager.md)

## Methods

### executePostedMessages()

> **executePostedMessages**(`event`): `void`

投稿されたメッセージを処理する

#### Parameters

##### event

イベントデータ

###### message

\{ `text`: `string`; `type`: `string`; \}

###### message.text

`string`

###### message.type

`string`

###### postback

`any`

###### replyToken

`any`

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

###### type

`any`

#### Returns

`void`

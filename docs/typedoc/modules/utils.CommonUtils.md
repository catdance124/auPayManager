[au-pay-manager](../README.md) / [utils](utils.md) / CommonUtils

# Namespace: CommonUtils

[utils](utils.md).CommonUtils

共通ユーティリティクラス

## Table of contents

### Functions

- [convertYenStrToNum](utils.CommonUtils.md#convertyenstrtonum)
- [createId](utils.CommonUtils.md#createid)
- [formatDate](utils.CommonUtils.md#formatdate)
- [formatNumberWithCommas](utils.CommonUtils.md#formatnumberwithcommas)
- [getProperty](utils.CommonUtils.md#getproperty)
- [parseDate](utils.CommonUtils.md#parsedate)
- [parseQueryString](utils.CommonUtils.md#parsequerystring)
- [setProperty](utils.CommonUtils.md#setproperty)

## Functions

### convertYenStrToNum

▸ **convertYenStrToNum**(`yenStr`): `number`

「〇〇円」形式の文字列を数値に変換する
文字列に「取消」が含まれている場合は負数にする

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yenStr` | `string` | 変換する「〇〇円」形式の文字列 |

#### Returns

`number`

変換された数値

___

### createId

▸ **createId**(`myStrong?`): `string`

タイムスタンプを16進数に変換しIDを生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `myStrong?` | `number` | 乱数生成の強度（省略時は10） |

#### Returns

`string`

生成されたID

___

### formatDate

▸ **formatDate**(`utcDate`, `format`): `string`

dateオブジェクトを指定形式の文字列にフォーマットする

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `utcDate` | `Date` | フォーマットするdateオブジェクト |
| `format` | `string` | フォーマット形式 |

#### Returns

`string`

フォーマットされた文字列

___

### formatNumberWithCommas

▸ **formatNumberWithCommas**(`number`): `string`

数値を「〇〇円」形式の文字列に変換する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | 変換する数値 |

#### Returns

`string`

変換された「〇〇円」形式の文字列

___

### getProperty

▸ **getProperty**(`key`): `string` \| ``null``

スクリプトプロパティからitemをゲットする

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | キー |

#### Returns

`string` \| ``null``

___

### parseDate

▸ **parseDate**(`dateString`, `format`): `Date`

指定形式の文字列をdateオブジェクトにパースする

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateString` | `string` | パースする文字列 |
| `format` | `string` | パース形式 |

#### Returns

`Date`

パースされたdateオブジェクト

___

### parseQueryString

▸ **parseQueryString**(`queryString`): [`queryString`](../interfaces/interfaces.queryString.md)

クエリストリングを辞書に変換する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryString` | `string` | 変換するクエリストリング |

#### Returns

[`queryString`](../interfaces/interfaces.queryString.md)

変換された辞書オブジェクト

___

### setProperty

▸ **setProperty**(`key`, `value`): `void`

スクリプトプロパティにitemをセットする
valueがnullの場合はkeyを削除し、getしたときnullになるようにする

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | キー |
| `value` | ``null`` \| `string` | 値 |

#### Returns

`void`

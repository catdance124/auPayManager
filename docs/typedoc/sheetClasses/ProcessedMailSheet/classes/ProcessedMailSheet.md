[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [sheetClasses/ProcessedMailSheet](../README.md) / ProcessedMailSheet

# Class: ProcessedMailSheet

処理済みメールシートクラス

## Author

catdance124

## Extends

- [`Sheet`](../../_Sheet/classes/Sheet.md)

## Properties

### \_headers

> `protected` **\_headers**: `string`[]

ヘッダー配列

#### Inherited from

[`Sheet`](../../_Sheet/classes/Sheet.md).[`_headers`](../../_Sheet/classes/Sheet.md#_headers)

## Accessors

### rows

#### Get Signature

> **get** **rows**(): [`rows`](../../../interfaces/type-aliases/rows.md)

データ配列を取得する

##### Returns

[`rows`](../../../interfaces/type-aliases/rows.md)

データ配列

#### Set Signature

> **set** **rows**(`rows`): `void`

データ配列を設定する

##### Parameters

###### rows

[`rows`](../../../interfaces/type-aliases/rows.md)

データ配列

##### Returns

`void`

#### Inherited from

[`Sheet`](../../_Sheet/classes/Sheet.md).[`rows`](../../_Sheet/classes/Sheet.md#rows)

## Methods

### \_hideUpperRows()

> `protected` **\_hideUpperRows**(`visibleRecordMaxNumber`): `void`

シート上部の過去レコードを非表示にする

#### Parameters

##### visibleRecordMaxNumber

`number` = `30`

シートに表示するレコード数

#### Returns

`void`

#### Inherited from

[`Sheet`](../../_Sheet/classes/Sheet.md).[`_hideUpperRows`](../../_Sheet/classes/Sheet.md#_hideupperrows)

***

### \_sortRows()

> `protected` **\_sortRows**(`column`, `ascending`): `void`

レコードを指定カラムに沿ってソートする

#### Parameters

##### column

`number`

ソートするカラムのインデックス

##### ascending

`boolean` = `true`

ソート順序 デフォルトは昇順

#### Returns

`void`

#### Inherited from

[`Sheet`](../../_Sheet/classes/Sheet.md).[`_sortRows`](../../_Sheet/classes/Sheet.md#_sortrows)

***

### existId()

> **existId**(`mailId`): `boolean`

指定のメールIDが存在するかどうかを確認する

#### Parameters

##### mailId

`string`

メールID

#### Returns

`boolean`

メールIDの存在確認結果

***

### insert()

> **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

##### sheetRecord

[`processedMailSheetRecord`](../../../interfaces/interfaces/processedMailSheetRecord.md)

シートレコード

#### Returns

`void`

#### Overrides

[`Sheet`](../../_Sheet/classes/Sheet.md).[`insert`](../../_Sheet/classes/Sheet.md#insert)

***

### getInstance()

> `static` **getInstance**(): [`ProcessedMailSheet`](ProcessedMailSheet.md)

シングルトンインスタンスを取得する

#### Returns

[`ProcessedMailSheet`](ProcessedMailSheet.md)

シングルトンインスタンス

[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [sheetClasses/LogDebugSheet](../README.md) / LogDebugSheet

# Class: LogDebugSheet

デバッグログシートクラス

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

### insert()

> **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

##### sheetRecord

[`logDebugSheetRecord`](../../../interfaces/interfaces/logDebugSheetRecord.md)

シートレコード

#### Returns

`void`

#### Overrides

[`Sheet`](../../_Sheet/classes/Sheet.md).[`insert`](../../_Sheet/classes/Sheet.md#insert)

***

### log()

> **log**(`label`, `value`): `void`

デバッグログを出力する

#### Parameters

##### label

`string`

ラベル

##### value

値

`string` | `object`

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): [`LogDebugSheet`](LogDebugSheet.md)

シングルトンインスタンスを取得する

#### Returns

[`LogDebugSheet`](LogDebugSheet.md)

シングルトンインスタンス

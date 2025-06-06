[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [sheetClasses/QrPayReportSheet](../README.md) / QrPayReportSheet

# Class: QrPayReportSheet

QR Pay利用・チャージ履歴シートクラス

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

[`qrPayReportSheetRecord`](../../../interfaces/interfaces/qrPayReportSheetRecord.md)

シートレコード

#### Returns

`void`

#### Overrides

[`Sheet`](../../_Sheet/classes/Sheet.md).[`insert`](../../_Sheet/classes/Sheet.md#insert)

***

### getInstance()

> `static` **getInstance**(): `QrPayReportSheet`

シングルトンインスタンスを取得する

#### Returns

`QrPayReportSheet`

シングルトンインスタンス

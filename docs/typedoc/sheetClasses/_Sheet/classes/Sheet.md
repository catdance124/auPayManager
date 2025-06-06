[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [sheetClasses/\_Sheet](../README.md) / Sheet

# Class: Sheet

スプレッドシート基底クラス

## Author

catdance124

## Extended by

- [`CreditCardReportSheet`](../../CreditCardReportSheet/classes/CreditCardReportSheet.md)
- [`LogDebugSheet`](../../LogDebugSheet/classes/LogDebugSheet.md)
- [`ProcessedMailSheet`](../../ProcessedMailSheet/classes/ProcessedMailSheet.md)
- [`QrPayReportSheet`](../../QrPayReportSheet/classes/QrPayReportSheet.md)

## Constructors

### Constructor

> `protected` **new Sheet**(`headers`, `sheetName`): `Sheet`

コンストラクタ

#### Parameters

##### headers

`string`[]

ヘッダー配列

##### sheetName

`string`

シート名

#### Returns

`Sheet`

## Properties

### \_headers

> `protected` **\_headers**: `string`[]

ヘッダー配列

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

***

### insert()

> **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

##### sheetRecord

[`sheetRecord`](../../../interfaces/interfaces/sheetRecord.md)

シートレコード

#### Returns

`void`

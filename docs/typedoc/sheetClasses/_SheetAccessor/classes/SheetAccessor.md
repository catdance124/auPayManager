[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [sheetClasses/\_SheetAccessor](../README.md) / SheetAccessor

# Class: SheetAccessor

スプレッドシートアクセサクラス

## Author

catdance124

## Constructors

### new SheetAccessor()

> **new SheetAccessor**(`headers`, `sheetName`): [`SheetAccessor`](SheetAccessor.md)

コンストラクタ

#### Parameters

##### headers

`string`[]

ヘッダー配列

##### sheetName

`string`

シート名

#### Returns

[`SheetAccessor`](SheetAccessor.md)

## Methods

### hideUpperRows()

> **hideUpperRows**(`visibleRecordMaxNumber`): `void`

シート上部の過去レコードを非表示にする

#### Parameters

##### visibleRecordMaxNumber

`number` = `30`

シートに表示するレコード数

#### Returns

`void`

***

### readValuesFromSheet()

> **readValuesFromSheet**(): [`rows`](../../../interfaces/type-aliases/rows.md)

シートから値を読み込む

#### Returns

[`rows`](../../../interfaces/type-aliases/rows.md)

値

***

### writeValuesToSheet()

> **writeValuesToSheet**(`values`): `void`

シートに値を書き込む

#### Parameters

##### values

[`rows`](../../../interfaces/type-aliases/rows.md)

値

#### Returns

`void`

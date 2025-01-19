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

> **readValuesFromSheet**(): `any`[][]

シートから値を読み込む

#### Returns

`any`[][]

値

***

### writeValuesToSheet()

> **writeValuesToSheet**(`values`): `void`

シートに値を書き込む

#### Parameters

##### values

`any`[][]

値

#### Returns

`void`

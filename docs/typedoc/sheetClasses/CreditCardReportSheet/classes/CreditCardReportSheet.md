[**au-pay-manager**](../../../README.md)

***

[au-pay-manager](../../../README.md) / [sheetClasses/CreditCardReportSheet](../README.md) / CreditCardReportSheet

# Class: CreditCardReportSheet

クレジットカード利用履歴シートクラス

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

***

### amountColumn

> **amountColumn**: `number`

金額列のインデックス

***

### contentColumn

> **contentColumn**: `number`

内容列のインデックス

***

### dateColumn

> **dateColumn**: `number`

日時列のインデックス

***

### paymentNoteColumn

> **paymentNoteColumn**: `number`

メモ列のインデックス

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

### getPaymentNotes()

> **getPaymentNotes**(`paymentDate`): [`paymentNote`](../../../interfaces/interfaces/paymentNote.md)[]

メモ付きの支払い履歴を取得する

#### Parameters

##### paymentDate

`Date`

#### Returns

[`paymentNote`](../../../interfaces/interfaces/paymentNote.md)[]

メモ付き支払い履歴

***

### getSummedAmount()

> **getSummedAmount**(`paymentDate`): [`summedAmount`](../../../interfaces/interfaces/summedAmount.md)

支払い種別ごとの合計金額を取得する

#### Parameters

##### paymentDate

`Date`

#### Returns

[`summedAmount`](../../../interfaces/interfaces/summedAmount.md)

支払い種別ごとの合計金額

***

### insert()

> **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

##### sheetRecord

[`creditCardReportSheetRecord`](../../../interfaces/interfaces/creditCardReportSheetRecord.md)

シートレコード

#### Returns

`void`

#### Overrides

[`Sheet`](../../_Sheet/classes/Sheet.md).[`insert`](../../_Sheet/classes/Sheet.md#insert)

***

### updatePaymentLabel()

> **updatePaymentLabel**(`id`, `label`): [`row`](../../../interfaces/type-aliases/row.md)

支払いラベルを更新する

#### Parameters

##### id

`string`

レコードID

##### label

`string`

支払いラベル

#### Returns

[`row`](../../../interfaces/type-aliases/row.md)

更新された行データ

***

### updatePaymentNote()

> **updatePaymentNote**(`id`, `note`): [`row`](../../../interfaces/type-aliases/row.md)

支払いメモを更新する

#### Parameters

##### id

`string`

レコードID

##### note

`string`

支払いメモ

#### Returns

[`row`](../../../interfaces/type-aliases/row.md)

更新された行データ

***

### upsertPaymentDetail()

> **upsertPaymentDetail**(`creditCardDetailBasicReport`): [`creditCardReportSheetRecord`](../../../interfaces/interfaces/creditCardReportSheetRecord.md)

利用詳細を更新する

#### Parameters

##### creditCardDetailBasicReport

[`creditCardDetailBasicReport`](../../../interfaces/interfaces/creditCardDetailBasicReport.md)

クレジットカード利用詳細レポート

#### Returns

[`creditCardReportSheetRecord`](../../../interfaces/interfaces/creditCardReportSheetRecord.md)

更新されたレコード

***

### getInstance()

> `static` **getInstance**(): `CreditCardReportSheet`

シングルトンインスタンスを取得する

#### Returns

`CreditCardReportSheet`

シングルトンインスタンス

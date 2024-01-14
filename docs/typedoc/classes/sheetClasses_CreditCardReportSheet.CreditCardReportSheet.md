[au-pay-manager](../README.md) / [sheetClasses/CreditCardReportSheet](../modules/sheetClasses_CreditCardReportSheet.md) / CreditCardReportSheet

# Class: CreditCardReportSheet

[sheetClasses/CreditCardReportSheet](../modules/sheetClasses_CreditCardReportSheet.md).CreditCardReportSheet

クレジットカード利用履歴シートクラス

**`Author`**

catdance124

## Hierarchy

- [`Sheet`](sheetClasses__Sheet.Sheet.md)

  ↳ **`CreditCardReportSheet`**

## Table of contents

### Constructors

- [constructor](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#constructor)

### Properties

- [\_config](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_config)
- [\_defaultContent](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_defaultcontent)
- [\_headers](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_headers)
- [\_idColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_idcolumn)
- [\_paymentDateColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_paymentdatecolumn)
- [\_paymentLabelColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_paymentlabelcolumn)
- [amountColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#amountcolumn)
- [contentColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#contentcolumn)
- [dateColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#datecolumn)
- [paymentNoteColumn](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#paymentnotecolumn)
- [\_instance](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_instance)

### Accessors

- [rows](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#rows)

### Methods

- [\_hideUpperRows](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_hideupperrows)
- [\_sortRows](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#_sortrows)
- [getPaymentNotes](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#getpaymentnotes)
- [getSummedAmount](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#getsummedamount)
- [insert](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#insert)
- [updatePaymentLabel](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#updatepaymentlabel)
- [updatePaymentNote](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#updatepaymentnote)
- [upsertPaymentDetail](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#upsertpaymentdetail)
- [getInstance](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md#getinstance)

## Constructors

### constructor

• **new CreditCardReportSheet**(): [`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

コンストラクタ

#### Returns

[`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[constructor](sheetClasses__Sheet.Sheet.md#constructor)

## Properties

### \_config

• `Private` **\_config**: [`Config`](config.Config.md)

コンフィグ

___

### \_defaultContent

• `Private` **\_defaultContent**: `string`

デフォルトの利用内容

___

### \_headers

• `Protected` **\_headers**: `string`[]

ヘッダー配列

#### Inherited from

[Sheet](sheetClasses__Sheet.Sheet.md).[_headers](sheetClasses__Sheet.Sheet.md#_headers)

___

### \_idColumn

• `Private` **\_idColumn**: `number`

ID列のインデックス

___

### \_paymentDateColumn

• `Private` **\_paymentDateColumn**: `number`

支払い日列のインデックス

___

### \_paymentLabelColumn

• `Private` **\_paymentLabelColumn**: `number`

支払い元列のインデックス

___

### amountColumn

• **amountColumn**: `number`

金額列のインデックス

___

### contentColumn

• **contentColumn**: `number`

内容列のインデックス

___

### dateColumn

• **dateColumn**: `number`

日時列のインデックス

___

### paymentNoteColumn

• **paymentNoteColumn**: `number`

メモ列のインデックス

___

### \_instance

▪ `Static` `Private` **\_instance**: [`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

シングルトンインスタンス

## Accessors

### rows

• `get` **rows**(): `any`[][]

データ配列を取得する

#### Returns

`any`[][]

データ配列

#### Inherited from

Sheet.rows

• `set` **rows**(`rows`): `void`

データ配列を設定する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `any`[][] | データ配列 |

#### Returns

`void`

#### Inherited from

Sheet.rows

## Methods

### \_hideUpperRows

▸ **_hideUpperRows**(`visibleRecordMaxNumber?`): `void`

シート上部の過去レコードを非表示にする

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `visibleRecordMaxNumber` | `number` | `30` | シートに表示するレコード数 |

#### Returns

`void`

#### Inherited from

[Sheet](sheetClasses__Sheet.Sheet.md).[_hideUpperRows](sheetClasses__Sheet.Sheet.md#_hideupperrows)

___

### \_sortRows

▸ **_sortRows**(`column`, `ascending?`): `void`

レコードを指定カラムに沿ってソートする

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `number` | `undefined` | ソートするカラムのインデックス |
| `ascending` | `boolean` | `true` | ソート順序 デフォルトは昇順 |

#### Returns

`void`

#### Inherited from

[Sheet](sheetClasses__Sheet.Sheet.md).[_sortRows](sheetClasses__Sheet.Sheet.md#_sortrows)

___

### getPaymentNotes

▸ **getPaymentNotes**(`paymentDate`): [`paymentNote`](../interfaces/interfaces.paymentNote.md)[]

メモ付きの支払い履歴を取得する

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentDate` | `Date` |

#### Returns

[`paymentNote`](../interfaces/interfaces.paymentNote.md)[]

メモ付き支払い履歴

___

### getSummedAmount

▸ **getSummedAmount**(`paymentDate`): [`summedAmount`](../interfaces/interfaces.summedAmount.md)

支払い種別ごとの合計金額を取得する

#### Parameters

| Name | Type |
| :------ | :------ |
| `paymentDate` | `Date` |

#### Returns

[`summedAmount`](../interfaces/interfaces.summedAmount.md)

支払い種別ごとの合計金額

___

### insert

▸ **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sheetRecord` | [`creditCardReportSheetRecord`](../interfaces/interfaces.creditCardReportSheetRecord.md) | シートレコード |

#### Returns

`void`

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[insert](sheetClasses__Sheet.Sheet.md#insert)

___

### updatePaymentLabel

▸ **updatePaymentLabel**(`id`, `label`): `any`

支払いラベルを更新する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | レコードID |
| `label` | `string` | 支払いラベル |

#### Returns

`any`

更新された行データ

___

### updatePaymentNote

▸ **updatePaymentNote**(`id`, `note`): `any`

支払いメモを更新する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | レコードID |
| `note` | `string` | 支払いメモ |

#### Returns

`any`

更新された行データ

___

### upsertPaymentDetail

▸ **upsertPaymentDetail**(`creditCardDetailBasicReport`): [`creditCardReportSheetRecord`](../interfaces/interfaces.creditCardReportSheetRecord.md)

利用詳細を更新する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditCardDetailBasicReport` | [`creditCardDetailBasicReport`](../interfaces/interfaces.creditCardDetailBasicReport.md) | クレジットカード利用詳細レポート |

#### Returns

[`creditCardReportSheetRecord`](../interfaces/interfaces.creditCardReportSheetRecord.md)

更新されたレコード

___

### getInstance

▸ **getInstance**(): [`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

シングルトンインスタンスを取得する

#### Returns

[`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

シングルトンインスタンス

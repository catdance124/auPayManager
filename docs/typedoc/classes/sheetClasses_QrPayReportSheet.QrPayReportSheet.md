[au-pay-manager](../README.md) / [sheetClasses/QrPayReportSheet](../modules/sheetClasses_QrPayReportSheet.md) / QrPayReportSheet

# Class: QrPayReportSheet

[sheetClasses/QrPayReportSheet](../modules/sheetClasses_QrPayReportSheet.md).QrPayReportSheet

QR Pay利用・チャージ履歴シートクラス

**`Author`**

catdance124

## Hierarchy

- [`Sheet`](sheetClasses__Sheet.Sheet.md)

  ↳ **`QrPayReportSheet`**

## Table of contents

### Constructors

- [constructor](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#constructor)

### Properties

- [\_headers](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#_headers)
- [\_instance](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#_instance)

### Accessors

- [rows](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#rows)

### Methods

- [\_hideUpperRows](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#_hideupperrows)
- [\_sortRows](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#_sortrows)
- [insert](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#insert)
- [getInstance](sheetClasses_QrPayReportSheet.QrPayReportSheet.md#getinstance)

## Constructors

### constructor

• **new QrPayReportSheet**(): [`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

コンストラクタ

#### Returns

[`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[constructor](sheetClasses__Sheet.Sheet.md#constructor)

## Properties

### \_headers

• `Protected` **\_headers**: `string`[]

ヘッダー配列

#### Inherited from

[Sheet](sheetClasses__Sheet.Sheet.md).[_headers](sheetClasses__Sheet.Sheet.md#_headers)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

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

### insert

▸ **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sheetRecord` | [`qrPayReportSheetRecord`](../interfaces/interfaces.qrPayReportSheetRecord.md) | シートレコード |

#### Returns

`void`

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[insert](sheetClasses__Sheet.Sheet.md#insert)

___

### getInstance

▸ **getInstance**(): [`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

シングルトンインスタンスを取得する

#### Returns

[`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

シングルトンインスタンス

[au-pay-manager](../README.md) / [sheetClasses/\_SheetAccessor](../modules/sheetClasses__SheetAccessor.md) / SheetAccessor

# Class: SheetAccessor

[sheetClasses/\_SheetAccessor](../modules/sheetClasses__SheetAccessor.md).SheetAccessor

スプレッドシートアクセサクラス

**`Author`**

catdance124

## Table of contents

### Constructors

- [constructor](sheetClasses__SheetAccessor.SheetAccessor.md#constructor)

### Properties

- [\_headers](sheetClasses__SheetAccessor.SheetAccessor.md#_headers)
- [\_sheet](sheetClasses__SheetAccessor.SheetAccessor.md#_sheet)

### Methods

- [\_getRecordNumber](sheetClasses__SheetAccessor.SheetAccessor.md#_getrecordnumber)
- [\_getSheet](sheetClasses__SheetAccessor.SheetAccessor.md#_getsheet)
- [hideUpperRows](sheetClasses__SheetAccessor.SheetAccessor.md#hideupperrows)
- [readValuesFromSheet](sheetClasses__SheetAccessor.SheetAccessor.md#readvaluesfromsheet)
- [writeValuesToSheet](sheetClasses__SheetAccessor.SheetAccessor.md#writevaluestosheet)

## Constructors

### constructor

• **new SheetAccessor**(`headers`, `sheetName`): [`SheetAccessor`](sheetClasses__SheetAccessor.SheetAccessor.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `headers` | `string`[] | ヘッダー配列 |
| `sheetName` | `string` | シート名 |

#### Returns

[`SheetAccessor`](sheetClasses__SheetAccessor.SheetAccessor.md)

## Properties

### \_headers

• `Private` **\_headers**: `string`[]

ヘッダー配列

___

### \_sheet

• `Private` **\_sheet**: `Sheet`

スプレッドシート

## Methods

### \_getRecordNumber

▸ **_getRecordNumber**(): `number`

シートのデータ数を取得する

#### Returns

`number`

データ数

___

### \_getSheet

▸ **_getSheet**(`headers`, `sheetName`): `Sheet`

シートを設定する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `headers` | `string`[] | - |
| `sheetName` | `string` | シート名 |

#### Returns

`Sheet`

___

### hideUpperRows

▸ **hideUpperRows**(`visibleRecordMaxNumber?`): `void`

シート上部の過去レコードを非表示にする

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `visibleRecordMaxNumber` | `number` | `30` | シートに表示するレコード数 |

#### Returns

`void`

___

### readValuesFromSheet

▸ **readValuesFromSheet**(): `any`[][]

シートから値を読み込む

#### Returns

`any`[][]

値

___

### writeValuesToSheet

▸ **writeValuesToSheet**(`values`): `void`

シートに値を書き込む

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `any`[][] | 値 |

#### Returns

`void`

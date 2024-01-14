[au-pay-manager](../README.md) / [sheetClasses/\_Sheet](../modules/sheetClasses__Sheet.md) / Sheet

# Class: Sheet

[sheetClasses/\_Sheet](../modules/sheetClasses__Sheet.md).Sheet

スプレッドシート基底クラス

**`Author`**

catdance124

## Hierarchy

- **`Sheet`**

  ↳ [`CreditCardReportSheet`](sheetClasses_CreditCardReportSheet.CreditCardReportSheet.md)

  ↳ [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

  ↳ [`ProcessedMailSheet`](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md)

  ↳ [`QrPayReportSheet`](sheetClasses_QrPayReportSheet.QrPayReportSheet.md)

## Table of contents

### Constructors

- [constructor](sheetClasses__Sheet.Sheet.md#constructor)

### Properties

- [\_headers](sheetClasses__Sheet.Sheet.md#_headers)
- [\_rows](sheetClasses__Sheet.Sheet.md#_rows)
- [\_sheetAccessor](sheetClasses__Sheet.Sheet.md#_sheetaccessor)

### Accessors

- [rows](sheetClasses__Sheet.Sheet.md#rows)

### Methods

- [\_hideUpperRows](sheetClasses__Sheet.Sheet.md#_hideupperrows)
- [\_sortRows](sheetClasses__Sheet.Sheet.md#_sortrows)
- [insert](sheetClasses__Sheet.Sheet.md#insert)

## Constructors

### constructor

• **new Sheet**(`headers`, `sheetName`): [`Sheet`](sheetClasses__Sheet.Sheet.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `headers` | `string`[] | ヘッダー配列 |
| `sheetName` | `string` | シート名 |

#### Returns

[`Sheet`](sheetClasses__Sheet.Sheet.md)

## Properties

### \_headers

• `Protected` **\_headers**: `string`[]

ヘッダー配列

___

### \_rows

• `Private` **\_rows**: `any`[][]

データ配列

___

### \_sheetAccessor

• `Private` **\_sheetAccessor**: [`SheetAccessor`](sheetClasses__SheetAccessor.SheetAccessor.md)

スプレッドシートアクセサクラス

## Accessors

### rows

• `get` **rows**(): `any`[][]

データ配列を取得する

#### Returns

`any`[][]

データ配列

• `set` **rows**(`rows`): `void`

データ配列を設定する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `any`[][] | データ配列 |

#### Returns

`void`

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

___

### insert

▸ **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sheetRecord` | [`sheetRecord`](../interfaces/interfaces.sheetRecord.md) | シートレコード |

#### Returns

`void`

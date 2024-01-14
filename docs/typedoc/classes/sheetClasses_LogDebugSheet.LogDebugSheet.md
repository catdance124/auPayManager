[au-pay-manager](../README.md) / [sheetClasses/LogDebugSheet](../modules/sheetClasses_LogDebugSheet.md) / LogDebugSheet

# Class: LogDebugSheet

[sheetClasses/LogDebugSheet](../modules/sheetClasses_LogDebugSheet.md).LogDebugSheet

デバッグログシートクラス

**`Author`**

catdance124

## Hierarchy

- [`Sheet`](sheetClasses__Sheet.Sheet.md)

  ↳ **`LogDebugSheet`**

## Table of contents

### Constructors

- [constructor](sheetClasses_LogDebugSheet.LogDebugSheet.md#constructor)

### Properties

- [\_headers](sheetClasses_LogDebugSheet.LogDebugSheet.md#_headers)
- [\_instance](sheetClasses_LogDebugSheet.LogDebugSheet.md#_instance)

### Accessors

- [rows](sheetClasses_LogDebugSheet.LogDebugSheet.md#rows)

### Methods

- [\_hideUpperRows](sheetClasses_LogDebugSheet.LogDebugSheet.md#_hideupperrows)
- [\_sortRows](sheetClasses_LogDebugSheet.LogDebugSheet.md#_sortrows)
- [insert](sheetClasses_LogDebugSheet.LogDebugSheet.md#insert)
- [log](sheetClasses_LogDebugSheet.LogDebugSheet.md#log)
- [getInstance](sheetClasses_LogDebugSheet.LogDebugSheet.md#getinstance)

## Constructors

### constructor

• **new LogDebugSheet**(): [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

コンストラクタ

#### Returns

[`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

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

▪ `Static` `Private` **\_instance**: [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

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
| `sheetRecord` | [`logDebugSheetRecord`](../interfaces/interfaces.logDebugSheetRecord.md) | シートレコード |

#### Returns

`void`

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[insert](sheetClasses__Sheet.Sheet.md#insert)

___

### log

▸ **log**(`label`, `value`): `void`

デバッグログを出力する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | ラベル |
| `value` | `any` | 値 |

#### Returns

`void`

___

### getInstance

▸ **getInstance**(): [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

シングルトンインスタンスを取得する

#### Returns

[`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

シングルトンインスタンス

[au-pay-manager](../README.md) / [sheetClasses/ProcessedMailSheet](../modules/sheetClasses_ProcessedMailSheet.md) / ProcessedMailSheet

# Class: ProcessedMailSheet

[sheetClasses/ProcessedMailSheet](../modules/sheetClasses_ProcessedMailSheet.md).ProcessedMailSheet

処理済みメールシートクラス

**`Author`**

catdance124

## Hierarchy

- [`Sheet`](sheetClasses__Sheet.Sheet.md)

  ↳ **`ProcessedMailSheet`**

## Table of contents

### Constructors

- [constructor](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#constructor)

### Properties

- [\_headers](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#_headers)
- [\_idList](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#_idlist)
- [\_instance](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#_instance)

### Accessors

- [rows](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#rows)

### Methods

- [\_getIdList](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#_getidlist)
- [\_hideUpperRows](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#_hideupperrows)
- [\_sortRows](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#_sortrows)
- [existId](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#existid)
- [insert](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#insert)
- [getInstance](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md#getinstance)

## Constructors

### constructor

• **new ProcessedMailSheet**(): [`ProcessedMailSheet`](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md)

コンストラクタ

#### Returns

[`ProcessedMailSheet`](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md)

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[constructor](sheetClasses__Sheet.Sheet.md#constructor)

## Properties

### \_headers

• `Protected` **\_headers**: `string`[]

ヘッダー配列

#### Inherited from

[Sheet](sheetClasses__Sheet.Sheet.md).[_headers](sheetClasses__Sheet.Sheet.md#_headers)

___

### \_idList

• `Private` **\_idList**: `string`[]

IDリスト

___

### \_instance

▪ `Static` `Private` **\_instance**: [`ProcessedMailSheet`](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md)

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

### \_getIdList

▸ **_getIdList**(): `string`[]

IDリストを取得する

#### Returns

`string`[]

IDリスト

___

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

### existId

▸ **existId**(`mailId`): `boolean`

指定のメールIDが存在するかどうかを確認する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mailId` | `string` | メールID |

#### Returns

`boolean`

メールIDの存在確認結果

___

### insert

▸ **insert**(`sheetRecord`): `void`

レコードを挿入する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sheetRecord` | [`processedMailSheetRecord`](../interfaces/interfaces.processedMailSheetRecord.md) | シートレコード |

#### Returns

`void`

#### Overrides

[Sheet](sheetClasses__Sheet.Sheet.md).[insert](sheetClasses__Sheet.Sheet.md#insert)

___

### getInstance

▸ **getInstance**(): [`ProcessedMailSheet`](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md)

シングルトンインスタンスを取得する

#### Returns

[`ProcessedMailSheet`](sheetClasses_ProcessedMailSheet.ProcessedMailSheet.md)

シングルトンインスタンス

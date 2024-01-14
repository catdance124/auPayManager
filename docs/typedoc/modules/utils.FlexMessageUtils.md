[au-pay-manager](../README.md) / [utils](utils.md) / FlexMessageUtils

# Namespace: FlexMessageUtils

[utils](utils.md).FlexMessageUtils

FlexMessageのユーティリティクラス

## Table of contents

### Functions

- [\_getBox](utils.FlexMessageUtils.md#_getbox)
- [\_getHorizontalBox](utils.FlexMessageUtils.md#_gethorizontalbox)
- [\_getLeftText](utils.FlexMessageUtils.md#_getlefttext)
- [\_getNormalText](utils.FlexMessageUtils.md#_getnormaltext)
- [\_getOutline](utils.FlexMessageUtils.md#_getoutline)
- [\_getRightText](utils.FlexMessageUtils.md#_getrighttext)
- [\_getSeparator](utils.FlexMessageUtils.md#_getseparator)
- [\_getVerticalBox](utils.FlexMessageUtils.md#_getverticalbox)

## Functions

### \_getBox

▸ **_getBox**(`contents`, `layout?`, `margin?`, `spacing?`): `any`

Box要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contents` | `any`[] | `undefined` | Box要素内のコンテンツ |
| `layout?` | `string` | `"vertical"` | Boxのレイアウト（"vertical"または"horizontal"） |
| `margin?` | `string` | `"none"` | Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |
| `spacing?` | `string` | `"none"` | Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたBox要素

___

### \_getHorizontalBox

▸ **_getHorizontalBox**(`contents`, `margin?`, `spacing?`): `any`

横方向のBox要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contents` | `any`[] | `undefined` | Box要素内のコンテンツ |
| `margin?` | `string` | `"none"` | Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |
| `spacing?` | `string` | `"none"` | Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたBox要素

___

### \_getLeftText

▸ **_getLeftText**(`text`, `size?`): `any`

左寄せのテキスト要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | テキストの内容 |
| `size?` | `string` | `"sm"` | テキストのサイズ（"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたテキスト要素

___

### \_getNormalText

▸ **_getNormalText**(`text`, `size?`): `any`

通常のテキスト要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | テキストの内容 |
| `size?` | `string` | `"sm"` | テキストのサイズ（"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたテキスト要素

___

### \_getOutline

▸ **_getOutline**(`contents`): `any`

アウトライン付きのBubble要素を生成する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contents` | `any`[] | Bubble要素内のコンテンツ |

#### Returns

`any`

生成されたBubble要素

___

### \_getRightText

▸ **_getRightText**(`text`, `size?`): `any`

右寄せのテキスト要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | テキストの内容 |
| `size?` | `string` | `"sm"` | テキストのサイズ（"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたテキスト要素

___

### \_getSeparator

▸ **_getSeparator**(`margin?`): `any`

セパレータ要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `margin?` | `string` | `"sm"` | セパレータのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたセパレータ要素

___

### \_getVerticalBox

▸ **_getVerticalBox**(`contents`, `margin?`, `spacing?`): `any`

縦方向のBox要素を生成する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `contents` | `any`[] | `undefined` | Box要素内のコンテンツ |
| `margin?` | `string` | `"none"` | Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |
| `spacing?` | `string` | `"none"` | Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"） |

#### Returns

`any`

生成されたBox要素

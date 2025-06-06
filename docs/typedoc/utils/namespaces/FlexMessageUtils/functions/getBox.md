[**au-pay-manager**](../../../../README.md)

***

[au-pay-manager](../../../../README.md) / [utils](../../../README.md) / [FlexMessageUtils](../README.md) / \_getBox

# Function: \_getBox()

> **\_getBox**(`contents`, `layout?`, `margin?`, `spacing?`): [`flexMessageBox`](../../../../interfaces/interfaces/flexMessageBox.md)

Box要素を生成する

## Parameters

### contents

[`flexMessageContent`](../../../../interfaces/interfaces/flexMessageContent.md)[]

Box要素内のコンテンツ

### layout?

`string` = `"vertical"`

Boxのレイアウト（"vertical"または"horizontal"）

### margin?

`string` = `"none"`

Boxのマージン（"none"、"xs"、"sm"、"md"、"lg"、"xl"）

### spacing?

`string` = `"none"`

Boxのスペーシング（"none"、"xs"、"sm"、"md"、"lg"、"xl"）

## Returns

[`flexMessageBox`](../../../../interfaces/interfaces/flexMessageBox.md)

生成されたBox要素

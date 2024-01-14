[au-pay-manager](../README.md) / [utils](utils.md) / CreditCardUtils

# Namespace: CreditCardUtils

[utils](utils.md).CreditCardUtils

クレジットカード関連のユーティリティクラス

## Table of contents

### Functions

- [calculateImportantDate](utils.CreditCardUtils.md#calculateimportantdate)

## Functions

### calculateImportantDate

▸ **calculateImportantDate**(`usageDate`): `Object`

クレジットカードの重要な日付を計算する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usageDate` | `Date` | 利用日 |

#### Returns

`Object`

支払日と締め日のオブジェクト

| Name | Type |
| :------ | :------ |
| `closingDate` | `Date` |
| `paymentDate` | `Date` |

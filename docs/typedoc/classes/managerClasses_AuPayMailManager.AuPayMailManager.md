[au-pay-manager](../README.md) / [managerClasses/AuPayMailManager](../modules/managerClasses_AuPayMailManager.md) / AuPayMailManager

# Class: AuPayMailManager

[managerClasses/AuPayMailManager](../modules/managerClasses_AuPayMailManager.md).AuPayMailManager

AuPay使用履歴メールからの情報抽出処理を管理するマネージャクラス

**`Author`**

catdance124

## Table of contents

### Constructors

- [constructor](managerClasses_AuPayMailManager.AuPayMailManager.md#constructor)

### Properties

- [\_config](managerClasses_AuPayMailManager.AuPayMailManager.md#_config)
- [\_creditCardPaymentMail](managerClasses_AuPayMailManager.AuPayMailManager.md#_creditcardpaymentmail)
- [\_creditCardUsageDetailMail](managerClasses_AuPayMailManager.AuPayMailManager.md#_creditcardusagedetailmail)
- [\_creditCardUsageMail](managerClasses_AuPayMailManager.AuPayMailManager.md#_creditcardusagemail)
- [\_flexMessageManager](managerClasses_AuPayMailManager.AuPayMailManager.md#_flexmessagemanager)
- [\_lineManager](managerClasses_AuPayMailManager.AuPayMailManager.md#_linemanager)
- [\_logDebugSheet](managerClasses_AuPayMailManager.AuPayMailManager.md#_logdebugsheet)
- [\_mailObjects](managerClasses_AuPayMailManager.AuPayMailManager.md#_mailobjects)
- [\_qrPayChargeMail](managerClasses_AuPayMailManager.AuPayMailManager.md#_qrpaychargemail)
- [\_qrPayUsageMail](managerClasses_AuPayMailManager.AuPayMailManager.md#_qrpayusagemail)

### Methods

- [\_executeUnprocessedMails](managerClasses_AuPayMailManager.AuPayMailManager.md#_executeunprocessedmails)
- [\_processMail](managerClasses_AuPayMailManager.AuPayMailManager.md#_processmail)
- [\_searchMails](managerClasses_AuPayMailManager.AuPayMailManager.md#_searchmails)
- [executeAllMails](managerClasses_AuPayMailManager.AuPayMailManager.md#executeallmails)
- [executeCreditCardUsageDetailsMails](managerClasses_AuPayMailManager.AuPayMailManager.md#executecreditcardusagedetailsmails)
- [executeCreditCardUsageMails](managerClasses_AuPayMailManager.AuPayMailManager.md#executecreditcardusagemails)

## Constructors

### constructor

• **new AuPayMailManager**(): [`AuPayMailManager`](managerClasses_AuPayMailManager.AuPayMailManager.md)

コンストラクタ

#### Returns

[`AuPayMailManager`](managerClasses_AuPayMailManager.AuPayMailManager.md)

## Properties

### \_config

• `Private` **\_config**: [`Config`](config.Config.md)

設定オブジェクト

___

### \_creditCardPaymentMail

• `Private` **\_creditCardPaymentMail**: [`CreditCardPaymentMail`](mailClasses_CreditCardPaymentMail.CreditCardPaymentMail.md)

クレジットカード支払いメールオブジェクト

___

### \_creditCardUsageDetailMail

• `Private` **\_creditCardUsageDetailMail**: [`CreditCardUsageDetailMail`](mailClasses_CreditCardUsageDetailMail.CreditCardUsageDetailMail.md)

クレジットカード利用詳細メールオブジェクト

___

### \_creditCardUsageMail

• `Private` **\_creditCardUsageMail**: [`CreditCardUsageMail`](mailClasses_CreditCardUsageMail.CreditCardUsageMail.md)

クレジットカード利用メールオブジェクト

___

### \_flexMessageManager

• `Private` **\_flexMessageManager**: [`FlexMessageManager`](managerClasses_FlexMessageManager.FlexMessageManager.md)

Flex Messageマネージャオブジェクト

___

### \_lineManager

• `Private` **\_lineManager**: [`LineManager`](managerClasses_LineManager.LineManager.md)

LINEマネージャオブジェクト

___

### \_logDebugSheet

• `Private` **\_logDebugSheet**: [`LogDebugSheet`](sheetClasses_LogDebugSheet.LogDebugSheet.md)

デバッグログシートオブジェクト

___

### \_mailObjects

• `Private` **\_mailObjects**: \{ `createFlexMessage`: (`arg`: `any`) => `any` ; `mail`: [`Mail`](mailClasses__Mail.Mail.md)  }[]

- メールオブジェクトの配列

___

### \_qrPayChargeMail

• `Private` **\_qrPayChargeMail**: [`QrPayChargeMail`](mailClasses_QrPayChargeMail.QrPayChargeMail.md)

QRコード支払い完了メールオブジェクト

___

### \_qrPayUsageMail

• `Private` **\_qrPayUsageMail**: [`QrPayUsageMail`](mailClasses_QrPayUsageMail.QrPayUsageMail.md)

QRコード利用メールオブジェクト

## Methods

### \_executeUnprocessedMails

▸ **_executeUnprocessedMails**(`mails`): `void`

与えられたメールのうち未処理のものを処理する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mails` | `GmailMessage`[] | メールリスト |

#### Returns

`void`

___

### \_processMail

▸ **_processMail**(`mail`): `void`

メールを処理する

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mail` | `GmailMessage` | 処理するメール |

#### Returns

`void`

___

### \_searchMails

▸ **_searchMails**(`searchText`, `maxThreadCount?`): `GmailMessage`[]

メールを検索する

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchText` | `string` | `undefined` | 検索するテキスト |
| `maxThreadCount` | `number` | `10` | 検索するスレッドの最大数 |

#### Returns

`GmailMessage`[]

- 古い順にソートされた検索結果のメール

___

### executeAllMails

▸ **executeAllMails**(): `void`

本スクリプトで対象とするすべてのメールを検索し処理する

#### Returns

`void`

___

### executeCreditCardUsageDetailsMails

▸ **executeCreditCardUsageDetailsMails**(): `void`

詳細メールのみを検索し処理する

#### Returns

`void`

___

### executeCreditCardUsageMails

▸ **executeCreditCardUsageMails**(): `void`

速報メールのみを検索し処理する

#### Returns

`void`

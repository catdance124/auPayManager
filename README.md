# auPayManager

生活費を `auPayクレジットカード` / `auPay` で決済するにあたって、Google スプレッドシートに利用履歴を記録し、逐次 LINE で通知するツール。

---

# 本システムについて

-   [auPAY カード/auPAY の決済情報を Google スプレッドシートに記録し、LINE に通知するツールを作成しました【GAS】](https://zenn.dev/catdance124/articles/au-pay-manager-introduction)

# 使い方

-   [ユーザーマニュアル](https://zenn.dev/catdance124/books/au-pay-manager-development/viewer/user_manual)
-   [利用のためのセットアップ](https://zenn.dev/catdance124/articles/au-pay-manager-introduction#%E5%88%A9%E7%94%A8%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97)

# 開発者向け

-   [GAS で本格的に開発するために考えたこと](https://zenn.dev/catdance124/books/au-pay-manager-development)

## ローカルから指定環境へ手動デプロイ

```sh
$ pwd
~/auPayManager

$ npm install

$ vi .env
$ cat .env
TARGET_DEPLOYMENT_ID=******************
TARGET_SCRIPT_ID=******************

$ ./deployment/deploy_local.sh
~/auPayManager
└─ public/appsscript.json
└─ public/main.js
Pushed 2 files.
Created version 600.
- ************ @600.
```

# ドキュメント

-   [typeDoc](https://catdance124.github.io/auPayManager/typedoc/)

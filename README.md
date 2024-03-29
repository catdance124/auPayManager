# auPayManager

生活費を `auPayクレジットカード` / `auPay` で決済するにあたって、Google スプレッドシートに利用履歴を記録し、逐次 LINE で通知するツール。

<img src="/docs/assets/overview.png" width="700">

## 本システムについて

-   紹介記事

    -   [auPAY カード/auPAY の決済情報を Google スプレッドシートに記録し、LINE に通知するツールを作成しました【GAS】](https://zenn.dev/catdance124/articles/au-pay-manager-introduction)

-   使い方
    -   [利用のためのセットアップ](https://zenn.dev/catdance124/articles/au-pay-manager-introduction#%E5%88%A9%E7%94%A8%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97)
    -   [ユーザーマニュアル](https://zenn.dev/catdance124/books/au-pay-manager-development/viewer/user_manual)

## 開発者向け

-   解説記事
    -   [GAS で本格的に開発するために考えたこと](https://zenn.dev/catdance124/books/au-pay-manager-development)
-   ドキュメント
    -   [typeDoc](https://catdance124.github.io/auPayManager/typedoc/)

### ローカルから指定環境へ手動デプロイ

インストール&テスト

```sh
$ git clone git@github.com:catdance124/auPayManager.git ~/auPayManager

$ pwd
~/auPayManager

# 依存パッケージをインストール
$ npm install

# テストを実行
$ npm run test
```

デプロイ

```sh
# デプロイするアカウントでログイン（~/.clasprc.json を作成）
$ clasp login

# デプロイ用の環境変数を準備
$ vi .env
$ cat .env
DEPLOYMENT_ID=******************
SCRIPT_ID=******************
ENV_NAME=Develop

# ビルド&デプロイ
$ npm run deploy
└─ public/appsscript.json
└─ public/main.js
Pushed 2 files.
Created version 600.
- ************ @600.
```

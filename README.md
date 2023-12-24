・プロジェクトフォルダー（まっちゃんからもらったやつ）をローカルに解凍。

・vscode、「フォルダを開く」から該当フォルダを開く、
「表示＞ターミナル」を開き、該当フォルダの階層にいることを確認（例：C:\ユーザー名とか\login-application>）

・gitのアドレス・ユーザー名をconfig追加
---
$ git config --global user.email "アドレス"
$ git config --global user.name "ユーザー名"
---

・クローンする
$ git clone コピーしたURL
例：git clone https://github.com/MatsudaHiroyoshiXX/login_application.git

URLコピーの場所は、
＞MatsudaHiroyoshiXX/login_application（git hubの画面）
＞「<>code」タブ
＞「<>code」（緑ボタン）
＞localのHTTPSからURLコピー



gitつながった後、

・ローカル環境立ち上げ
npm install
npm run build
npm start
ブラウザが立ち上がり、ログイン画面が出ればOK
（npm startで開始、終了するときは「Ctrl + c」、Y/Nでたら「y + enter」）

環境ができたあとの作業の流れはコンフルエンスの「ざき用」を参照（ブランチ運用手順）

# Name（リポジトリ/プロジェクト/OSSなどの名前）

分かりやすくてカッコイイ名前をつける（今回は"hoge"という名前をつける）

"hoge"が何かを簡潔に紹介する

# DEMO

"hoge"の魅力が直感的に伝えわるデモ動画や図解を載せる

# Features

"hoge"のセールスポイントや差別化などを説明する

# Requirement

"hoge"を動かすのに必要なライブラリなどを列挙する

* huga 3.5.2
* hogehuga 1.0.2

# Installation

Requirementで列挙したライブラリなどのインストール方法を説明する

```bash
pip install huga_package
```

# Usage

DEMOの実行方法など、"hoge"の基本的な使い方を説明する

```bash
git clone https://github.com/hoge/~
cd examples
python demo.py
```

# Note

注意点などがあれば書く

# Author

作成情報を列挙する

* 作成者
* 所属
* E-mail

# License
ライセンスを明示する

"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

社内向けなら社外秘であることを明示してる

"hoge" is Confidential.

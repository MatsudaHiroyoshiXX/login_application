# SetUp
プロジェクトフォルダー（まっちゃんからもらったやつ）をローカルに解凍。

vscode、「フォルダを開く」から該当フォルダを開く、

「表示＞ターミナル」を開き、該当フォルダの階層にいることを確認（例：C:\ユーザー名とか\login-application>）

### gitのアドレス・ユーザー名をconfig追加
```
$ git config --global user.email "アドレス"
$ git config --global user.name "ユーザー名"
```

### クローンする
```
$ git clone コピーしたURL
```
例：git clone https://github.com/MatsudaHiroyoshiXX/login_application.git

URLコピーの場所は、

＞MatsudaHiroyoshiXX/login_application（git hubの画面）
＞「<>code」タブ
＞「<>code」（緑ボタン）
＞localのHTTPSからURLコピー

gitつながった後、

### ローカル環境立ち上げ
```
npm install
npm run build
npm start
```

ブラウザが立ち上がり、ログイン画面が出ればOK

（npm startで開始、終了するときは「Ctrl + c」、Y/Nでたら「y + enter」）

環境ができたあとの作業の流れはコンフルエンスの「ざき用」を参照（ブランチ運用手順）

# Branch操作
# その他

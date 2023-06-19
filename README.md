# REST-APIを作ってみる（Node.js + Express編）
https://bunsugi.com/rest-api-node-express-2 の写経

## まず初期化
```
$ npm init -y
```

## expressのインストール
```
$ npm install express
```

## ESLintのインストール
Node.jsでは基本的にCommonJS形式でインポートする。
```
$ npm install eslint --save-dev 
$ npm init @eslint/config

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes ※Noを選択
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
Successfully created .eslintrc.js file in /home/bunta/workspace/api-node/restful-api-node
```

## ExpressでHTTPサーバーを作り、APIを用意する
```
$ touch index.js
```
ポート3000で待ち受けるHTTPサーバを構築。 GETメソッドで呼び出されると、ステータスコード200で"Hello World"を返却するAPIを準備する。

## 動作確認する
コンソールで以下を入力すると、Nodeプログラムが実行される。
```
$ node index.js
```
Example app listening on port 3000!

⇒WebブラウザやHTTPリクエストツールでAPIをたたいてみる。
応答が返却されたことを確認する。

## パスパラメータに応じてJSONデータを返却するAPI
APIを実践に近づける。
メンバーのリストを紹介できるAPIとする。

【仕様】
・パスパラメータ無しでアクセスされた場合、全メンバーの情報リストを返却する。
・パスパラメータがにメンバーIDを入れた場合、該当するメンバーIDの情報を返却する。

【結果】
```
http://localhost:3000/members
[{"id":"1","name":"Taro","team":"A"},{"id":"2","name":"Jiro","team":"B"},{"id":"3","name":"Saburo","team":"A"}]


http://localhost:3000/members/2
[{"id":"2","name":"Jiro","team":"B"}]
```
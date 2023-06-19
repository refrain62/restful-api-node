const express = require('express')
const app = express()
const port = 3000;

// 簡易的にデータを定義
const members = [{
    id: "1",
    name: "Taro",
    team: "A"
}, {
    id: "2",
    name: "Jiro",
    team: "B"
}, {
    id: "3",
    name: "Saburo",
    team: "A"
}]

// レスポンスを返すサンプル実装
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
});

//  パスパラメータを設定しない場合は全メンバーの情報取得 localhost:3000/member
app.get('/members', (req, res) => {
    res.status(200).send(members)
});

// パスパラメータを設定する場合 localhost:3000/member/1
app.get('/members/:id', (req, res) => {
    const id = req.params.id;
    const member = members.filter((member) => member.id === id)
    res.status(200).send(member)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

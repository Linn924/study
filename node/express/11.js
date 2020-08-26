// Express路由参数
// post方式获取传递的参数

const express = require('express');
const { readSync } = require('fs');

const app = express()

app.get('/index/:id', (req, res) => { 
    res.send(req.params) // {id: 123} 
});

// localhost:3000/index/123  客户端输入的网址


app.listen(3000)
console.log('服务器启动成功')
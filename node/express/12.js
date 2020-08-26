// 静态资源处理

const express = require('express');
const path = require('path')
const app = express()

const finalpath = path.join(__dirname,'public')

//实现静态资源访问功能
// app.use('/static',express.static(finalpath)) http://127.0.0.1:3000/static/default.html
app.use(express.static(finalpath)) // http://127.0.0.1:3000/default.html


app.listen(3000)
console.log('服务器启动成功')
const express = require('express')
const path = require('path')
const formidable = require('formidable')
const app = express()
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))


// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');
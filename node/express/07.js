// 构建模块化路由的基础代码


const express = require('express')

const app = express()
const home = express.Router()

home.get('/index',(req,res,next) => {
    res.send('欢迎来到博客首页页面')
})

app.use('/home',home)
app.listen(3000)
console.log('服务器启动成功')
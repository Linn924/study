// get方式获取传递的参数 req.query

const express = require('express')

const app = express()

app.get('/index',(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})

app.listen(3000)
console.log('服务器启动成功')
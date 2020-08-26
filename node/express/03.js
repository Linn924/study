// app.use()


const express = require('express')
const app = express()

//接收所有中间件
app.use((req,res,next)=>{
    console.log('请求了app.use中间件')
    next()
})

//这种情况是当客户端访问/request请求的时候才能走此中间件
app.use('/request',(req,res,next)=>{
    console.log('请走了/request 请求了app.use中间件')
    next()
})


app.get('/request',(req,res,next)=>{
    req.name = 'linn'//为请求添加一个name属性
    next()
})

app.get('/request',(req,res)=>{
    res.send(req.name)
})

app.listen(3000)
console.log('服务器启动成功')
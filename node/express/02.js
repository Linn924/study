// 中间件

// 可以针对同一个请求设置多个中间件，对同一个请求进行多次处理。
// 默认情况下，请求从上到下依次匹配中间件，一旦匹配成功，终止匹配。
// 可以调用next方法将请求的控制权交给下一个中间件，直到遇到结束请求的中间件。

const express = require('express')
const app = express()

app.get('/request',(req,res,next)=>{
    req.name = 'linn'//为请求添加一个name属性
    next()
})

app.get('/request',(req,res)=>{
    res.send(req.name)
})

app.listen(3000)
console.log('服务器启动成功')
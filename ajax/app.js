const express = require('express') //引入express框架
const path = require('path')//路径处理模块
const app = express()//创建web服务器

app.use(express.static(path.join(__dirname,'public')))//静态资源访问功能

app.get('/first',(req,res)=>{
    res.send('Hello Ajax')
})
app.get('/responseData',(req,res)=>{
    res.send({
        "name":"Linn",
        "age":20
    })
})
app.get('/get',(req,res) => {
    res.send(req.query)
})
app.listen(3000)//监听端口
console.log('服务器启动成功')

const express = require('express') //引入express框架
const path = require('path')//路径处理模块
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()//创建web服务器

app.use(express.static(path.join(__dirname,'public')))//静态资源访问功能
// app.use(bodyParser.urlencoded()) //这种接受的是请求头为application/x-www-form-urlencoded这种的post请求
app.use(bodyParser.json())//这种接收的是json格式的数据

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

app.post('/post',(req,res) => {
    res.send(req.body)
})

app.post('/json',(req,res) => {
    res.send(req.body)
})

app.get('/readyState',(req,res) => {
    res.send('Simon')
})

app.get('/error',(req,res) => {
    res.status(400).send('not ok')
})

app.get('/cache',(req,res) => {
    var address = path.join(__dirname,'test.txt')
    fs.readFile(address,'utf8',(err,result) => {
        if(err == null){
            // console.log(result)
            res.send(result)
        }
    })
})

app.listen(3000)//监听端口
console.log('服务器启动成功')

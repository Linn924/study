// post方式获取传递的参数

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//拦截所有请求
//extended:false 方法内部使用querystring模块处理请求参数的格式
//extended:true 方法内部使用qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/add',(req,res)=>{
    //接收post请求参数
    res.send(req.body)
})

app.listen(3000)
console.log('服务器启动成功')
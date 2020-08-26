// 框架入门


const express = require('express')//引入express框架
const app = express()//创建网站服务器


app.get('/',(req,res)=>{
    //send() 方法内部自动检测响应内容的类型；方法会自动设置http状态码；自动设置响应的内容类型及编码
    res.send('hello express')
})

app.get('/list',(req,res)=>{
    
    res.send({name:'linn',age:20})
})



app.listen(3000)
console.log('服务器启动成功')
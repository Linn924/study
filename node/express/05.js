// 错误处理中间件

const express = require('express')
const fs = require('fs')
const app = express()

app.get('/index',(req,res,next)=>{
    // throw new Error('程序发生了未知错误')
    // res.send('程序正常执行')

    fs.readFile('./1.txt','utf8',(err,request)=>{
        if(err != null){
            next(err)
        }else{
            res.send(request)
        }
    })
})


// 错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})

app.listen(3000)
console.log('服务器启动成功')
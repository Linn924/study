// 异步函数捕获错误

const express = require('express')
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)


const app = express()

app.get('/index',async (req,res,next)=>{
    try {
        await readFile('./1.txt','utf8')
    } catch (error) {
        next(error)
    }
})


app.listen(3000)
console.log('服务器启动成功')
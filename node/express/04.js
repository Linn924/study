// 中间件应用


const express = require('express')
const app = express()

// app.use((req,res,next)=>{
//     res.send('网站正在维护中')
// })

app.use('/admin',(req,res,next)=>{

    //用户没有登录
    let isLogin = false
    if(isLogin){
        next()//用户登录了 放行
    }else{
        res.send('请登录')
    }
})

app.get('/admin',(req,res)=>{
    res.send('您已经登录 可以访问当前页面')
})

app.use((req,res,next)=>{
    res.status(404)
    res.send('当前访问的页面不存在')
})

app.listen(3000)
console.log('服务器启动成功')
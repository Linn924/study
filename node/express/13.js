//express-art-template模板引擎
//npm install art-template express-art-template

const express = require('express')
const path = require('path')
const app = express()


//告诉express框架使用什么模板引擎渲染什么后缀的模板文件 参数一：模板后缀 参数二：模板引擎
app.engine('art',require('express-art-template'))
//告诉express框架模板存放在的位置是什么
app.set('views',path.join(__dirname,'views'))
//告诉express框架模板的默认后缀是什么
app.set('view engine','art')


app.get('/index',(req,res)=>{
    //拼接好了模板路径；凭借模板后缀；哪一个模板和哪一个数据进行拼接；将凭借结果响应给了客户端
    res.render('index',{
        msg:'message'
    })
})

app.get('/list',(req,res)=>{
    res.render('list',{
        msg:'list page'
    })
})

app.listen(3000)
console.log('服务器启动成功')
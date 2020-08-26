//express-art-template模板引擎
//npm install art-template express-art-template

const express = require('express')
const path = require('path')
const app = express()


//模板配置
app.engine('art',require('express-art-template'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','art')

app.locals.users = [{
    name: '张三',
    age: 20
},{
    name: '李四',
    age: 20
}]


app.get('/index',(req,res)=>{
    //拼接好了模板路径；凭借模板后缀；哪一个模板和哪一个数据进行拼接；将凭借结果响应给了客户端
    res.render('index',{
        msg:'首页'
    })
})

app.get('/list',(req,res)=>{
    res.render('list',{
        msg:'列表页'
    })
})

app.listen(3000)
console.log('服务器启动成功')
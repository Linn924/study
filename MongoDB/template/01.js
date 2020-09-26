//引入模板引擎
const template = require('art-template')
const path = require('path')



const views = path.join(__dirname,'views','01.art')

// 返回拼接好的字符串
const html = template(views,{
    name:'simon',
    age:20,
    content: '<h1>我是标题</h1>'
})

console.log(html)
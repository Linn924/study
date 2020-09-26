//引入模板引擎
const template = require('art-template')
const path = require('path')


// template 方法 拼接字符串
// 参数一:模板路径 绝对路径
// 参数二:要在模板中显示的数据

const views = path.join(__dirname,'views','index.art')

// 返回拼接好的字符串
const html = template(views,{
    name:'simon',
    age:20
})

console.log(html)
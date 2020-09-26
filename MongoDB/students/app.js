(async function run (){
    const koa = require('koa2')
    const Body = require("koa-body")
    const Static = require("koa-static-cache") 
    const template = require('art-template')
    const path = require('path')
    const dateformat = require('dateformat')
    require('./model/mongodb.js')

    //配置模板的根路径
    template.defaults.root = path.join(__dirname,'views')
    //引入方法
    template.defaults.imports.dateformat = dateformat
    //创建虚拟服务器
    const app = new koa()
    app.use(Body())
    //加载静态资源
    app.use(Static("./static", { 
        prefix: "/static",
        gzip: true,
    }))


    const student = require('./router/student.js')
    //挂载路由
    app.use(student.routes()) 
    //监听端口
    app.listen(80,() => [
        console.log('Running')
    ])

})()
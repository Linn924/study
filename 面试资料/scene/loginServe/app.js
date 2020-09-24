(async function run(){

    const Koa = require('koa2')
    const Static = require('koa-static-cache')
    const Router = require('koa-router')
    const cors = require('koa2-cors')
    const koaBody = require('koa-body')
    const Mysql = require('promise-mysql2')

    const app = new Koa()
    const router = new Router()

    app.use(koaBody())
    app.use(cors())
    

    
    //加载静态资源
    app.use(Static('./static', {
        prefix: '/static',
        gzip: true
    }))

    var user = {
        username:'simon',
        password:'123'
    }


    // app.use(async ctx => {
    //         ctx.cookies.set(
    //             'uname',user.username,{
    //                 domain:'localhost', // 写cookie所在的域名
    //                 maxAge:1000*60*60*24,   // cookie有效时长
    //                 expires:new Date('2020-9-25'), // cookie失效时间
    //                 httpOnly:false,  // 是否只用于http请求中获取
    //                 overwrite:false  // 是否允许重写
    //             }
    //         )
    //         ctx.body = 'cookie is ok'
    // })

    router.get('/login', ctx => {
        ctx.cookies.set(
            'uname',user.username,{
                domain:'localhost', // 写cookie所在的域名
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2020-9-25'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        )
        ctx.body = {
            message:'123'
        }
    })


    
    app.use(router.routes())

    app.listen(3000, () => {
        console.log('Running')
    })

})()
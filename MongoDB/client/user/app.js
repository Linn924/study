(async function run (){
    const koa = require('koa2')
    const mongoose = require('mongoose')
    const Router = require("koa-router")
    const Body = require("koa-body")



    const app = new koa()
    const router = new Router()













    app.use(router.routes()) 

    app.listen(3000,() => [
        console.log('Running')
    ])

})()
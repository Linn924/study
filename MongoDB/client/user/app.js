(async function run (){
    const koa = require('koa2')
    const Router = require("koa-router")
    const Body = require("koa-body")
    require('./model/mongodb.js')
    const User = require('./model/user.js')

    const app = new koa()
    app.use(Body())
    const router = new Router()

    
    //list界面
    router.get('/list',async ctx => {
        //获取用户集合所有文档
        let userList = await User.find()
        //HTML字符串
        var list = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
        `
        userList.forEach(item => {
            list += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>      
            `
            item.hobbies.forEach(item => {
                list += `
                    <span>${item}</span>
                `
            })
            list += `
                    </td>
                    <td>${item.email}</td>
                    <td>
                        <a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                        <a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
                    </td>
                </tr>
            `
        })
        list += `
                </table>
                </div>
            </body>
            </html>
        `
        ctx.body = list
        
    })

    //add界面
    router.get('/add',async ctx => {
        var add = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>用户列表</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container">
                <h3>添加用户</h3>
                <form method="post" action="/add">
                  <div class="form-group">
                    <label>用户名</label>
                    <input name="name" type="text" class="form-control" placeholder="请填写用户名">
                  </div>
                  <div class="form-group">
                    <label>密码</label>
                    <input name="password" type="password" class="form-control" placeholder="请输入密码">
                  </div>
                  <div class="form-group">
                    <label>年龄</label>
                    <input name="age" type="text" class="form-control" placeholder="请填写邮箱">
                  </div>
                  <div class="form-group">
                    <label>邮箱</label>
                    <input name="email" type="email" class="form-control" placeholder="请填写邮箱">
                  </div>
                  <div class="form-group">
                    <label>请选择爱好</label>
                    <div>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="足球" name="hobbies"> 足球
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="篮球" name="hobbies"> 篮球
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="敲代码" name="hobbies"> 敲代码
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="抽烟" name="hobbies"> 抽烟
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="喝酒" name="hobbies"> 喝酒
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" value="烫头" name="hobbies"> 烫头
                        </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">添加用户</button>
                </form>
            </div>
        </body>
        </html>
        `
        ctx.body = add
    })
    
    //添加用户数据
    router.post('/add',async ctx => {
        var data = ctx.request.body
        await User.create(data)
        //重定向
        ctx.response.redirect('/list');
    })
    
    //更新数据界面
    router.get('/modify',async ctx => {
        const id = ctx.request.query.id
        let user = await User.findOne({_id:id})
        let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆']
        var modify = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>用户列表</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container">
                <h3>修改用户</h3>
                <form method="post" action="/modify?id=${id}">
                  <div class="form-group">
                    <label>用户名</label>
                    <input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
                  </div>
                  <div class="form-group">
                    <label>密码</label>
                    <input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                  </div>
                  <div class="form-group">
                    <label>年龄</label>
                    <input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写邮箱">
                  </div>
                  <div class="form-group">
                    <label>邮箱</label>
                    <input value="${user.email}" name="email" type="email" class="form-control" placeholder="请填写邮箱">
                  </div>
                  <div class="form-group">
                    <label>请选择爱好</label>
                    <div>         
        `

        hobbies.forEach(item => {
            //判断当前循环项在不在用户的爱好数据组
            let isHobby = user.hobbies.includes(item)
            if(isHobby){
                modify += `
                    <label class="checkbox-inline">
                        <input checked type="checkbox" value="${item}" name="hobbies"> ${item}
                    </label>
                `
            }else{
                modify += `
                    <label class="checkbox-inline">
                        <input type="checkbox" value="${item}" name="hobbies"> ${item}
                    </label>
                `
            }
        })

        modify += `
                </div>
                </div>
                <button type="submit" class="btn btn-primary">修改用户</button>
            </form>
        </div>
        </body>
        </html>
        `

        ctx.body = modify
    })
    
    //修改用户数据
    router.post('/modify',async ctx => {
        //混合获取数据
        var id = ctx.request.query.id
        var data = ctx.request.body
        await User.updateOne({_id:id},data)
        //重定向
        ctx.response.redirect('/list');
    })

    router.get('/remove',async ctx => {
        var id = ctx.request.query.id
        await User.findOneAndDelete({_id:id})
        ctx.response.redirect('/list');
    })


    app.use(router.routes()) 

    app.listen(3000,() => [
        console.log('Running')
    ])

})()
//用于创建网站服务器的系统模块
const http = require('http')
//app就是网站服务器对象
const app = http.createServer()
//用来处理post请求的参数
const querystring = require('querystring')
//当客户端有请求的时候
app.on('request',(req,res)=>{
    //post 参数是通过事件的方式接收的
    //data 当请求参数传递的时候触发data事件
    //end 当参数传递完成的时候触发end事件

    let postParams = ''
    req.on('data',params=>{
        postParams += params
    })
    req.on('end',()=>{
        let obj = querystring.parse(postParams)
        console.log(obj)
    })

    res.end('ok')
})

//监听端口
app.listen(3000)
console.log('服务器启动成功')

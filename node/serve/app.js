//用于创建网站服务器的系统模块
const http = require('http')
//此模块用于处理URL地址
const url = require('url')

//app就是网站服务器对象
const app = http.createServer()

//当客户端有请求的时候
app.on('request',(req,res)=>{

    //req.method 获取请求方式
    // console.log(req.method)

    // if(req.method == 'POST'){
    //     res.end('POST')
    // }else if(req.method == 'GET'){
    //     res.end("GET")
    // }

    //http状态码
    res.writeHead(200,{
        'content-type':'text/plain;charset=utf8'
    })

    //req.url 获取请求地址
    // console.log(req.url)
    // url.parse(req.url,true).query 处理请求的地址
    let {query,pathname} = url.parse(req.url,true)
    console.log(query)

    if(pathname == '/index' || pathname == '/'){
        res.end('index页面')
    }else if(pathname == '/list'){
        res.end("list页面")
    }else{
        res.end('mot found')
    }

    //req.headers 获取请求报文信息
    // console.log(req.headers)

    
})

//监听端口
app.listen(3000)
console.log('服务器启动成功')

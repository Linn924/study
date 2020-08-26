//用于创建网站服务器的系统模块
const http = require('http')
//此模块用于处理URL地址
const url = require('url')
//app就是网站服务器对象
const app = http.createServer()

//当客户端有请求的时候
app.on('request',(req,res)=>{

    //获取请求方式
    const method = req.method.toLowerCase()//转换成小写
    //获取请求地址
    const pathname = url.parse(req.url,true).pathname

    res.writeHead(200,{
        'content-type':'text/html;charset=utf8'
    })

    if(method == 'get'){
        if(pathname == '/' || pathname == '/index'){
            res.end('欢迎来到首页')
        }else if(pathname == '/list'){
            res.end('欢迎来到列表页')
        }else{
            res.end('404')
        }
    }else if(method == 'post'){

    }

    
})

//监听端口
app.listen(3000)
console.log('服务器启动成功')

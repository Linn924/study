const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
//处理发送的请求是读取什么类型的文件（html,css,js等）
const mime = require('mime')

const app = http.createServer()

//当客户端有请求的时候
app.on('request',(req,res)=>{

    //获取用户的请求路径
    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? '/default.html' : pathname
    //将用户请求的路径转换成实际服务器硬盘路径
    let finalpath = path.join(__dirname,'public',pathname)
    //根据路径返回文件的类型
    let filetype = mime.getType(finalpath)

    //读取文件
    fs.readFile(finalpath,(error,result)=>{
        //文件读取失败
        if(error != null){
            res.writeHead(404,{'content-type':'text/html;charset=utf8'})
            res.end('文件读取失败')
            return
        }
        // res.writeHead(200,{'content-type':`${filetype};charset=utf8`})
        res.writeHead(200,{'content-type':filetype})
        res.end(result)
    })

})

//监听端口
app.listen(3000)
console.log('服务器启动成功')

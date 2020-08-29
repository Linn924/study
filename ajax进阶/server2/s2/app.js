const express = require('express')
const path = require('path')
const formidable = require('formidable')
const app = express()
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))

// 拦截所有请求
app.use((req, res, next) => {
	// 1.允许哪些客户端访问我
	// * 代表允许所有的客户端访问我
	// 注意：如果跨域请求中涉及到cookie信息传递，值不可以为*号 比如是具体的域名信息
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	// 2.允许客户端使用哪些请求方法访问我
	res.header('Access-Control-Allow-Methods', 'get,post')
	// 允许客户端发送跨域请求时携带cookie信息
	res.header('Access-Control-Allow-Credentials', true)
	next()
})

app.get('/test', (req, res) => {
	const result = 'fn({name: "张三"})';
	res.send(result);
})

app.get('/better', (req, res) => {
	// 接收客户端传递过来的函数的名称
	// const fnName = req.query.callback
	// 将函数名称对应的函数调用代码返回给客户端
	// const data = JSON.stringify({name: "张三"})
	//拼接成fn({name:"张三"})
	// const result = fnName + '('+ data +')'
	// setTimeout(() => {
	// 	res.send(result)
	// }, 1000)
	//代替上述代码
	res.jsonp({name: 'Linn', age: 20})
})

app.get('/cross', (req, res) => {
	res.send('ok')
})



// 监听端口
app.listen(3001);
// 控制台提示输出
console.log('服务器启动成功');
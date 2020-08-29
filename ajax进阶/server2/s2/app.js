const express = require('express')
const path = require('path')
const formidable = require('formidable')
const app = express()
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))


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

// 监听端口
app.listen(3001);
// 控制台提示输出
console.log('服务器启动成功');
const express = require('express')
const path = require('path')
const formidable = require('formidable')
//向其他服务器端请求数据的模块
const request = require('request')
const app = express()
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))

app.get('/server', (req, res) => {
	request('http://localhost:3001/cross', (err, response, body) => {
		res.send(body)
	})
})

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');
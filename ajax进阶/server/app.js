const express = require('express')
const path = require('path')

const app = express()
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));


// 邮箱地址验证
app.get('/checkEmailAdress', (req, res) => {
    // 接收客户端传递过来的邮箱地址
    console.log(req.query)
	const email = req.query.email;
	// 判断邮箱地址注册过的情况
	if (email == '193265261@qq.com') {
		// 设置http状态码并对客户端做出响应
		res.status(400).send({message: '邮箱地址已经注册过了, 请更换其他邮箱地址'});
	} else {
		// 邮箱地址可用的情况
		// 对客户端做出响应
		res.send({message: '恭喜, 邮箱地址可用'});
	} 
});


// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');
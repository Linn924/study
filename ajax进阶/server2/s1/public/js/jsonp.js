const jsonp = (options) => {
	//动态创建script标签
	var script = document.createElement('script')
	//拼接字符串的变量
	var params = ''
	for(var attr in options.data){
		params += '&' + attr + '=' + options.data[attr]
	}
	//回调函数的命名
	var fnName ='Jsonp' + Math.random().toString().replace('.','')
	//在全局新创建一个属性 success函数赋值给此属性
	window[fnName] = options.success
	//为script标签的属性src赋值
	script.src = options.url + '?callback=' + fnName + params
	//将srcript标签追加到页面中
	document.body.appendChild(script)
	//为script标签添加onload事件
	script.onload = () => {
		//将body中的script标签删除
		document.body.removeChild(script)
	}
}
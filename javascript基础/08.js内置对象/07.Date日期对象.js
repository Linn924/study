// Date() 日期对象  是一个构造函数 必须使用new 来调用创建我们的日期对象

var time = new Date();
console.log(time)

// 2. 参数常用的写法  数字型  2019, 10, 01  或者是 字符串型 '2019-10-1 8:8:8'
var date = new Date(2020, 4, 2);
console.log(date); // 返回的是 5月 不是 4月 
var date1 = new Date('2020-4-2 8:8:8');
console.log(date1);
//  函数的定义方式

// 自定义函数(命名函数) 

function fn() {};

// 函数表达式 (匿名函数)

var fun = function() {};


// 利用 new Function('参数1','参数2', '函数体');

var f = new Function('a', 'b', 'console.log(a + b)');
f(1, 2);

// 所有函数都是 Function 的实例(对象)
console.dir(f);

// 函数也属于对象
console.log(f instanceof Object);

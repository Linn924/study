// 1问  
console.log(num);//报错


// 2问
console.log(num); // undefined  坑 1
var num = 10;
// 相当于执行了以下代码
// var num; 先把变量声明提到当前作用域(全局作用域)的最前方
// console.log(num);
// num = 10;


// 3问 
fn(); // 11  因为js引擎在预解析的时候会把函数声明提升到当前作用域的最前面
function fn() {
    console.log(11);
}
// 相当于执行了以下代码
// function fn() {
//     console.log(11);
// }
// fn();


// 4问
fun(); // 报错  坑2 
var fun = function () {
    console.log(22);
}


// 函数表达式 调用必须写在函数表达式的下面
// 相当于执行了以下代码
// var fun;
// fun();
// fun = function() {
//      console.log(22);
// }

// 1. 我们js引擎运行js 分为两步：  预解析  代码执行
// (1). 预解析 js引擎会把js 里面所有的 var  还有 function 提升到当前作用域的最前面
// (2). 代码执行  按照代码书写的顺序从上往下执行
// 2. 预解析分为 变量预解析（变量提升） 和 函数预解析（函数提升）
// (1) 变量提升 就是把所有的变量声明提升到当前的作用域最前面  不提升赋值操作
// (2) 函数提升 就是把所有的函数声明提升到当前作用域的最前面  不调用函数
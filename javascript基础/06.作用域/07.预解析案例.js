// 预解析 js引擎会把js 里面所有的 var  还有 function 提升到当前作用域的最前面


// 案例1
// var num = 10;
// fun();

// function fun() {
//     console.log(num);
//     var num = 20;
// }

//相当于执行了以下的代码
// var num;
// function fun() {
//     var num;
//     console.log(num)
//     num = 20;
// }
// num = 10;
// fun();

// 所以结果为:undefined


// // 案例2
// var num = 10;
// function fn() {
//     console.log(num);
//     var num = 20;
//     console.log(num);
// }
// fn();

//相当于执行了以下的代码
// var num;
// function fn() {
//     var num;
//     console.log(num);
//     num = 20;
//     console.log(num);
// }
// num = 10;
// fn();

// 所以结果为:undefined 20


// // 案例3
// var a = 18;
// f1();

// function f1() {
//     var b = 9;
//     console.log(a);
//     console.log(b);
//     var a = '123';
// }

// 相当于以下代码
// var a;
// function f1() {
//     var b;
//     var a;
//     b = 9;
//     console.log(a);
//     console.log(b);
//     a = '123';
// }
// a = 18;
// f1();

// 所以结果为:undefined 9

// 案例4
f1();
console.log(c);
console.log(b);
console.log(a);

function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}

// 相当于以下代码
// function f1() {
//     var a;
//     a = b = c = 9;
//     // 相当于 var  a  = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当 全局变量看
//     // 集体声明  var a = 9, b = 9, c = 9;
//     console.log(a); // 9
//     console.log(b); // 9
//     console.log(c); // 9
// }
// f1();
// console.log(c); // 9
// console.log(b); // 9
// console.log(a); // 由于函数里面的a是局部变量 所以此处未定义全局变量a 报错
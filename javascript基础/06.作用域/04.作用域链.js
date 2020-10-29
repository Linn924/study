 // 作用域链  ： 内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个值 这种结构我们称为作用域链   就近原则
//  var num = 10;

//  function fn() { // 外部函数
//      var num = 20;

//      function fun() { // 内部函数
//          console.log(num);

//      }
//      fun();
//  }
//  fn();

let num = 10

let fn = () => {
     let num = 20
     return () => console.log(num)
 }

fn()() //20
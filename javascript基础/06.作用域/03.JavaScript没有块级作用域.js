 // js中没有块级作用域  js的作用域： 全局作用域  局部作用域  现阶段我们js 没有 块级作用域
 // 我们js 也是在 es6 的时候新增的块级作用域
 // 块级作用域 {}   if {}  for {}
 // java 
 // if(xx) {
 //     int num = 10;
 // }
 // 外面的是不能调用num的
 
 if (3 < 5) {
     var num = 10;
 }
 console.log(num);
# html

[2020前端面试复习资料](https://www.jianshu.com/p/137b525e09ff)

## 1.原型/原型链/构造函数/实例/继承

## 2.有几种方式可以实现继承

## 3.用原型实现继承有什么缺点，怎么解决
```
//定义一个动物类
function Animal(name) {
    this.name = name || 'Animal'
    this.sleep = () =>{
        console.log(this.name + '在睡觉')
    }
}

//在Animal原型上添加eat方法
Animal.prototype.eat = () => {
    console.log(this.name + '吃鱼')
}


/*  
    1.原型链继承
     核心: 将父类的实例作为子类的原型
     特点: 实例是子类的实例，也是父类的实例;父类新增原型方法/原型属性，子类都能访问到;
     缺点: 可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行;
           无法实现多继承;来自原型对象的所有属性被所有实例共享;创建子类实例时，无法向父类构造函数传参
*/


function Cat(){

}

Cat.prototype = new Animal()
Cat.prototype.name = 'Tom'

let cat = new Cat()
console.log(cat.name) //Tom
console.log(cat.eat()) //undefined吃鱼
console.log(cat.sleep()) //Tom在睡觉
console.log(cat instanceof Animal) //true
console.log(cat instanceof Cat); // true
```

## 4.arguments
* [arguments对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
* arguments 是一个对应于传递给函数的参数的类数组对象。
* arguments 对象只能在函数内使用
```
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);


可以使用Array.from()方法或扩展运算符将参数转换为真实数组：
var args = Array.from(arguments)
var args = [...arguments]
```

## 5.判断数据类型的方法
* [判断数据类型的方法](https://www.jianshu.com/p/967d6db70437)
* typeof
* instanceof
* 通过Object下的toString.call()方法来判断
* 根据对象的contructor判断
* jq中判断数据类型的方法

## 6.作用域链、闭包、作用域
* 作用域链：内部函数访问外部函数的变量,采取的是链式查找的方式来决定取那个值 这种结构我们称为作用域链(就近原则)
* 闭包：指有权访问另一个函数作用域中变量的函数 延伸了变量的作用范围
* 作用域：全局作用域与局部作用域 

## 7.Ajax的原生写法
```
//get方式
const xhr = new XMLHttpRequest()//创建ajax对象
xhr.open('get','http://localhost:3000/first')
xhr.send()//发送请求
xhr.onload = function (){console.log(xhr.responseText)//得到数据}

//post方式
var data = `username=simon&password=123`
xhr.open('post','http://localhost:3000/post')
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')//设置请求参数格式的类型（post请求必须要设置）
xhr.send(data)//发送请求
xhr.onload = function (){
    console.log(xhr.responseText)
}

//post方式(传递json对象数据格式)
const xhr = new XMLHttpRequest()
var data = {name:'Linn',pwd:20}
xhr.open('post','http://localhost:3000/json')
xhr.setRequestHeader('Content-Type','application/json')//设置请求参数格式的类型（post请求必须要设置）
xhr.send(JSON.stringify(data))//将JSON格式的数据转换成字符串形式然后发送请求
xhr.onload = function (){
    console.log(xhr.responseText)
}
```

## 8.对象深拷贝、浅拷贝
* [js浅拷贝与深拷贝的区别和实现方式](https://www.jianshu.com/p/1c142ec2ca45)

* 深拷贝常用方法 
```
1. var _obj = JSON.parse(JSON.stringify(obj)) 不能拷贝方法

2. 采用递归去拷贝所有层级属性
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);

3.如果对象的value是基本类型的话，也可以用Object.assign来实现深拷贝，但是要把它赋值给一个空对象
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({}, obj); // obj赋值给一个空{}
obj1.a = 3;
console.log(obj.a)；// 1
```

## 9.图片懒加载、预加载

## 10.实现页面加载进度条

## 11.this关键字
* [this的指向问题](https://www.cnblogs.com/dongcanliang/p/7054176.html)

* 普通函数：根据调用我的人（谁调用我，我的this就指向谁）

* 箭头函数：根据所在的环境（我再哪个环境中，this就指向谁）

## 12.手动实现parseInt

## 13.为什么会有同源策略
* [同源策略](https://blog.csdn.net/weixin_44195250/article/details/102808214)

## 14.怎么判断两个对象是否相等

## 15.事件模型、事件委托、代理、如何让事件先冒泡后捕获
* [简述JS中的事件委托和事件代理](https://www.jianshu.com/p/a77d8928c5c9)

## 16.window的onload事件和domcontentloaded
* 当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。

* 当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。

## 17.for...in迭代和for...of有什么区别
* [区别](https://www.cnblogs.com/leftJS/p/11068492.html)

## 18.详解JS函数柯里化
* [详解JS函数柯里化](https://blog.csdn.net/Fuohua/article/details/70919843)

## 19.call apply区别，原生实现bind

* [call apply区别，原生实现bind](https://www.jianshu.com/p/473a86d509b9)
* [手写bind](https://www.cnblogs.com/goloving/p/9380076.html)

## 20.async/await

* [async/await](https://segmentfault.com/a/1190000007535316)
* async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。

## 21.立即执行函数
* [立即执行函数](https://www.cnblogs.com/vickylinj/p/12191958.html)

## 22.设计模式(要求说出如何实现,应用,优缺点)/单例模式实现
* [设计模式](https://blog.csdn.net/fj1247565817/article/details/99740263)
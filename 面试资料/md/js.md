# JavaScript面试资料总结
>[别人的总结资料](https://zhuanlan.zhihu.com/p/125848433)

## 1、原型/原型链/构造函数/实例/继承

### 1. 原型

>JavaScript高级程序设计第四版(p225)

+ 创建函数时，就会按照特定的规则为这个函数创建一个 prototype 属性（指向原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数。  
+ 在自定义构造函数时，原型对象默认只会获得 constructor 属性，其他的所有方法都继承自Object。每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构造函数的原型对象。脚本中没有访问这个[[Prototype]]特性的标准方式，但Firefox、Safari 和 Chrome会在每个对象上暴露__proto__属性，通过这个属性可以访问对象的原型。在其他实现中，这个特性完全被隐藏了。关键在于理解这一点：实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有。

```
function Person() {}

console.log(Person.prototype)
//打印结果如下
// { 
// constructor: f Person(), 
// __proto__: Object
// }

console.log(Person.prototype.constructor === Person) // true

//正常的原型链都会终止于 Object 的原型对象;Object 原型的原型是 null
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Person.prototype.__proto__.constructor === Object) // true
console.log(Person.prototype.__proto__.__proto__ === null) // true

let person1 = new Person()

//实例通过__proto__链接到原型对象，它实际上指向隐藏特性[[Prototype]];构造函数通过 prototype 属性链接到原型对象;实例与构造函数没有直接联系，与原型对象有直接联系
console.log(person1.__proto__ === Person.prototype) // true 
conosle.log(person1.__proto__.constructor === Person) // true

//同一个构造函数创建的两个实例共享同一个原型对象
console.log(person1.__proto__ === person2.__proto__) // true

//instanceof 检查实例的原型链中是否包含指定构造函数的原型
console.log(person1 instanceof Person) // true 
console.log(person1 instanceof Object) // true 
console.log(Person.prototype instanceof Object) // true
```

### 2. 原型链

>JavaScript高级程序设计第四版(p238)

+ 原型链是主要的继承方式
+ 基本思想：每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例，那就意味着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。

### 3. 构造函数和实例

>JavaScript高级程序设计第四版(p221)

创建实例使用new操作符，new的过程
+ 在内存中创建一个新对象
+ 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性
+ 构造函数内部的this被赋值为这个新对象（即this指向新对象）
+ 执行构造函数内部的代码（给新对象添加属性）
+ 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

```
function Person(name, age){ 
    this.name = name
    this.age = age 
    this.sayName = function() { 
        console.log(this.name); 
    } 
}

let simon = new Person("simon",20)

//实现new运算符
function(fn){
    let obj = Object.create(fn.prototype)
    let k = fn.call(obj)
    if(k instanceof Object){
        return k
    }else{
        return o
    }
}
```

### 4. 继承

>JavaScript高级程序设计第四版(p238)  
>[继承方法](http://blog.linncode.cn/article?inherit.md)

```
//原型链继承
//缺点:子类有时候需要覆盖父类的方法，或者增加父类没有的方法。为此，这些方法必须在原型赋值之后再添加到原型上;以对象字面量方式创建原型方法会破坏之前的原型链;原型中包含的引用值会在所有实例间共享,原本的实例属性会存在于子类的原型上变成原型属性;子类型在实例化时不能给父类型的构造函数传参

function SuperType() {
    this.property = true 
} 
SuperType.prototype.getSuperValue = function() { 
    return this.property 
}; 
function SubType() { 
    this.subproperty = false 
} 
// 继承 SuperType 
SubType.prototype = new SuperType() 
SubType.prototype.getSubValue = function () {
    return this.subproperty 
}; 
let instance = new SubType() 
console.log(instance.getSuperValue()) // true
```

[![BGqWmF.png](https://s1.ax1x.com/2020/10/29/BGqWmF.png)](https://imgchr.com/i/BGqWmF)

```
//寄生组合继承（继承的最佳模式）
//原理:不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。
function inheritPrototype(subType, superType) { 
    let prototype = object(superType.prototype) // 创建对象
    prototype.constructor = subType // 增强对象 
    subType.prototype = prototype // 赋值对象
}
function SuperType(name) { 
    this.name = name 
    this.colors = ["red", "blue", "green"] 
} 
SuperType.prototype.sayName = function() { 
    console.log(this.name) 
}; 
function SubType(name, age) { 
    SuperType.call(this, name)
    this.age = age 
} 
inheritPrototype(SubType, SuperType) 
SubType.prototype.sayAge = function() { 
    console.log(this.age) 
}

//类继承
class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x + this.y)
    }
}

class Son extends Father {
    constructor(x,y) {
        super(x,y) //调用了父类中的构造函数
    }
}

var son = new Son(1,2)
son.sum()
```

## 2、arguments

>[arguments对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

+ arguments 是一个对应于传递给函数的参数的类数组对象。
+ arguments 对象只能在函数内使用


```
function fn(...arr){
    console.log(arr)
    // expected output: [ 1, 2, 3 ]
    console.log(arguments[0])
    // expected output: 1
    console.log(arguments[1])
    // expected output: 2
    console.log(arguments[2])
    // expected output: 3
}

fn(1,2,3)

可以使用Array.from()方法或扩展运算符将参数转换为真实数组：
var args = Array.from(arguments)
var args = [...arguments]
```

## 3、数据类型判断方法

> [判断数据类型的方法](https://www.jianshu.com/p/967d6db70437)

+ typeof
+ instanceof
+ Object下的toString.call()方法
+ 根据对象的contructor

### 1. typeof
+ 判断数据类型，它返回表示数据类型的字符串（返回结果只能包括number,boolean,string,function,object,undefined）
+ 可以使用typeof判断变量是否存在(如if(typeof a!="undefined"){...})
+ Typeof 运算符的问题是无论引用的对象是什么类型 它都返回object

```
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof NaN) //number
console.log(typeof []) //object
console.log(typeof {}) //object
console.log(typeof /\s/) //object
```

### 2. instanceof
+ instanceof 检查实例的原型链中是否包含指定构造函数的原型
+ A instanceof B 可以判断A是不是B的实例，返回一个布尔值，由构造类型判断出数据类型
+ instanceof 后面一定要是对象类型，大小写不能写错，该方法试用一些条件选择或分支

```
function fn(){}

console.log(arr instanceof Array ) // true
console.log(date instanceof Date ) // true
console.log(fn instanceof Function ) // true
```

### 3. 通过Object下的toString.call()方法来判断
```
console.log(toString.call(123)) //[object Number]
console.log(toString.call("123")) //[object String]
console.log(toString.call(undefined)) //[object Undefined]
console.log(toString.call(true)) //[object Boolean]
console.log(toString.call({})) //[object Object]
console.log(toString.call([])) //[object Array]
console.log(toString.call(function(){})) //[object Function]
```

### 4. 根据对象的contructor判断
```
let fn = function(){}
let arr = []
let date = new Date()

console.log(arr.constructor === Array) //true
console.log(date.constructor === Date) //true
console.log(fn.constructor === Function) //true
console.log(arr.__proto__.constructor === Array) //true
console.log(date.__proto__.constructor === Date) //true
console.log(fn.__proto__.constructor === Function) //true
```

## 4、作用域链、闭包、作用域

### 1. 作用域
>[函数作用域和块级作用域](https://blog.csdn.net/little_little0_0/article/details/79675451)

+ 概念:变量在某个范围内起作用和效果 
+ 目的:是为了提高程序的可靠性更重要的是减少命名冲突
+ 分类:全局作用域和局部作用域
+ 变量:全局变量和局部变量
  + 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源 
  + 局部变量在程序执行完毕就会销毁，比较节约内存资源 
+ es6之前无块级作用域
+ 函数作用域：变量在定义的环境中以及嵌套的子函数中处处可见
+ 块级作用域：变量在离开定义的块级代码后立即被回收

### 2. 作用域链
+ 概念:内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值,这种结构我们称为作用域链
+ 遵循就近原则
  
```
let num = 10

let fn = () => {
     let num = 20
     return () => console.log(num)
 }

fn()() //20
```

### 3. 闭包
>[什么是闭包？闭包的工作原理、优缺点、使用场景和对页面的影响](https://www.jianshu.com/p/380fea4a563f)  

+ 概念:指有权访问另一个函数作用域中变量的函数,一个作用域可以访问另外一个函数的局部变量   
+ 作用:延伸了变量的作用范围
+ 原理:js的链式作用域。子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
+ 应用场景
  + 采用函数引用方式的setTimeout调用
  + 将函数关联到对象的实例方法
  + 封装相关的功能集 

```
function fn() {
    let num = 10
    function fun() {console.log(num)}
    fun()
}
fn() //10

let fn = () => {
    let num = 10
    return () => console.log(num)
}

fn()() //10

//原生的setTimeout有一个缺陷，传递的函数不能带参数
let fn = val => {return () => alert(val)}
let f = fn("带参数")
setTimeout(f,1000)
```

## 5、Ajax的原生写法
```
//get请求
const data = `username=simon&password=123`
let url = "http://localhost:3000/get",type = "get"
let url = url + "?" + data
const xhr = new XMLHttpRequest() //创建ajax对象
xhr.open(type,url)
xhr.send() //发送请求
xhr.onload = () => console.log(xhr.responseText) //打印响应数据

//post请求
const data = `username=simon&password=123`
let url = "http://localhost:3000/post",type = "post"
const xhr = new XMLHttpRequest()
xhr.open(type,url)
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded") //必须设置请求参数格式的类型
xhr.send(data)
xhr.onload = () => console.log(xhr.responseText)

//post方式(传递json对象数据格式)
let data = {name:"simon",age:20}
const xhr = new XMLHttpRequest()
xhr.open("post","http://localhost:3000/json")
xhr.setRequestHeader("Content-Type","application/json") //必须设置请求参数格式的类型
xhr.send(JSON.stringify(data)) //将JSON格式的数据转换成字符串形式然后发送请求
xhr.onload = () => console.log(xhr.responseText)
```

## 6、深拷贝、浅拷贝

>[浅拷贝与深拷贝](https://www.jianshu.com/p/1c142ec2ca45)

### 1. 区别
+ 浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用
+ 深拷贝拷贝多层, 每一级别的数据都会拷贝

### 2. 深拷贝实现方法
+ JSON.parse(JSON.stringify(obj))
+ 如果对象的value是基本类型的话，也可以用Object.assign来实现深拷贝
+ 采用递归去拷贝所有层级属性

```
let obj = { a: 1, b: 2 }
let copyObj = JSON.parse(JSON.stringify(obj))
```
```
let obj = { a: 1, b: 2 }
let copyObj = Object.assign({}, obj)
```
```
function deepCopy(obj) {
    let newobj = Array.isArray(obj)?[]:{}
    for (let k in obj) {
        let item = obj[k] //属性值为oldobj[k]
        if (item instanceof Array || item instanceof Object) { //属性值为数组或者是对象
            newobj[k] = deepCopy(item) 
        } else { //属性值为简单数据类型
            newobj[k] = item
        }
    }
    return newobj
}
```

## 7、this关键字

>[this的指向问题](https://www.cnblogs.com/dongcanliang/p/7054176.html)   
>[资料和练习题](http://blog.linncode.cn/article?this.md) 

+ 普通函数:根据调用我的人(谁调用，this就指向调用者)
+ 箭头函数:根据所在的环境(在哪个环境中，this就指向最近的上下文this)

```
// 1
var name = "Linn"
let obj = {
    name: "Simon",
    getName: function() {
        return function() {
            console.log(this.name)
        }.call()
    }
}
obj.getName() //Linn

//2
var name = "Linn"
let obj = {
    name: "Simon",
    getName: function() {
        return function() {
            console.log(this.name)
        }.call(this)
    }
}
obj.getName() //Simon

//3
var name = "Linn"
let obj = {
    name: "Simon",
    getName: () => {
        return function() {
            console.log(this.name)
        }.call()
    }
}
obj.getName() //Linn

//4
var name = "Linn"
let obj = {
    name: "Simon",
    getName: () => {
        return function() {
            console.log(this.name)
        }.call(this)
    }
}
obj.getName() //Linn

//5
var name = "Linn"
let obj = {
    name: "Simon",
    getName: function(){
        // return (() => console.log(this.name)).call() //Simon
        return (() => console.log(this.name)).call(this) //Simon
    }
}
obj.getName()
```

## 8、var与let、const的区别
+ var关键字声明的全局变量会挂载在window上，let和const关键字声明的全局变量不会挂载到window上
+ var关键字声明的变量存在变量提升，let和const关键字声明的变量不存在变量提升
+ 在一个大括号中，使用let、const关键字声明的变量具有块级作用域，var关键字声明的变量没有块级作用域
+ 同一作用域下let和const不能声明同名变量，var可以
+ let关键字声明的变量具有暂时性死区特性
+ const关键字声明的变量是常量;一旦声明必须赋值;声明后不能再修改;如果声明的是复合类型数据，可以修改其属性

## 9、基本类型和引用类型的区别

>[JS基本数据类型和引用数据类型的区别](https://www.jianshu.com/p/a32fe1c964c1)

### 1. 数据类型
+ ECMAScript变量包含两种不同类型的值:基本类型值、引用类型值 
+ 基本类型值:指的是保存在栈内存中的简单数据段
+ 引用类型值:指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针指向内存堆中实际的值

### 2. 两种访问方式
+ 基本类型值:按值访问，操作的是他们实际保存的值
+ 引用类型值:按引用访问，当查询时，我们需要先从栈中读取内存地址，然后再找到保存在堆内存中的值

### 3. 两种类型复制
+ 基本类型变量的复制:从一个变量向一个变量复制时，会在栈中创建一个新值，然后把值复制到为新变量分配的位置上，改变源数据不会影响到新的变量(互不干涉)
+ 引用类型变量的复制:复制的是存储在栈中的指针，将指针复制到栈中为新变量分配的空间中，而这个指针副本和原指针执行存储在堆中的同一个对象，复制操作结束后，两个变量实际上将引用同一个对象；因此改变其中的一个，将影响另一个；

### 4. 为什么引用数据类型不放在栈上
+ 基础数据类型的值基本上都是固定大小的，而引用数据类型的值往往不固定
+ 由于栈只能向上增长，因此就会限制住栈存储内容的能力。而堆不同，堆中的对象是可以根据需要动态增长。

## 10、null和undefined的区别

>[null和undefined的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

### 1. 区别
+ null 表示一个值被定义了，定义为“空值”
+ undefined 表示根本不存在定义

### 2. null典型用法
+ 作为函数的参数，表示该函数的参数不是对象
+ 作为对象原型链的终点

### 3. undefined典型用法
+ 变量被声明了，但没有赋值时，就等于undefined
+ 调用函数时，应该提供的参数没有提供，该参数等于undefined
+ 对象没有赋值的属性，该属性的值为undefined
+ 函数没有返回值时，默认返回undefined

## 11、造成内存泄漏的操作

>[JS哪些操作会造成内存泄露](https://blog.csdn.net/michael8512/article/details/77888000) 
  
+ 意外的全局变量引起的内存泄露
+ 闭包引起的内存泄漏
+ 没有清理的DOM元素引用
+ 被遗忘的定时器或者回调

## 12、apply call bind的区别

+ call():调用函数；改变函数内this的指向；分别接受参数；常用来实现继承
+ apply():调用函数；改变函数内this的指向；接受数组形式的参数；求数组最大值
+ bind():不会调用原来的函数；改变函数内this的指向；返回的是原函数改变this之后产生的新函数；分别接受参数

## 13、手写call()

+ [call apply区别，原生实现bind](https://www.jianshu.com/p/473a86d509b9)  
+ [手写bind](https://www.cnblogs.com/goloving/p/9380076.html)

```
/*
 * call方法思想：改变this指向，让新的对象可以执行这个方法
 * 实现思路：
 * 1、给新的对象添加一个函数（方法），并让this（也就是当前绑定的函数）指向这个函数
 * 2、执行这个函数
 * 3、执行完以后删除这个方法
 * 4、可以将执行结果返回
 */

var obj = { value: 1 }

function test(name, age) {
    console.log(arguments)
    console.log(name, age)
    console.log(this.value)
}

Function.prototype.myCall = function(obj) {
    //判断调用此方法的是否是函数 不是则抛出错误
    if(typeof this != "function") throw new TypeError("Erorr")
    //通过扩展运算arguments获取传递的参数 去掉第一个参数
    let args = [...arguments].slice(1)
    //把调用此方法的函数赋值给新对象新创建的fn方法
    obj.fn = this
    //调用新对象的fn方法
    var result = obj.fn(...args)
    //删除此方法
    delete obj.fn
    //返回结果
    return result
}

test.myCall(obj,"simon",20)
```

## 14、防抖和节流

>[防抖和节流](https://juejin.im/post/6844904185117278215)

## 15、js事件流

>[对JS事件流的深入理解](https://zhuanlan.zhihu.com/p/114276880)

+ 概念:从页面中接收事件的顺序
+ 事件冒泡(事件代理、事件委托)
+ 事件捕获

### 1. 如何先执行冒泡事件，再执行捕获事件  
给被点击的dom元素添加两个点击事件，第一个是冒泡，第二是是捕获。点击的必须是此dom元素，根据代码顺序先执行冒泡在执行捕获

## 16、promise是什么？有哪三种状态

>[promise基本使用](https://es6.ruanyifeng.com/#docs/promise) 

+ 概念:Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。  
+ 状态:Promise有三种状态待定、已兑现、已拒绝（已兑现和已拒绝都称为已敲定） 

### 1. 状态  
+ 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
+ 已兑现（fulfilled）: 意味着操作成功完成。
+ 已拒绝（rejected）: 意味着操作失败。

### 2. 常用方法
>+ Promise.all(iterable)
>+ Promise.any(iterable)
>+ Promise.allSettled(iterable)
>+ Promise.reject(reason)
>+ Promise.resolve(value)

## 17、同源策略
>[同源策略](https://www.jianshu.com/p/beb059c43a8b)

+ 概念:同源是指协议、域名、端口都相同，有一个不同就是不同源
+ 同源策略是为了保护网站的安全，防止用户信息泄露，防止身份伪造等(读取Cookie)
+ 同源策略是为了保护本地数据不被JavaScript代码获取回来的数据污染，因此拦截的是客户端发出的请求回来的数据接收，即请求发送了，服务器响应了，但是无法被浏览器接收。

## 18、判断两个对象是否相等

+ JSON.stringify()
+ 递归

```
let obj1 = {name:"simon",age:20}
let obj2 = {name:"simon",age:20}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) //true
```

```
function isObjectValueEqual(a, b) {
    let aProps = Object.getOwnPropertyNames(a)
    let bProps = Object.getOwnPropertyNames(b)

    if (aProps.length != bProps.length) {
        return false
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]
        let propA = a[propName]
        let propB = b[propName]
        if(propA instanceof Object){
            return isObjectValueEqual(propA, propB)
        }else if(propA !== propB){
            return false
        }
    }

   return true
}
```

## 19、window的onload事件和domcontentloaded

>[window的onload事件和domcontentloaded的区别](https://www.jianshu.com/p/1a8a7e698447)

+ 当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
+ 当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。

## 20、for...in迭代和for...of有什么区别

>[for...in迭代和for...of的区别](https://www.cnblogs.com/leftJS/p/11068492.html)

## 21、详解JS函数柯里化

>[详解JS函数柯里化](https://blog.csdn.net/Fuohua/article/details/70919843)

## 22、async/await

>[async/await](https://segmentfault.com/a/1190000007535316)

+ async用于申明一个 function 是异步的，await用于等待一个异步方法执行完成
+ async函数返回的是一个Promise对象,如果在函数中return一个直接量，async会把这个直接量通过Promise.resolve()封装成Promise对象
+ await表达式的运算结果取决于它等的东西。如果它等到的不是一个Promise对象，那 await表达式的运算结果就是它等到的东西。如果它等到的是一个Promise对象，await就会阻塞后面的代码，等着Promise对象resolve，然后得到resolve的值，作为await表达式的运算结果。
+ async/await的优势在于处理then链

## 23、立即执行函数及使用场景

>[立即执行函数](https://www.jianshu.com/p/b10b6e93ddec)

+ 概念:声明一个函数并且立即执行该函数
+ 使用场景
    + 函数只需要工作一次
    + 立即执行函数的变量只在初始化中使用
+ 通过定一个匿名函数，创建了一个新的函数作用域，该命名空间的变量和方法，不会污染全局的命名空间（反过来也一样）。如果在这个函数作用域中要访问全局对象，将全局对象以参数形式传入进去，虽然函数体内可以直接访问全局对象，但为了不污染全局的命名空间，所以以参数形式传入，那么对这个参数的修改不会污染全局变量。
```
(function(){
    console.log("立即执行函数")
})()

<ul>
    <li>第一个li</li>
    <li>第二个li</li>
    <li>第三个li</li>
</ul>
<script>
    var lis = document.querySelectorAll("li")
    for(var i = 0 ;i<lis.length;i++){
        (function(j){
            li[j].onclick = () => console.log(j)
        })(i) //把实参i赋值给形参j
    }
</script>  
```

## 24、设计模式(要求说出如何实现,应用,优缺点)/单例模式实现

>[设计模式](https://www.cnblogs.com/tugenhua0707/p/5198407.html)

```
// 单体模式
var Singleton = function(name){
    this.name = name
    this.instance = null
}
Singleton.prototype.getName = function(){
    return this.name
}
// 获取实例对象
function getInstance(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance
}
// 测试单体模式的实例
var a = getInstance("aa")
var b = getInstance("bb")
```

## 25、iframe的优缺点

+ 优点
    + iframe能够原封不动的把嵌入的网页展现出来
    + 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷
    + 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用
    + 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决
+ 缺点
    + 会产生很多页面，不容易管理
    + iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差
    + 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化
    + 很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差
    + iframe框架页面会增加服务器的http请求，增大服务器的压力

## 26、数组问题 

### 1. 数组去重

```
let arr = [1,2,3,4,1,5,8,1,42,2,4]

// 1. 利用 for of和object
function filter(arr){
    if(!arr instanceof Array){
        return arr
    }
    let obj = {},newArr = []
    for(let i of arr){
        if(!obj[i]){
            newArr.push(i)
            obj[i] = i
        }
    }
    return newArr
}
console.log(filter(arr))

// 2. 利用Set中的元素是唯一的特性
function filter(arr){
    if(!arr instanceof Array){
        return arr
    }
    return Array.from(new Set(arr))
}
console.log(filter(arr))


// 3. 利用for of和includes方法
function filter(arr){
    if(!arr instanceof Array){
        return arr
    }
    let newArr = []
    for(let i of arr){
        !newArr.includes(i)&& newArr.push(i)
    }
    return newArr
}
console.log(filter(arr))
```
### 2. 查找数组重复项
```
let arr = [1,2,3,4,1,5,8,1,42,2,4]

// 获取数组元素各项出现了几次
function filter(arr){
    if(!arr instanceof Array){
        return arr
    }
    let obj = {}
    for(let i of arr){
        if(!obj[i]){
            obj[i] = 1
        }else{
            obj[i] += 1
        }
    }
    return obj
}

let obj = filter(arr)

for(let i in obj){
    if(obj[i] > 1){
        console.log(i)
    }
}
```

### 3. 扁平化数组

+ 概念:数组扁平化是指将一个多维数组变为一维数组
+ 例:[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]

```
let arr = [1, [2, 3, [4, 5]]]

// 1. 递归
function flatten(arr){
    if(!arr instanceof Array){
        return arr
    }
    let newArr = []
    for(let i of arr){
        if(i instanceof Array){
            newArr = newArr.concat(flatten(i))
        }else{
            newArr = newArr.concat([i])
        }
    }
    return newArr
}
console.log(flatten(arr))

// 2. toString()和split()
function flatten(arr){
    return arr.toString().split(",").map(item => Number(item))
}
console.log(flatten(arr))

// 3. join()和split()
function flatten(arr){
    return arr.join(",").split(",").map(item => Number(item))
}
console.log(flatten(arr))

// 4. concat()和扩展运算符
function flatten(arr){
    while(arr.some(item => item instanceof Array)){
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten(arr))

```

### 5. 快速排序

```
let arr = [5,1,8,4,9,12,78,100]

function quickSort(arr){
    //递归时的停止条件
    if(!arr instanceof Array || arr.length <=1 ){
        return arr
    }
    let leftArr = [],rightArr = []
    let chooseIndex = Math.floor(arr.length / 2)
    let chooseItem = arr.splice(chooseIndex,1)[0]
    
    for(let i of arr){
        if(i < chooseItem){
            leftArr.push(i)
        }else{
            rightArr.push(i)
        }
    }

    return quickSort(leftArr).concat([chooseItem],quickSort(rightArr))
}

console.log(quickSort(arr))
```

### 6. 冒泡排序
```
let arr = [5,1,8,4,9,12,78,100]

function bubble(arr){
    let flag
    for(let i=0; i<arr.length; i++){
        for(let j=arr.length-1; j>i; j--){
            if(arr[i]>arr[j]){
                flag = arr[i]
                arr[i] = arr[j]
                arr[j] = flag
            }
        }
    }
    return arr
}
console.log(bubble(arr))
```

## 27、图片懒加载和预加载

### 1. 图片懒加载
```
//为降低一次性的http请求次数
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.box{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
img{
    width: 680px;
    height: auto;
}
.fadeIn{
    animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
    0%{opacity: 0}
    100%{opacity: 1}
}
</style>
<body>
    <div class="box">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/22/Bi7FBt.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/22/Bi7inI.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/16/0HQg1S.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/14/0Imzg1.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/13/0fzOyt.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/13/0fzTFe.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/13/0fzIoD.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/13/0fz5dO.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/13/0fz4eK.jpg">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" data-src="https://s1.ax1x.com/2020/10/13/0fjBZD.jpg">
    </div>
</body>
<script>
    class LazyLoad {
        constructor(dom){
            this.timer = null
            this.init() //初始化页面
        }
        init(){
            this.isLoad()
            this.isScroll()
        }
        //加载图片
        isLoad(){
            //已加载的图片过滤
            let imgs = Array.from(document.querySelectorAll("img:not([data-isloaded])"))
            imgs.forEach( item => {
                if(this.isShow(item)){
                    this.isLazy(item)
                }
            })
        }
        //页面滚动事件
        isScroll(){
            window.addEventListener("scroll",() => {
                if(this.timer) return 
                setTimeout(() => {
                    this.isLoad()
                    this.timer = null
                },200)
            })
        }
        //懒加载图片核心原理
        isLazy(img){
            img.src = img.dataset.src
            img.setAttribute("data-isLoaded", true) //已加载过的图片做标记(下次不获取加载过的元素)
            img.classList.add("fadeIn") //图片出现加载过度动画
        }
        //是否展示(元素距离顶部的高度 <= 窗口高度 + 窗口滚动高度)
        isShow(img){
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            return img.offsetTop <= clientHeight + scrollTop
        }
    }
    let lazy = new LazyLoad()
</script>
</html>
```

### 2.图片预加载
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src=""/>
</body>
<script>
    let arr = [
        "https://s1.ax1x.com/2020/10/22/Bi7FBt.jpg",
        "https://s1.ax1x.com/2020/10/22/Bi7inI.jpg",
        "https://s1.ax1x.com/2020/10/16/0HQg1S.jpg",
    ]
    preLoadImg(arr)
    //图片预加载方法
    function preLoadImg(arr){
        let imgList = []
        arr.forEach((item,index) => {
            imgList[index] = new Image()
            imgList[index].src = arr[index]
        })
    }
    // 1s之后显示出该图片(1s之后并没有重复请求这个图片，因为之前已经请求下来了，这就是预加载)
    setTimeout(() => {
        let img = document.querySelector("img")
        img.src = "https://s1.ax1x.com/2020/10/22/Bi7FBt.jpg"
    },1000)
</script>
</html>
```

## 28、页面百分比进度条
>[nprogress使用](https://github.com/rstacruz/nprogress)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css">
    <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="app">
        <img src="https://s1.ax1x.com/2020/10/12/0WPkND.jpg" alt="">
    </div>
</body>
<script>
    console.log("JavaScript")
   
    document.addEventListener("readystatechange",function(){
        if(document.readyState === "interactive"){
            NProgress.start()
        }
        console.log(document.readyState)
    })

    document.addEventListener("DOMContentLoaded",function(){
        console.log("DOMContentLoaded")
    })

    window.addEventListener("load",function(){
        NProgress.done()
        console.log("load")
    })
</script>
</html>
```

## 29、ES6

### 1. 解构赋值

+ 概念:解构赋值是对赋值运算符的扩展,是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值
```
let [a, [[b], c]] = [1, [[2], 3]]
// a = 1
// b = 2
// c = 3

let [a, b, c, d, e] = "hello"
// a = "h"
// b = "e"
// c = "l"
// d = "l"
// e = "o"

let obj = {p: ["hello", {y: "world"}] }
let {p: [x, { y }] } = obj;
// x = "hello"
// y = "world"
let obj = {p: ["hello", {y: "world"}] }
let {p: [x, {  }] } = obj
// x = "hello"

```
### 2. 拓展运算符

+ 拓展运算符:...复制后面对象的参数给当前变量
```
var arr1 = [1,2]
var arr2 = [...arr1]
console.log(arr2) //[1,2]
```

### 3. ES6怎么编译成ES5,css-loader原理,过程

+ Babel
    + Babel 是一个 JavaScript 编译器
    + Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中
+ css-loader
    + loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法
    + css-loader是分析各个css文件的关系并合并成一个css

## 30、常见js问题

### 1. 用一行代码清楚一串字符串最前面和最后面的空格（中间也有空格）
```
//清空前后的空格
let str = " sim on "
console.log(str.trim()) //sim on

//清除两边以及中间的空格
let str = " sim on "
console.log(str.trim().split(" ").join("")) //simon
```
# JavaScript面试资料总结

## 1、原型/原型链/构造函数/实例/继承

### 1. 原型

>JavaScript高级程序设计第四版(p225)

+ 无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数。  
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
+ 函数作用域：变量在定义的环境中以及嵌套的子函数中处处可见；
+ 块级作用域：变量在离开定义的块级代码后立即被回收。

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
const xhr = new XMLHttpRequest()
var data = {name:"Linn",pwd:20}
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
>[this练习题]()

+ 普通函数:根据调用我的人(谁调用我，我的this就指向谁)
+ 箭头函数:根据所在的环境(我在哪个环境中，this就指向谁)

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

### 1. 为什么会有同源策略
+ 同源策略是为了保护网站的安全，防止用户信息泄露，防止身份伪造等(读取Cookie)

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

+ 当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
+ 当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。

## 20、for...in迭代和for...of有什么区别

>[区别](https://www.cnblogs.com/leftJS/p/11068492.html)

## 21、详解JS函数柯里化

>[详解JS函数柯里化](https://blog.csdn.net/Fuohua/article/details/70919843)

## 22、async/await

>[async/await](https://segmentfault.com/a/1190000007535316)

+ async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。

## 23、立即执行函数

>[立即执行函数](https://www.cnblogs.com/vickylinj/p/12191958.html)

## 24、设计模式(要求说出如何实现,应用,优缺点)/单例模式实现

>[设计模式](https://blog.csdn.net/fj1247565817/article/details/99740263)

## 26、数组问题 数组去重 数组常用方法 查找数组重复项 扁平化数组 按数组中各项和特定值差值排序
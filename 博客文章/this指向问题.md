# this指向问题

## 1、基本内容
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button>点击</button>
    <script>
        // 函数的不同调用方式决定了this 的指向不同
        // 1. 普通函数 this 指向window
        function fn() {console.log(this)}
        window.fn()

        // 2. 对象的方法 this指向的是对象 o
        var o = {
            sayHi: function() {console.log(this)}
        }
        o.sayHi()

        // 3. 构造函数 this 指向 ldh 这个实例对象 原型对象里面的this 指向的也是 ldh这个实例对象
        function Star() {}
        Star.prototype.sing = function() {}
        var ldh = new Star()

        // 4. 绑定事件函数 this 指向的是函数的调用者 btn这个按钮对象
        var btn = document.querySelector("button")
        btn.onclick = function() {console.log(this)}

        // 5. 定时器函数 this 指向的也是window
        window.setTimeout(function() {console.log(this)}, 1000)
        
        // 6. 立即执行函数 this还是指向window
        (function() {console.log(this)})()
    </script>
</body>
</html>
```

## 2、练习题
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

//6
let obj = {
    f:function(){ 
        console.log(this.a + this.b)
    }
}
var p = Object.create(obj)
p.a = 1
p.b = 4
p.f() //5 


//7
function C(){
    this.a = 37
}
var o = new C()
console.log(o.a) //37

function C2(){
    this.a = 37
    return {a:38}
}
var b = new C2()
console.log(b.a)  //38

//8
function add(c, d){
    return this.a + this.b + c + d
}
var o = {a:1, b:3}
add.call(o, 5, 7) //16
add.apply(o, [10, 20]) //34

function tt() {
    console.log(this)
}
tt.call(5)  //Number(5)
tt.call("asd") //String{"asd"}

//9
function f(){
    return this.a
}
var g = f.bind({a:"simon"})
console.log(g()) // simon
var o = {a:37, f:f, g:g}
console.log(o.f(), o.g()) // 37 simon

//10
function Person() {  
    this.age = 0  
    setTimeout(function() {
        console.log(this)
    }, 1000)
}
var p = new Person() //window对象

//11
function Person() {  
    this.age = 0;  
    setTimeout((function() {
        console.log(this)
    }).bind(this), 1000)
}
var p = new Person(); //实例p

//12
function Person() {  
    this.age = 0 
    setInterval(() => {
        console.log(this.age)
    }, 1000)
}
var p = new Person() //0

//13
var adder = {
    base : 1,   
    add : function(a) {
        return (() => console.log(a + this.base)).call() //2
    },
    addThruCall: function(a) {
        var b = {
            base : 2
        }; 
        return (() => console.log(a + this.base)).call(b) // 2
        // return function(){console.log(a + this.base)}.call(b) //3
    }
};
adder.add(1)     
adder.addThruCall(1)
```
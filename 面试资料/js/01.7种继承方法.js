//定义一个动物类
function Animal(name) {
    this.name = name || "Animal"
    this.sleep = () =>{
        console.log(this.name + "在睡觉")
    }
}

//在Animal原型上添加eat方法
Animal.prototype.eat = () =>{
    console.log(this.name + "吃鱼")
}


/*  
    1.原型链继承
     核心: 将父类的实例作为子类的原型
     特点: 实例是子类的实例，也是父类的实例;父类新增原型方法/原型属性，子类都能访问到;
     缺点: 可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行;
           无法实现多继承;来自原型对象的所有属性被所有实例共享;创建子类实例时，无法向父类构造函数传参
*/


// function Cat(){

// }

// Cat.prototype = new Animal()
// Cat.prototype.name = "Tom"

// let cat = new Cat()
// console.log(cat.name) //Tom
// console.log(cat.eat()) //undefined吃鱼
// console.log(cat.sleep()) //Tom在睡觉
// console.log(cat instanceof Animal) //true
// console.log(cat instanceof Cat) // true

/*
    2.构造继承
    核心: 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
    特点: 解决了1中，子类实例共享父类引用属性的问题;创建子类实例时，可以向父类传递参数;可以实现多继承（call多个父类对象）
    缺点: 实例并不是父类的实例，只是子类的实例;只能继承父类的实例属性和方法，不能继承原型属性/方法;无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
*/

// function Cat(name){
//     //this 指向 Cat { name: "Animal", sleep: [Function] }
//     Animal.call(this,name)
//     // this.name= name
// }

// let cat = new Cat("Tom")
// console.log(cat.name) //Tom
// console.log(cat.sleep()) //Tom在睡觉
// // console.log(cat.eat()) //报错
// // 判断 cat 是否是 Cat 类的实例 , 并且是否是其父类型的实例
// // instanceof 方法要求开发者明确地确认对象为某特定类型。
// console.log(cat instanceof Animal) //false
// console.log(cat instanceof Cat) //true


/**
    3.实例继承
    核心: 为父类实例添加新特性，作为子类实例返回
    特点: 不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
    缺点: 实例是父类的实例，不是子类的实例;不支持多继承
*/

function Cat(name){
    var instance = new Animal()
    instance.name = name
    return instance
}

let cat = new Cat("Tom")
console.log(cat.name) //Tom
console.log(cat.sleep()) //Tom在睡觉
console.log(cat.eat()) //undefined吃鱼
console.log(cat instanceof Animal) //true
console.log(cat instanceof Cat) //false


/**
    4.拷贝继承
    特点: 支持多继承
    缺点: 效率较低，内存占用高（因为要拷贝父类的属性;无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
*/

function Cat(name){
    var animal = new Animal()
  　// 遍历拷贝属性
    for(var p in animal){
      Cat.prototype[p] = animal[p]
    }
    Cat.prototype.name = name || "Tom"
}

let cat = new Cat()
console.log(cat.name) //Tom
console.log(cat.sleep()) //Animal在睡觉
console.log(cat.eat()) //undefined吃鱼
console.log(cat instanceof Animal) //false
console.log(cat instanceof Cat) //true

/*
    5.组合继承
    核心: 通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
    特点: 可以继承实例属性/方法，也可以继承原型属性/方法;既是子类的实例，也是父类的实例;不存在引用属性共享问题;可传参;函数可复用
    缺点: 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
*/

function Cat(name){
    Animal.call(this)
    this.name = name || "Tom"
}

Cat.prototype = new Animal()

//修复构造函数指向
Cat.prototype.constructor = Cat

let cat = new Cat()
console.log(cat.name) //Tom
console.log(cat.sleep()) //Tom在睡觉
console.log(cat.eat()) //undefined吃鱼
console.log(cat instanceof Animal) //true
console.log(cat instanceof Cat) //true


/*
    6.寄生组合继承
    核心: 通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
*/

function Cat(name){
    Animal.call(this)
    this.name = name || "Tom"
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype
    //将实例作为子类的原型
    Cat.prototype = new Super()
})()
  
 
let cat = new Cat()
console.log(cat.name) //Tom
console.log(cat.sleep()) //Tom在睡觉
console.log(cat.eat()) //undefined吃鱼
console.log(cat instanceof Animal) //true
console.log(cat instanceof Cat) //true

Cat.prototype.constructor = Cat // 需要修复下构造函数

/*
    7.Class 继承
    核心: 使用 extends 表明继承自哪个父类，并且在子类构造函数中必须调用 super，这段代码可以看成 Animal.call(this, name)。Class 的本质就是函数
*/

class Cat extends Animal{
    constructor(name){
        super(name)
        this.name = name || "Tom"
    }
}

let cat = new Cat()
console.log(cat.name) //Tom
console.log(cat.sleep()) //Tom在睡觉
console.log(cat.eat()) //undefined吃鱼
console.log(cat instanceof Animal) // true
console.log(cat instanceof Cat) //true

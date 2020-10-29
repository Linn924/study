## 3、用原型实现继承有什么缺点，怎么解决
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
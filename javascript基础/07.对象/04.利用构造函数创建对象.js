// 为什么需要使用构造函数 就是因前面两种创建对象的方式一次只能创建一个对象
// 可以利用函数的方法 重复这些相同的代码 这个函数称为 构造函数
// 这个函数不一样，里面封装的是对象  
// 构造函数 就是把对象里面一些相同的属性和方法抽象出来封装到函数里面

// 构造函数的语法格式
// function 构造函数名() {
//     this.属性 = 值;
//     this.方法 = function() {}
// }
// new 构造函数名();

function CreatePerson(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
        console.log(sang);

    }
}

var Linn = new CreatePerson('Linn', 20, '男'); // 调用函数返回的是一个对象
console.log(Linn)
console.log(Linn.name)
console.log(Linn['age'])
Linn.sing('星河')

// 1. 构造函数名字首字母要大写
// 2. 我们构造函数不需要return 就可以返回结果
// 3. 我们调用构造函数 必须使用 new
// 4. 我们只要new CreatePerson() 调用函数就创建一个对象 Linn  {}
// 5. 我们的属性和方法前面必须添加 this
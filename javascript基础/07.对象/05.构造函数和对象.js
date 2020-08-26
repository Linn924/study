 // 构造函数和对象
 // 1. 构造函数  明星 泛指的某一大类  它类似于 java 语言里面的  类(class)
 function Star(uname, age, sex) {
     this.name = uname;
     this.age = age;
     this.sex = sex;
     this.sing = function (sang) {
         console.log(sang);

     }
 }
 // 2. 对象 特指 是一个具体的事物 Linn ==  {name: "Linn", age: 20, sex: "男", sing: ƒ}
 var Linn = new Star('Linn', 20, '男'); // 调用函数返回的是一个对象
 console.log(Linn);
 // 3. 利用构造函数创建对象的过程称为对象的实例化
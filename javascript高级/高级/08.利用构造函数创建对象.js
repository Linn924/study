// 1. 利用 new Object() 创建对象
var obj1 = new Object();

// 2. 利用 对象字面量创建对象
var obj2 = {};

// 3. 利用构造函数创建对象
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing = function() {
        console.log('我会唱歌');

    }
}

var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
console.log(ldh);
ldh.sing();
zxy.sing();

function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
var that;
Star.prototype.sing = function() {
    console.log('我会唱歌');
    that = this;
}
var ldh = new Star('刘德华', 18);
// 在构造函数中,里面this指向的是对象实例 ldh
ldh.sing();
console.log(that === ldh);

// 原型对象函数里面的this 指向的是 实例对象 ldh

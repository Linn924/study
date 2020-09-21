var value = 2
var foo = {
    value: 1
}
function bar(name, age) {
    this.habbit = 'shopping'
    console.log(this.value)
    console.log(name, age)
}



//bind实现
/**
 * 实现思想：
 * 1、返回一个函数，其他与call, apply类似
 * 2、如果返回的函数作为构造函数，bind时指定的 this 值会失效，但传入的参数依然生效。
 */
Function.prototype.myBind = function(obj) {
    //this 指向 调用者bar构造函数
    let _this = this
    // console.log(_this)
    // 获取参数
    let args = [...arguments].slice(1)
    // console.log(args)
    //定义空对象
    let f = function() {}
    // 作为构造函数使用
    let Fbind = function() {
        let o = this instanceof Fbind ? this : obj
        // console.log(args.concat(...arguments))
        return _this.apply(o,args.concat(...arguments))
    }
    //f的原型 指向 bar的原型
    f.prototype = this.prototype
    // Fbind的原型 作为 f的实例 指向f的原型（bar构造函数的原型）
    Fbind.prototype = new f()
    // console.log(Fbind.prototype.__proto__ === f.prototype) //true
    // console.log(Fbind.prototype.__proto__ === this.prototype)//true
    return Fbind
}


var bindFoo = bar.myBind(foo, 'testbind',111)
// 返回的函数直接调用
bindFoo('2')

var simon = new bindFoo()
console.log(simon.value)


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
    let _this = this
    let args = [...arguments].slice(1)
    // 作为构造函数使用
    let Fbind = function() {
        let self = this instanceof Fbind ? this : obj
        return _this.apply(self,args.concat(...arguments))
    }
    let f = function() {}
    f.prototype = this.prototype
    Fbind.prototype = new f()
    return Fbind
}


var bindFoo = bar.myBind(foo, 'testbind',111)
// 返回的函数直接调用
bindFoo()


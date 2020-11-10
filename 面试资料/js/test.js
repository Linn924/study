var obj = { value: 1 }

function test(name, age) {
    console.log(arguments)
    console.log(name, age)
    console.log(this.value)
}

Function.prototype.myCall = function(obj) {
    //判断调用此方法的是否是函数 不是则抛出错误
    if(!this instanceof Function) throw new TypeError("Erorr")
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
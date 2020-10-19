var obj = {
    value: 1
}
function test(name, age) {
    console.log(arguments)
    console.log(name, age)
    console.log(this.value)
}

/*
 * call方法思想：改变this指向，让新的对象可以执行这个方法
 * 实现思路：
 * 1、给新的对象添加一个函数（方法），并让this（也就是当前绑定的函数）指向这个函数
 * 2、执行这个函数
 * 3、执行完以后删除这个方法
 * 4、可以将执行结果返回
 */



Function.prototype.myCall = function(obj) {
    //判断调用此方法的是否是函数 不是抛出错误
    if(typeof this != 'function') throw new TypeError('Erorr')
    //通过扩展运算arguments获取传递的参数 去掉第一个参数
    let args = [...arguments].slice(1)
    //把调用此方法的函数 赋值 给新对象新创建的fn方法
    obj.fn = this
    //调用新对象的fn方法
    var result = obj.fn(...args)
    //删除此方法
    delete obj.fn
    //返回结果
    return result
}


test.myCall(obj,'simon',20)


var obj = {value: 1}
function test(name, age) {
    console.log(arguments)
    console.log(name, age)
    console.log(this.value)
}


Function.prototype.myApply = function(obj) {
    //判断调用此方法的是否是函数 不是函数则抛出错误
    if(typeof this != 'function') throw new TypeError('Erorr')
    //判断传入的数据是否是数组类型
    if(!(arguments[1] instanceof Array)) throw new TypeError('Erorr')
    //把调用此方法的函数 赋值 给新对象新创建的fn方法
    obj.fn = this
    //判断是否传入的数组是否存在
    if(arguments[1]){
        var result =  obj.fn(...arguments[1])
    }else{
        var result = obj.fn()
    }
    //删除此方法
    delete obj.fn
    //返回结果
    return result
}


test.myApply(obj,['simon',20])
// test.myApply(obj,1)


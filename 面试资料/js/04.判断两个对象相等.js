var simon = {
    age:20,
    name:'simo'
}

var linn = {
    name:'simon',
    age:20
}


// 1.JSON.stringify(obj)
// 缺点：当两个对比的对象中key的顺序不是完全相同时会比较出错
// console.log(JSON.stringify(simon) === JSON.stringify(linn)) //true


/*
    2.递归
        1.先判断俩者是不是对象
        2.是对象后俩者长度是否一致
        3.判断俩个对象的所有key值是否相等相同
        4.判断俩个对象的相应的key对应的值是否相同
        5.来一个递归判断里面的对象循环1-4步骤
*/

function diff(obj1,obj2){
    var o1 = obj1 instanceof Object
    var o2 = obj2 instanceof Object

    // 判断是不是对象
    if(!o1 || !o2) return obj1 == obj2

    //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

    for (var o in obj1) {
        var t1 = obj1[o] instanceof Object
        var t2 = obj2[o] instanceof Object
        if (t1 && t2) {
            return diff(obj1[o], obj2[o])
        } else if(obj1[o] !== obj2[o]){
            return false
        }
    }
    return true
}

console.log(diff(simon,linn))
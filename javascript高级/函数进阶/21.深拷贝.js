// 深拷贝拷贝多层, 每一级别的数据都会拷贝.
var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    },
    color: ['pink', 'red']
};
var o = {};

// 封装函数 
function deepCopy(newobj, oldobj) {
    for (var k in oldobj) {
        // 判断属性值属于那种数据类型
        //  获取属性值  oldobj[k]
        var item = oldobj[k];
        //  判断这个值是否是数组
        if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k], item)
        } else if (item instanceof Object) {
            //  判断这个值是否是对象
            newobj[k] = {};
            deepCopy(newobj[k], item)
        } else {
            //  属于简单数据类型
            newobj[k] = item;
        }

    }
}


deepCopy(o, obj);
console.log(o);

var arr = [];
console.log(arr instanceof Object);
o.msg.age = 20;
console.log(obj);

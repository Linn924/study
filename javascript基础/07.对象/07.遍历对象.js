//遍历对象
var obj = {
    name: 'Linn',
    age: 20,
    sex: '男',
    fn: function () {}
}

// for in 遍历我们的对象
// for (变量 in 对象) {

// }

for (var k in obj) {
    // console.log(k) // 得到的是属性名 name age sex
    // console.log(typeof k) // k 是string类型
    console.log(obj[k])// 得到的是属性值
}
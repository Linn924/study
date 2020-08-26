// 用于获取对象自身所有的属性
var obj = {
    id: 1,
    pname: '小米',
    price: 1999,
    num: 2000
};
var arr = Object.keys(obj);
console.log(arr);
arr.forEach(function(value) {
    console.log(value);

})

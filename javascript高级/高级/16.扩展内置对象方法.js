// 原型对象的应用 扩展内置对象方法

Array.prototype.sum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

//下面的方法 原来的Array的原型对象会被覆盖
// Array.prototype = {
//     sum: function() {
//         var sum = 0;
//         for (var i = 0; i < this.length; i++) {
//             sum += this[i];
//         }
//         return sum;
//     }

// }
var arr = [1, 2, 3];
console.log(arr.sum());
console.log(Array.prototype);
var arr1 = new Array(11, 22, 33);
console.log(arr1.sum());

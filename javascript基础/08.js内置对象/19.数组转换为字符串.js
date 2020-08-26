// 数组转换为字符串 
// 1. toString() 将我们的数组转换为字符串
var arr = [1, 2, 3];
console.log(arr.toString()); // 1,2,3

// 2. join(分隔符) 
var arr1 = [1, 5, 9];
console.log(arr1.join()); // 1,5,9
console.log(arr1.join('-')); // 1-5-9
console.log(arr1.join('&')); // 1&5&9
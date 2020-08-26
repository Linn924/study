// 返回数组元素索引号方法  indexOf(数组元素)  作用就是返回该数组元素的索引号 从前面开始查找
// 它只返回第一个满足条件的索引号 
// 它如果在该数组里面找不到元素，则返回的是 -1  
var arr = ['red', 'green', 'green', 'pink'];
console.log(arr.indexOf('red'))// 0
console.log(arr.indexOf('green'))// 1
console.log(arr.indexOf('blue'));// -1


// 返回数组元素索引号方法  lastIndexOf(数组元素)  作用就是返回该数组元素的索引号 从后面开始查找
var arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.lastIndexOf('blue')); // 4
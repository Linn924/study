// 1. 翻转数组
var arr = [1, 20, 8, 7, 10]
arr.reverse()
console.log(arr)

// 2. 数组排序（冒泡排序）
var arr1 = [13, 4, 77, 1, 7];
// arr1.sort(function (a, b) {
//     //  return a - b; 升序的顺序排列
//     return b - a; // 降序的顺序排列
// });
arr1.sort( (a,b) => a-b )
console.log(arr1);
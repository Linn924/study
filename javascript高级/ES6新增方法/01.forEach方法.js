// forEach 迭代(遍历) 数组
var arr = [1, 2, 3];
var sum = 0;
arr.forEach(function (value, index, array) {
    console.log('每个数组元素' + value);
    console.log('每个数组元素的索引号' + index);
    console.log('数组本身' + array);
    sum += value;
})
console.log(sum);
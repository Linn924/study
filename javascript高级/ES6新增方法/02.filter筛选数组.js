// filter 筛选数组
var arr = [12, 66, 4, 88, 3, 7];
var newArr = arr.filter(function(value, index) {
    return value >= 20;
    // return value % 2 === 0;
});
console.log(newArr);

// 字符串的不可变性 
//先开辟一个内存空间里面放上andy数据  再新开一个内存空间里面放上red数据 将str指向新开辟空间的地址
var str = 'andy';
console.log(str);
str = 'red';
console.log(str);
// 因为我们字符串的不可变所以不要大量的拼接字符串
// var str = '';
// for (var i = 1; i <= 1000000000; i++) {
//     str += i;
// }
// console.log(str);
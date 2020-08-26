// Math数学对象 不是一个构造函数 ，所以我们不需要new 来调用 而是直接使用里面的属性和方法即可
console.log(Math.PI); // 一个属性 圆周率
console.log(Math.max(1, 99, 3)); // 99
console.log(Math.max(-1, -10)); // -1
console.log(Math.max(1, 99, 'Linn')); // 如果有任一参数不能被转换为数值，则结果为 NaN
console.log(Math.max()); // 没有参数，则结果为 - Infinity

var arr = [1, 2, 3]
console.log(Math.max(...arr))// ... 是展开运算符 需要展开数组成为一组数据  结果 3
 

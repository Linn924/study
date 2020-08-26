 // 利用函数求任意个数的最大值
 function getMax() { // arguments = [1,2,3]
     var max = arguments[0];
     for (var i = 1; i < arguments.length; i++) {
         if (arguments[i] > max) {
             max = arguments[i];
         }
     }
     return max;
 }
 console.log(getMax(1, 2, 3));
 console.log(getMax(1, 2, 3, 4, 5));
 console.log(getMax(11, 2, 34, 444, 5, 100));
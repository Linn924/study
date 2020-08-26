// 函数就是封装了一段可以被重复执行调用的代码块 目的： 就是让大量代码重复使用
function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(1, 100);
getSum(10, 50);
getSum(1, 1000);
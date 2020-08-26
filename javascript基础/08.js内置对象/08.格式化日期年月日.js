// 格式化日期 年月日 
var date = new Date();
// console.log(date.getFullYear()); // 返回当前日期的年  2020
// console.log(date.getMonth() + 1); // 月份 返回的月份小1个月   月份+1
// console.log(date.getDate()); // 返回的是 几号
// console.log(date.getDay()); // 4  周一返回的是 1 周六返回的是 6 但是 周日返回的是 0

var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var day = date.getDay();
console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
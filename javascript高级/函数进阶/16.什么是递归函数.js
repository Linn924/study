// 递归函数 : 函数内部自己调用自己, 这个函数就是递归函数
var num = 1;

function fn() {
    console.log('我要打印6句话');

    if (num == 6) {
        return; // 递归里面必须加退出条件
    }
    num++;
    fn();
}
fn();

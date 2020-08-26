// call 方法
function fn(x, y) {
    console.log('我想喝手磨咖啡');
    console.log(this);
    console.log(x + y);


}
var o = {
    name: 'andy'
};
// fn();
// call() 可以调用函数
// fn.call();
// call() 可以改变这个函数的this指向 此时这个函数的this 就指向了o这个对象
fn.call(o, 1, 2);

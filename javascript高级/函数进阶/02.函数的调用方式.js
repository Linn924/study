// 函数的调用方式

// 普通函数
function fn() {
    console.log('人生的巅峰');

}
// fn();   
fn.call()

// 对象的方法
var o = {
    sayHi: function() {
        console.log('人生的巅峰');

    }
}
o.sayHi();

// 构造函数
function Star() {};
new Star();

// 绑定事件函数
// btn.onclick = function() {};   // 点击了按钮就可以调用这个函数

// 定时器函数
// setInterval(function() {}, 1000);  这个函数是定时器自动1秒钟调用一次

// 立即执行函数
(function() {
    console.log('人生的巅峰');
})();
// 立即执行函数是自动调用

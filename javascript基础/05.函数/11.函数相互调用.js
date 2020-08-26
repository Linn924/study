// 函数是可以相互调用的
// function fn1() {
//     console.log(11);
//     fn2(); // 在fn1 函数里面调用了 fn2 函数
// }
// fn1();

// function fn2() {
//     console.log(22);

// }

function fn1() {
    console.log(111);
    fn2();
    console.log('fn1');
}

function fn2() {
    console.log(222);
    console.log('fn2');
}
fn1();
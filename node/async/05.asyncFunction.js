//异步函数 async关键字
//异步函数默认的返回值是promise对象
//在异步函数内部使用throw关键字进行错误抛出

// 1. 普通函数定义前加async关键字 普通函数变成异步函数
// 2. 异步函数默认返回promise对象
// 3. 在异步函数内部使用return关键字进行结果返回 结果会被包裹的promise对象中 return关键字代替了resolve方法
// 4. 在异步函数内部使用throw关键字抛出程序异常
// 5. 调用异步函数再链式调用then方法获取异步函数执行结果
// 6. 调用异步函数再链式调用catch方法获取异步函数执行的错误信息

// 1. await关键字只能出现在异步函数中
// 2. await promise await后面只能写promise对象 写其他类型的API是不不可以的
// 3. await关键字可是暂停异步函数向下执行 直到promise返回结果





// async function fn() {
//     throw '发生了错误'
//     return 123
// }

// console.log(fn())

// fn().then( data => {
//     console.log(data)
// }).catch( err => {
//     console.log(err)
// })

//await关键字
//只能出现在异步函数内部
//可以暂停异步函数的执行 等待promise对象返回结果后再向下执行函数 return 关键词替换了resolve方法

async function p1() {
    return 'p1'
}
async function p2() {
    return 'p2'
}
async function p3() {
    return 'p3'
}

async function run() {
    let r1 = await p1()//p1()有返回结果才向下执行
    let r2 = await p2()
    let r3 = await p3()
    console.log(r1,r2,r3)
}

run()
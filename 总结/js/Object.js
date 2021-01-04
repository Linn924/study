// 1. Object.assign
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// 只能深拷贝一层，不能拷贝多层 

// let obj = {a:1}
// let copyObj = Object.assign({},obj)

// copyObj.a = 0

// console.log(copyObj) //{ a: 0 }
// console.log(obj) //{ a: 1 }

// let obj = {a:1,b:{name:'simon'}}
// let copyObj = Object.assign({},obj)

// copyObj.b.name = 'Linn'

// console.log(copyObj) //{ a: 1, b: { name: 'Linn' } }
// console.log(obj) //{ a: 1, b: { name: 'Linn' } }

// 2. Object.values()
// Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )

// var obj1 = { foo: 'bar', baz: 42 }
// console.log(Object.values(obj1)); //['bar', 42]

// var obj2 = { 0: 'a', 1: 'b', 2: 'c' }
// console.log(Object.values(obj2)) //['a', 'b', 'c']

// var obj3 = { a: 'a', b:{name:'simon'} }
// console.log(Object.values(obj3)) //[ 'a', { name: 'simon' } ]

// 3. Object.keys()
// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

// var arr = ['a', 'b', 'c']
// console.log(Object.keys(arr)) // console: ['0', '1', '2']

// var obj = { 0: 'a', 1: 'b', 2: 'c' }
// console.log(Object.keys(obj)) // console: ['0', '1', '2']
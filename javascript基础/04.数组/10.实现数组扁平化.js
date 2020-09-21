// 概念:数组扁平化是指将一个多维数组变为一维数组
// 例:[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]

// 1. reduce
// function flatten(arr){
//     return arr.reduce( (result,item) => result.concat(Array.isArray(item) ? flatten(item) : item) ,[])
// }

// var arr = [1, [2, 3, [4, 5]]]
// console.log(flatten(arr))


// 2. toString & split
// function flatten(arr) {
//     return arr.toString().split(',').map(item => Number(item))
// } 

// var arr = [1, [2, 3, [4, 5]]]
// console.log(flatten(arr))

// 3. join & split
// function flatten(arr){
//     return arr.join(',').split(',').map(item => Number(item))
// }

// var arr = [1, [2, 3, [4, 5]]]
// console.log(flatten(arr))


// 4.扩展运算符展开
// console.log([].concat(...[1, 2, 3, [4, 5]]) ) // [1, 2, 3, 4, 5]

function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

var arr = [1, [2, 3, [4, 5]]]
console.log(flatten(arr))


//最高效方法
var a = [1,2,3,4,5,6,7,8,9,1],b = [9,8,8,8,77,99,55,21,3,5,4]



//1.for...of + Object

//目前来说最高效

var myFilter = function(arr1,arr2){
    //合并数组 通过扩展运算符展开两个数组
    var arr = [...arr1,...arr2],obj = {},result = []

    //通过for of 遍历数组 如果对象obj中没有属性为i的属性值 则把i存入result中
    for(let i of arr){
        if(!obj[i]){
            result.push(i)
            obj[i] = 1
        }
        
    }
    return result
}

console.log(myFilter(a,b))


//2.new Set()

// var myFilter = function (arr1,arr2) {
//     return Array.from(new Set([...arr1,...arr2])) //去重
// }

// console.log(myFilter(a,b))

//3.Array.sort()

// var myFilter = function(arr1,arr2){
//     //数组合并 且 排序
//     var arr = [...arr1,...arr2].sort()
//     var result = [arr[0]]

//     for(let i = 1; i<arr.length;i++){
//         arr[i] !== arr[i-1] && result.push(arr[i])
//     }
//     return result
// }

// console.log(myFilter(a,b))

//4.for of + includes()

// var myFilter = function(arr1,arr2){
//     var arr = [...arr1,...arr2],result = []

//     for(let i of arr){
//         !result.includes(i) && result.push(i)
//     }
//     return result
// }

// console.log(myFilter(a,b))

//5.Array.filter() + indexOf

// var myFilter = function(arr1,arr2){
//     var arr = [...arr1,...arr2]

//     return arr.filter( (item,index) => {
//         return arr.indexOf(item) === index
//     })
// }

// console.log(myFilter(a,b))

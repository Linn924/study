/*
    常用数组方法
*/


// 1. Array.map()
// 此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并没有改变原来的数组

//let arr = [1,2,3,4,5]
// let newArr = arr.map(item => item*2)

// console.log(arr) //[ 1, 2, 3, 4, 5 ]
// console.log(newArr) //[ 2, 4, 6, 8, 10 ]


// 2. Array.forEach()
// 方法对数组的每个元素执行一次给定的函数。没有返回值，注意和map方法区分

// let arr = [1,2,3,4,5]

// arr.forEach(item => console.log(item))


// 3. Array.filter()
// 此方法是将所有元素进行判断，将满足条件的元素作为一个新的数组返回

// let arr = [1,2,3,4,5]
// let newArr = arr.filter( item => item > 2 )

// console.log(newArr) //[ 3, 4, 5 ]


// 4. Array.every()
// 此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回true，否则为false

// let arr = [1,2,3,4,5]
// let test = arr.every(item => item > 0)
// let test1 = arr.every(item => item > 1)

// console.log(test) //true
// console.log(test1) //false


// 5. Array.some()
// 此方法是将所有元素进行判断返回一个布尔值，如果存在元素都满足判断条件，则返回true，若所有元素都不满足判断条件，则返回false

// let arr = [1,2,3,4,5]
// let test = arr.some(item => item > 5)
// let test1 = arr.some(item => item > 1)

// console.log(test) //false
// console.log(test1) //true


// 6. Array.reduce()
// 此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型

// let arr = [1, 2, 3, 4, 5]
// const add = (a, b) => a + b
// let sum = arr.reduce(add)

// console.log(sum) // 15


// 7. Array.push()
// 此方法是在数组的后面添加新加元素，此方法改变了数组的长度

// let arr = [1, 2, 3, 4, 5]
// arr.push(6)

// console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]


// 8. Array.pop()
// 此方法在数组后面删除最后一个元素，并返回数组，此方法改变了数组的长度

// let arr = [1, 2, 3, 4, 5]
// arr.pop()

// console.log(arr) //[ 1, 2, 3, 4 ]


// 9. Array.unshift()
// 此方法是将一个或多个元素添加到数组的开头，并返回新数组的长度

// let arr = [1, 2, 3, 4, 5]
// arr.unshift(0)

// console.log(arr) //[0, 1, 2, 3, 4, 5]


// 10. Array.shift()
// 此方法删除数组的第一个元素，并返回数组，此方法改变了数组的长度

// let arr = [1, 2, 3, 4, 5]
// arr.shift()

// console.log(arr) //[2, 3, 4, 5]


// 11. Array.isArray()
// 判断一个对象是不是数组，返回的是布尔值

// let arr = [1, 2, 3, 4, 5]

// console.log(Array.isArray(arr)) //true


// 12. Array.concat()
// 此方法是一个可以将多个数组拼接成一个数组

// let arr1 = [1, 2, 3],arr2 = [4, 5]
// let arr = arr1.concat(arr2)

// console.log(arr)//[1, 2, 3, 4, 5]


// 13. Array.toString()
// 此方法将数组转化为字符串

// let arr = [1, 2, 3, 4, 5]
// let str = arr.toString()

// console.log(str) // 1,2,3,4,5


// 14. Array.join()
// 此方法也是将数组转化为字符串

// let arr = [1, 2, 3, 4, 5]
// let test = arr.join() 
// let test1 = arr.join('') 
// let test2 = arr.join(' ') 

// console.log(test) //1,2,3,4,5
// console.log(test1) //12345
// console.log(test2) //1 2 3 4 5


// 15. Array.splice(开始位置， 删除的个数，元素)
// 万能方法，可以实现增删改

// let arr1 = [1, 2, 3, 4, 5]
// arr1.splice(2, 0,'haha')
// let arr2 = [1, 2, 3, 4, 5]
// arr2.splice(2, 3)
// let arr3 = [1, 2, 3, 4, 5]
// arr3.splice(2, 1,'haha')


// console.log(arr1) //[1, 2, 'haha', 3, 4, 5]新增一个元素
// console.log(arr2) //[1, 2] 删除三个元素
// console.log(arr3) //[1, 2, 'haha', 4, 5] 替换一个元素


// 16. Array.findIndex()
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1

// let arr = [1, 2, 3, 4, 5]
// let index = arr.findIndex(item => item > 3)
// let index1 = arr.findIndex(item => item > 6)

// console.log(index) // 3
// console.log(index1) // -1

// 17. Array.includes()
// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false

// let arr = [1, 2, 3, 4, 5]
// let test = arr.includes(1)
// let test1 = arr.includes(6)

// console.log(test) // true
// console.log(test1) // false


// 18. Array.indexOf()
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

// let arr = [1, 2, 3, 4, 5, 2]

// let test = arr.indexOf(2) 
// let test1 = arr.indexOf(0) 

// console.log(test) // 1
// console.log(test1) // -1

// 19. Array.reverse()
// reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组

// let arr = [1, 2, 3, 4, 5]
// arr.reverse()

// console.log(arr) //[ 5, 4, 3, 2, 1 ]

// 20. Array.slice()
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.slice(2)) //[ 3, 4, 5 ]
// console.log(arr.slice(2,4)) //[ 3, 4 ]
// console.log(arr.slice(1,5)) //[ 2, 3, 4, 5 ]
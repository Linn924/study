const fs = require('fs')
const promisify = require('util').promisify//promisify方法改造现有node异步api，使得返回promise对象
const readFile = promisify(fs.readFile)//将fs.readFile方法包装成一个返回promise对象的方法

async function run() {
   let data1 = await readFile('./1.txt','utf8')
   let data2 = await readFile('./2.txt','utf8')
   let data3 = await readFile('./3.txt','utf8')
   console.log(data1)
   console.log(data2)
   console.log(data3)
}

run()
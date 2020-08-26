//相对路径和绝对路径

//相对路径相对的是命令行工具的当前工作目录
//写绝对路径不会因为当前文件的工作目录影响读取

const fs = require('fs')
const path = require('path')
var realpath = path.join(__dirname,'readFile.txt') //此时是绝对路径 __dirname是当前文件的绝对路径

console.log(realpath)

fs.readFile(realpath,'utf8',(err,doc) => {
    console.log(err)
    console.log(doc)
})
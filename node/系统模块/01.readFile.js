const fs = require('fs')

// fs.reaFile('文件路径/文件名称','utf8', callback)

//读取文件
fs.readFile('./readFile.txt','utf-8',(err,doc) => {
    //如果文件读取出错 err 是一个对象包含错误信息
    //如果文件读取正确 err 是 null
    //doc是文件读取的结果
    console.log(err)
    if(err == null){
        console.log(doc)
    }
})
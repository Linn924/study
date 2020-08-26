const fs = require('fs')

// fs.writeFile('文件路径/文件名称', '数据', callback)

//读取文件
var content = '写入数据'

//没有writeFile文件会自动创建
fs.writeFile('./writeFile.txt',content,err => {

    //err不为空写入失败
    if (err != null) { 
        console.log(err);
        return;
    }
    console.log('文件写入成功');
})

//修改数据，再次把数据写入文件，会覆盖原有文件中的数据
//有关数据库的操作都是异步的
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err,'数据库连接失败'))
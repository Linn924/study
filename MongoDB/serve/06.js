//引入第三方模块操作数据库  
const mongoose = require('mongoose')

//数据库连接(创建数据库)
mongoose.connect('mongodb://localhost/demo',{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err,'数据库连接失败'))


//创建集合规则 (设计表)
const adminSchema = new mongoose.Schema({
    name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
})

//使用规则创建集合(保存成admins表)
// 1.集合名称
// 2.集合规则
const Admin = mongoose.model('Admin',adminSchema) // admins

// 更新集合中的单个文档 result是一个对象
// Admin.updateOne({name:'李四'},{name:'simon'}).then(result => console.log(result)) 

// 传递一个空对象 修改全部的文档 result对象 { n: 6, nModified: 6, ok: 1 }
// Admin.updateMany({},{age:20}).then(result => console.log(result)) 
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


// 查询到一条文档并且删除
// 返回删除的文档
// 如果查询条件匹配了多个文档 那么将会删除第一个文档
// Admin.findOneAndDelete({_id:'5c09f267aeb04b22f8460968'}).then(result => console.log(result))

// 传递的是空对象 默认删除Admin集合的所有文档 返回一个对象 有两个属性 删除文档的个数 以及 成功删除标志
// Admin.deleteMany({}).then(result => console.log(result))
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

// 查询用户集合中的所有文档
// Admin.find().then(result => console.log(result));

// 通过_id字段查找文档
// Admin.find({_id: '5c09f267aeb04b22f8460968'}).then(result => console.log(result))

// findOne方法返回一条文档 默认返回当前集合中的第一条文档
// Admin.findOne({name: '李四'}).then(result => console.log(result))

// 查询用户集合中年龄字段大于20并且小于40的文档
// Admin.find({age: {$gt: 20, $lt: 40}}).then(result => console.log(result))

// 查询用户集合中hobbies字段值包含足球的文档
// Admin.find({hobbies: {$in: ['足球']}}).then(result => console.log(result))

// 选择要查询的字段(-_id 是去除此字段)
// Admin.find().select('name email -_id').then(result => console.log(result))

// 根据年龄字段进行升序排列
// Admin.find().sort('age').then(result => console.log(result))

// 根据年龄字段进行降序排列
// Admin.find().sort('-age').then(result => console.log(result))

// 查询文档跳过前两条结果 限制显示3条结果
// Admin.find().skip(2).limit(3).then(result => console.log(result))



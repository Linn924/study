//引入第三方模块操作数据库  
const mongoose = require('mongoose')

//数据库连接(创建数据库)
mongoose.connect('mongodb://localhost/demo',{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err,'数据库连接失败'))


//创建集合规则 (设计表)
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    isGraduated:Boolean
})

//使用规则创建集合(保存成users表)
// 1.集合名称
// 2.集合规则
const User = mongoose.model('User',userSchema) // users

//也能插入数据
// User.create({
//     name:'linn',
//     age:20,
//     isGraduated:false
// },(err,result)=>{
//     console.log(err)
//     console.log(result)
// })


//或者用这种写法
User.create({
    name:'simon-linn',
    age:20,
    isGraduated:false
})
.then(result => console.log(result))
.catch(err => console.log(err))
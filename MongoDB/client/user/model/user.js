const mongoose = require('mongoose')

//创建用户集合规则
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    age:{
        type:Number,
        min:18,
        max:80
    },
    password:String,
    email:String,
    hobbies:[String]
})

//创建用户集合
const User = mongoose.model('User',userSchema)

module.exports = User
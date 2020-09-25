//引入第三方模块操作数据库  
const mongoose = require('mongoose')

//数据库连接(创建数据库)
mongoose.connect('mongodb://localhost/demo',{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err,'数据库连接失败'))


//创建集合规则 (设计表)
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        // 必选字段
        required:[true,'请传入文章标题'],
        // 字符串的最小长度
        minlength:[1,'文章长度不能小于1'],
        // 字符串的最大长度
        maxlength:[10,'文章长度不能大于10'], 
        // 去除字符串两边的空格
        trim:true
    },
    age: {
		type: Number,
		// 数字的最小范围
		min: 18,
		// 数字的最大范围
		max: 100
    },
    publishDate: {
		type: Date,
		// 不传值就是默认值（默认是当前时间）
		default: Date.now
    },
    category: {
		type: String,
		// 枚举 列举出当前字段可以拥有的值
		enum: {
			values: ['html', 'css', 'javascript', 'node.js'],
			message: '分类名称要在一定的范围内才可以'
		}
    },
    author: {
		type: String,
		validate: {
			validator: v => {
				// 返回布尔值
				// true 验证成功
				// false 验证失败
				// v是要验证的值
				return v && v.length > 4
			},
			// 自定义错误信息
			message: 'author传入的值不符合验证规则'
		}
	}
})

const Post = mongoose.model('Post',postSchema)

Post.create({title:'mongodb数据库',age:20,category:'node.js',author:'si'})
    .then(result => console.log(result))
    .catch(error => {
        // 获取错误信息对象
        const err = error.errors
        // 循环错误信息对象
        for(let i in err){
            // 将错误信息打印到控制台中
            console.log(err[i]['message'])
        }
    })

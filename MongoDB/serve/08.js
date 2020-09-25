// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/demo', { useNewUrlParser: true,useUnifiedTopology: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));

// 用户集合规则
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

// 文章集合规则
const postSchema = new mongoose.Schema({
	title: {
		type: String
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});
// 用户集合
const User = mongoose.model('User', userSchema);
// 文章集合
const Post = mongoose.model('Post', postSchema);

// 创建用户
// User.create({name: 'simon'}).then(result => console.log(result));
// 创建文章
// Post.create({title: '集合关联', author: '5f6dd619cf757c2aa077bf67'}).then(result => console.log(result));


Post.find().populate('author').then(result => console.log(result))
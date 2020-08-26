var ary = [{
	id: 1,
	name: '张三'
}, {
	id: 2,
	name: '李四'
}];
let target = ary.find(item => item.id == 2);// 找出第一个符合条件的数组成员
console.log(target) // 找不到返回undefined

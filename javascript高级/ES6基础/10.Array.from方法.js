var arrayLike = {
	"0": "张三",
	"1": "李四",
	"2": "王五",
	"length": 3
}

var ary = Array.from(arrayLike);
console.log(ary)

// var arrayLike = {
// 	"0": "1",
// 	"1": "2",
// 	"length": 2
// }

// var ary = Array.from(arrayLike, item => item * 2)
// console.log(ary)

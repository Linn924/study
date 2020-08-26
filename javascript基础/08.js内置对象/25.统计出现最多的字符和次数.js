// 有一个对象 来判断是否有该属性 对象['属性名']
// var o = {
//     age: 18
// }
// if (o['sex']) {
//     console.log('里面有该属性');

// } else {
//     console.log('没有该属性');

// }

//  判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数。
// o.a = 1
// o.b = 1
// o.c = 1
// o.o = 4
// 核心算法：利用 charAt(） 遍历这个字符串
// 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1
// 遍历对象，得到最大值和该字符
var str = 'abcoefoxyozzopp'
var obj = {}
for (var i = 0; i < str.length; i++){
    var ch = str[i]
    if (obj[ch]) {
        obj[ch]++
    } else {
        obj[ch] = 1
    }
}
var max = 0 , result;
for (var k in obj) {
    if (obj[k] > max) {
        max = obj[k]
        result = k
    }
}
console.log('出现字母最多的是:' + result)
console.log('出现了:' + max + '次')
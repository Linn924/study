// 1.目标： 把旧数组里面不重复的元素选取出来放到新数组中， 重复的元素只保留一个， 放到新数组中去重。
// 2.核心算法： 我们遍历旧数组， 然后拿着旧数组元素去查询新数组， 如果该元素在新数组里面没有出现过， 我们就添加， 否则不添加。
// 3.怎么知道该元素没有存在？ 利用 新数组.indexOf(数组元素) 如果返回时 - 1 就说明 新数组里面没有改元素
// 封装一个 去重的函数 unique 独一无二的 

function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

var arr = [3, 5, 1, 4, 7, 5, 1]

console.log(unique(arr))
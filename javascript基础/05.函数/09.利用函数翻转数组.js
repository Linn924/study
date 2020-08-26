var a = [1, 2, 3, 4, 5]

function reserve(arr) {
    var arr1 = []
    for (var i = arr.length; i >= 0; i--){
        arr1[arr1.length] = arr[i]
    }
    return arr1
}
console.log(reserve(a))

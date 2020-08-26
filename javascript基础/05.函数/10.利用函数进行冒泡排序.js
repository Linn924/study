var a = [4, 1, 2, 3, 5]

function mpsort(arr) {
    var flag
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j > i; j--) {
            if (arr[i] > arr[j]) {
                flag = arr[i]
                arr[i] = arr[j]
                arr[j] = flag
            }
        }
    }
    return arr
}

console.log(mpsort(a))
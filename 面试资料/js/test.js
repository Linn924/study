
//1. 递归(有严重的效率问题)
function fbnq(n){
    if(n == 0 || n == 1){
        return n
    }else{
        return fbnq(n-1) + fbnq(n-2)
    }
}

//2.循环
function fbnq(n){
    let arr = [0,1]
    if(n<2){
        return arr[n]
    }else{
        let tmp = 0,fbnqOne = 0,fbnqTwo = 1
        for(let i = 2;i<=n;i++){
            tmp = fbnqOne + fbnqTwo 
            fbnqOne = fbnqTwo
            fbnqTwo = tmp
        }
        return tmp
    }
}

function fbnqArr(n){
    let arr = []
    for(var i = 0 ; i<=n;i++){
        arr.push(fbnq(i))
    }
    return arr
}

console.log(fbnqArr(10))
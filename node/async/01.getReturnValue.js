//异步
// var test = () => {
//     setTimeout( () =>{
//         return {
//             msg:'异步api无法通过返回值拿到结果'
//         }
//     },200)
// }

// console.log(test())



function test(callback) {
    setTimeout( () =>{
        callback({
            msg:'异步api通过回调函数拿到结果'
        })
    },200)
}

test(function(data){
    console.log(data)
})
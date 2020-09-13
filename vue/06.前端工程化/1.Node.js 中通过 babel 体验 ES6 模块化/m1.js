let a = 10
let c = 20
let d = 30

function show() {
    console.log('1111111111111')
}

//默认导出
export default {
    a,
    c,
    show
}


//按需导出
export let s1 = 'aaa'
export let s2 = 'bbb'
export function say() {
    console.log('ooo')
}



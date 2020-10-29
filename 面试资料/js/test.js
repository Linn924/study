function isObjectValueEqual(a, b) {
    let aProps = Object.getOwnPropertyNames(a)
    let bProps = Object.getOwnPropertyNames(b)

    if (aProps.length != bProps.length) {
        return false
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]
        let propA = a[propName]
        let propB = b[propName]
        if(propA instanceof Object){
            return isObjectValueEqual(propA, propB)
        }else if(propA !== propB){
            return false
        }
    }

   return true
}

var a = {
    id:1,
    c:{
        age:2
    },
    name:2
};
var b = {
    id:1,
    name:2,
    c:{
        age:3
    }
}
console.log(isObjectValueEqual(a,b));
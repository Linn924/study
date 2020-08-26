// class Father {
//     constructor() {
//     }
//     money() {
//         console.log(100)
//     }
// }

// class Son extends Father{
// }

// var son = new Son()
// son.money() // 100

class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x + this.y)
    }
}

class Son extends Father {
    constructor(x,y) {
        super(x,y) //调用了父类中的构造函数
    }
}

var son = new Son(1,2)
son.sum()
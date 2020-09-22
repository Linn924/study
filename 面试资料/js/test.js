var name = 'Linn'

var simon = {
    name:'simon',
    getName:()=>{
        console.log(this)
        console.log(this.name)
    }
}

var Simon = {
    name:'simon',
    getName:function(){
        setTimeout(()=>{
            console.log(this)
            console.log(this.name)
        },1000)
    }
}


simon.getName()
Simon.getName()
import React from 'react'
import ReactTypes from 'prop-types'

export default class Counter extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name:'linn',
            count:props.initcount//把外界传递过来的数据赋值给count
        }
    }

    //使用静态的defaultProps属性，设置组件的默认属性值
    static defaultProps = {
        initcount:0,//如果外界没有传递默认属性，则初始化一个
    }

    //创建静态的propTypes对象，这个对象可以把外界传递的属性做类型校验
    //想要校验必须安装依赖包 prop-types
    static propTypes = {
        initcount:ReactTypes.number
    } 

    //在组件即将挂在到页面上的时候执行，此时组件尚未挂载到页面中。虚拟dom没有创建
    //这个阶段不能操作页面上的dom元素
    componentWillMount(){//等同于Vue中的created生命周期函数
        // console.log(document.getElementById("myh3"))//null
        // console.log(this.props.initcount)//3 可以获取
        // console.log(this.state.name)//linn 可以获取
        // this.myselfFunction()//可用
    }

    //此生命周期，即将开始渲染虚拟dom 执行完此函数，内存中就有了一个渲染好的虚拟dom，但页面上并不会显示
    render() {
        // console.log(document.getElementById("myh3"))//null return前虚拟dom并没有创建 页面为空

        // 在 组件运行阶段中，每当调用 render 函数的时候，页面上的 DOM元素，还是之前旧的
        // console.log(this.refs.h3 && this.refs.h3.innerHTML);

        // 不要在 render 中使用 this.setState,因为 会陷入死循环
        /*  this.setState({
                count: this.state.count + 1
            }) 
        */

        return <div>
            <h1>这是Counter计数器组件</h1>
            <input type="button" value="+1" id="btn" onClick={this.increment}/>
            <hr/>
            <h3 id="myh3" ref="h3">当前的数量是：{this.state.count}</h3>
        </div>
    }

    //当组件挂载到页面上之后，会进入这个生命周期函数，只要进入这个生命周期函数，页面上必然有可见的dom元素了
    //组件执行完此函数后，就进入到了运行中状态，此函数是创建阶段的最后一个函数
    componentDidMount(){
        // console.log(document.getElementById("myh3"))//拿到数据
        // var btn = document.getElementById('btn')//不推荐
        // btn.onclick = ()=> {
        //     //  this.props.initcount++
        //     this.setState({
        //         count:this.state.count + 1
        //     })
        // }
    }

    //从这里开始，就进入到了组件的运行中状态 判断组件是否需要更新
    shouldComponentUpdate(nextProps, nextState) {
        // 1. 在 shouldComponentUpdate 中要求必须返回一个布尔值
        // 2. 在 shouldComponentUpdate 中，如果返回的值是 false，则 不会继续执行后续的生命周期函数，而是直接退回到了 运行中 的状态，此时有序 后续的 render 函数并没有被调用，因此，页面不会被更新，但是， 组件的 state 状态，却被修改了；
        // return false

        // 需求： 如果 state 中的 count 值是偶数，则 更新页面，如果 count 值 是奇数，则不更新页面，我们想要的页面效果：4，6，8，10，12....
        // 经过打印测试发现，在 shouldComponentUpdate 中，通过 this.state.count 拿到的值，是上一次的旧数据，并不是当前最新的；
        // console.log(this.state.count)
        // return nextState.count % 2 === 0 ? true : false


        return true
    }

    // 组件将要更新，此时尚未更新，在进入这个 生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的 DOM 元素 也是旧的
    componentWillUpdate() {
        // 经过打印分析，得到，此时页面上的 DOM 节点，都是旧的，应该慎重操作，因为你可能操作的是旧DOM
        // console.log(document.getElementById('myh3').innerHTML)
        // console.log(this.refs.h3.innerHTML);
    }

    // 组件完成了更新，此时，state 中的数据、虚拟DOM、页面上的DOM，都是最新的，此时，你可以放心大胆的去操作页面了
    componentDidUpdate() {
        // console.log(this.refs.h3.innerHTML)
    }


    increment = ()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

    myselfFunction(){
        console.log('与生命周期无关');
    }
}
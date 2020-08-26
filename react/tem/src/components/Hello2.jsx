import React from 'react'
// 使用 class 创建的类，通过 extends 关键字，继承了 React.Component 之后，这个类，就是一个组件的模板了
// 如果想要引用这个组件，可以把 类的名称， 以标签形式，导入到 JSX 中使用
// 在 class 实现的组件内部，必须定义一个 render 函数
// 在 render 函数中，还必须 return ，如果没有什么需要被return 的，则需要 return null
// 在class定义的组件中，可以直接使用 this.props 来直接访问，不需要预先接收 props
// 只要是 组件的 props，都是只读的
// 如果使用 extends 实现了继承， 那么在 constructor 的第一行， 一定要显示调用一下 super()
// 在 constructor 中，如果想要访问 props 属性，不能直接使用 this.props， 而是需要在 constructor 的构造器参数列表中，显示的定义 props 参数来接收，才能正常使用；
export default class Hello2 extends React.Component{

  constructor(props) {
    super(props)
    // console.log(props)

    // 固定写法，this.state 表示 当前组件实例的私有数据对象，就好比 vue 中，组件实例身上的 data(){ return {} } 函数
    // 如果想要使用 组件中 state 上的数据，直接通过 this.state.*** 来访问即可
    this.state = {
      msg: '这是 Hello2 组件的私有msg数据',
      info: '1211'
    }
  }

  render() {
    return <div>
      <p>这是使用class类创建的组件</p>
      <p>这是外界传递的数据 --{this.props.name}--{this.props.age}</p> {/*this指向当前类*/}
      <p>{this.state.msg}</p>
      <br />



      {/* 1.1 在React中，如果想要为元素绑定事件，不能使用 网页中 传统的 onclick 事件，而是需要 使用 React 提供的  onClick */}
      {/* 1.2 也就是说：React中，提供的事件绑定机制，使用的 都是驼峰命名，同时，基本上，传统的 JS 事件，都被 React 重新定义了一下，改成了 驼峰命名 onMouseMove  */}
      {/* 2.1 在 React 提供的事件绑定机制中，事件的处理函数，必须直接给定一个 function，而不是给定一个 function 的名称 */}
      {/* 2.2 在为 React 事件绑定 处理函数的时候，需要通过 this.函数名， 来把 函数的引用交给 事件 */}
      <input type="button" value="修改msg" id="btnChangeMsg" onClick={this.changeMsg}/>
    </div>
  }


  changeMsg = ()=>{
    // console.log(this);//this指向当前实例Hello2
    // this.state.msg = '123'//可以修改数据 但页面没有变化 不要用这种方式
    // this.setState({msg:'123'})//用这种方式赋值 其余的属性仍有

    // this.setState 方法，也支持传递一个 function，如果传递的是 function，则在 function 内部，必须return 一个 对象；
    // 在 function 的参数中，支持传递两个参数，其中，第一个参数是 prevState，表示为修改之前的 老的 state 数据
    // 第二个参数，是 外界传递给当前组件的 props 数据
    this.setState(function (prevState,props) {
      // console.log(prevState);
      // console.log(props);
      return {
        msg:'123'
      }
    }, function () {
        // this.setState 是异步执行的，如果想要立即拿到最新数据，在回调函数中去操作新数据
        console.log(this.state.msg)//新数据
    })
    // console.log(this.state.msg)//旧数据

    // this.setState 在调用的时候，内部是异步执行的，当立即调用完 this.setState 后，输出 state 值可能是旧的
  }
}
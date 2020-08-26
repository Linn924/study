// 1. 在 React 学习中，需要安装 两个包 react  react-dom
// 1.1 react 这个包，是专门用来创建React组件、组件生命周期等这些东西的；
// 1.2 react-dom 里面主要封装了和 DOM 操作相关的包，比如，要把 组件渲染到页面上
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 在 react 中，如要要创建 DOM 元素了，只能使用 React 提供的 JS API 来创建，不能【直接】像 Vue 中那样，手写 HTML 元素
// React.createElement() 方法，用于创建 虚拟DOM 对象，它接收 3个及以上的参数
// 参数1： 是个字符串类型的参数，表示要创建的元素类型
// 参数2： 是一个属性对象，表示 创建的这个元素上，有哪些属性
// 参数3： 从第三个参数的位置开始，后面可以放好多的虚拟DOM对象，这写参数，表示当前元素的子节点

// var H1 = React.createElement('h1',null,'大大的h1')
// var myDiv = React.createElement('div', {
//     title: 'this is a div',
//     id:'mydiv'
// }, '这是一个div',H1)

// var title = '数据'
// var arr = []
// for (let i = 1; i <= 10; i++){
//     var p = <p title={title} key={i}>循环第{i}个</p>
//     arr.push(p)
// }

// var myDiv = <div>
//     <p title={title + 'aaa'} className="msp">这是用jsx语法创建的div元素</p>
//     <label htmlFor="input-id">123</label>
//     {arr}
//     {
//         //这是注释
//     }
//     {/* 这是多行注释 */}
// </div>


// ReactDOM.render('要渲染的虚拟DOM元素', '要渲染到页面上的哪个位置中')
// 注意： ReactDOM.render() 方法的第二个参数，和vue不一样，不接受 "#app" 这样的字符串，而是需要传递一个 原生的 DOM 对象
// ReactDOM.render(myDiv,document.getElementById('app'))



// 在React中，构造函数，就是一个最基本的组件
// 如果想要把组件放到页面中，可以把 构造函数的名称，当作 组件的名称，以 HTML标签形式引入页面中即可
// 注意：React在解析所有的标签的时候，是以标签的首字母来区分的，如果标签的首字母是小写，那么就按照 普通的 HTML 标签来解析，如果 首字母是大写，则按照 组件的形式去解析渲染
// 结论：组件的首字母必须是大写

// function Hello(props) {
//     // 在组件中，如果想要使用外部传递过来的数据，必须，显示的在 构造函数参数列表中，定义 props 属性来接收；
//     // 通过 props 得到的任何数据都是只读的，不能从新赋值
//     return <div>
//         {/* <h1>这是在Hello组件中定义的元素 --- {name} --- {age}</h1> */}
//         <h1>这是在Hello组件中定义的元素  --- {props.name} --- {props.age}</h1>
//     </div>
// }

// var name = "Linn"
// var age = 20

var person = {
    name: 'linn',
    age: 20,
    gender: '男',
    address: '南京'
}

import Hello from './components/Hello.jsx'

// import myclass from './class_study.js'
import myClass from './class_study2.js'

ReactDOM.render(<div>
    {/*<Hello name={name} age={age}></Hello>*/}
    {/* <Hello name={person.name} age={person.age} gender={person.gender} address={person.address}></Hello> */}
    <Hello {...person}></Hello>
</div>, document.getElementById('app'))


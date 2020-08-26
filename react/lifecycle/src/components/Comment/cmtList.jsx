import React from 'react'
import CmtItem from './cmtItem.jsx'
import CmtBox from './cmtBox.jsx'

//评论列表组件
export default class cmtList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            list:[
                { user: 'zs', content: '123' },
                { user: 'ls', content: 'qqq' },
                { user: 'xiaohong', content: 'www' }
            ]
        }
    }

    //在组件尚未渲染的时候，就立即获取数据
    componentWillMount(){
        this.loadCmts()
    }

    render(){
        return <div>
                    <h1>这是评论列表组件</h1>
                    {/* react 中，只要是传递给 子组件的数据，不管是 普通的类型，还是方法，都可以使用 this.props 来调用 */}
                    <CmtBox reload={this.loadCmts}></CmtBox>
                    <hr/>
                    {this.state.list.map( (item,index) =>{
                        return <CmtItem {...item} key={index}></CmtItem>
                    })}
                </div>
    }

    // 从本地存储中加载 评论列表
    loadCmts = () => {
        var list = JSON.parse(localStorage.getItem('cmts') || '[]')
        this.setState({
            list
        })
    }
}
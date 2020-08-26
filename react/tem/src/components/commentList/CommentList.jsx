import React from 'react'
import CommentItem from './CommentItem.jsx'

export default class CommentList extends React.Component{
    constructor(props) {
        super(props)

        //当前组件的私有数据
        this.state = {
            cmts: [
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }

  render() {
    return <div>
      <h1 className="title">评论列表案例</h1>
      {/* 我们可以直接在 JSX 语法内部，使用 数组的 map 函数，来遍历数组的每一项，并使用 map 返回操作后的最新的数组 */}
      {this.state.cmts.map((item,index) => {
        return  <CommentItem {...item} key={index}></CommentItem>
      })}
    </div>
  }
}
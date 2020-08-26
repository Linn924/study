import React from 'react'

import inlineStyles from './cmtItemStyles.js'

//这种直接 import '../路径标识符' 的 CSS 导入形式，并不是模块化的CSS
// import '../../css/commentItem.css'

import itemStyles from '../../css/commentItem.css'//模块化引入

//封装一个评论项
// 写 style 样式时，外层的 { } 表示 要写JS代码了，内层的 { } 表示 用一个JS对象表示样式
// 在 style 的样式规则中，如果 属性值的单位是 px, 则 px 可以省略，直接写一个 数值 即可
export default function CommentItem(props) {
  
  // const boxStyle = {border:'1px solid #ccc',margin:'10px 0',paddingLeft:15}
  // const titleStyle = { fontSize: 16, color: "purple" }
  // const bodyStyle = { fontSize: 14, color: "red" }
  
  // const inlineStyles = {
  //   boxStyle: { border: '1px solid #ccc', margin: '10px 0', paddingLeft: 15 },
  //   titleStyle: { fontSize: 16, color: "purple" },
  //   bodyStyle: { fontSize: 14, color: "red" }
  // }

  // return <div style={inlineStyles.boxStyle}>
  //           <h1 style={inlineStyles.titleStyle}>评论人:{props.user}</h1>
  //           <h3 style={inlineStyles.bodyStyle}>{props.content}</h3>
  //       </div>  


  return <div className={itemStyles.box}>
            <h1 className={itemStyles.title}>评论人:{props.user}</h1>
            <h3 className={itemStyles.body}>评论内容:{props.content}</h3>
        </div>
}
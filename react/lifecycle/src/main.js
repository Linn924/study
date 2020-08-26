import React from 'react'
import ReactDOM from 'react-dom'

// import Counter from './components/Counter.jsx'
// import BindThis from './components/Bindthis.jsx'
// import CmtList from './components/Comment/cmtList.jsx'
import Context from './components/Context.jsx'

ReactDOM.render(<div>
  {/*规定每个用户在使用组件时需传递一个默认的数据 */}
  {/* <Counter initcount={3}></Counter> */}
  {/* <BindThis></BindThis> */}
  {/* <CmtList></CmtList> */}
  <Context></Context>
</div>, document.getElementById('app')) 
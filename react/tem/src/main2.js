import React from 'react'
import ReactDOM from 'react-dom'

//使用前先导入组件
import Hello from './components/Hello.jsx'
import Hello2 from './components/Hello2.jsx'

ReactDOM.render(<div>
  <Hello name="linn" age={20}></Hello>
  <Hello2 name="li" age={20}></Hello2>
</div>, document.getElementById('app'))








import React from 'react'

// 在 function 定义的组件中，如果想要使用 props，必须先定义，否则无法直接使用
export default function Hello(props) {
    // console.log(props);
    return <p>这是使用函数创建的组件</p>
}


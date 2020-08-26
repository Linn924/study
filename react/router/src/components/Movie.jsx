import React from 'react'


export default class Movie extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            routerParams:props.match.params
        }
    }
    // 如果想要从路由规则中，提取匹配到的参数，进行使用，可以使用 this.props.match.params.*** 来访问
    render() {
        return (
            <div>
                {/* Movie --- {this.props.match.params.type} --- {this.props.match.params.id} */}
                Movie --- {this.state.routerParams.type} --- {this.state.routerParams.id}
            </div>
        )
    }
}

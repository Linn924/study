// 这是项目的根组件
import React from 'react'
//导入路由组件
import {HashRouter,Route,Link} from 'react-router-dom'

//导入需要的ui组件
import { Layout, Menu} from 'antd';
const { Header, Content, Footer } = Layout;

//导入模块化的样式
import styles from './css/app.scss'

//导入路由相关的组件页面
import Home from './components/home/Home.jsx'
import Movie from './components/movie/Movie.jsx'
import About from './components/about/About.jsx'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  componentWillMount(){
    console.log(window.location.hash.split('/')[1]);
  }

  render() {
    return <HashRouter>
      <Layout className="layout" style={{height:'100vh'}}>
        <Header>
          <div className={styles.logo} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
            <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ backgroundColor:'#fff' }}>
          <Route path="/home" component={Home}></Route>
          <Route path="/movie" component={Movie}></Route>
          <Route path="/about" component={About}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Linncode</Footer>
      </Layout>
    </HashRouter>
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//导入react基础包 
import React from 'react';
import {
  StyleSheet,//样式相关的组件，专门用来创建样式的
  View,//相当于div
  Text,//文本节点
  TextInput,//文本框组件
  Image,//图片组件
  Button,
  ActivityIndicator,//加载中的logoing圆圈
  ScrollView,//滚动组件
} from 'react-native';

// 导入 Tabbar 相关的组件
import TabNavigator from 'react-native-tab-navigator'
//导入tab栏的组件
import Home from './components/tabbars/Home.js'
import Me from './components/tabbars/Me.js'
import Search from './components/tabbars/Search.js'
import Shopcar from './components/tabbars/Shopcar.js'

// 导入图标相关的组件
import Icon from 'react-native-vector-icons/FontAwesome'

// import {
//   Colors
// } from 'react-native/Libraries/NewAppScreen';


export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedTab:'home'
    }
  }

  render(){
    return (
      <View style={styles.container}> 

            {/* Tab栏区域 */}
        <TabNavigator>

          {/* 主页的 Tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'} // 判断当前的 tab栏是否被选中的
            title="主页" // 表示 tabbar 上展示的内容
            renderIcon={() => <Icon name="home" size={25} color="gray" />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF" />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'home' })} // 点击Tab栏的操作
          >
            <Home></Home>
          </TabNavigator.Item>

          {/* 搜索的 Tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="搜索"
            renderIcon={() => <Icon name="search" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="search" size={25} color="#0079FF" />}
            onPress={() => this.setState({ selectedTab: 'search' })}
          >
            <Search></Search>
          </TabNavigator.Item>

          {/* 购物车的 Tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shopcar'}
            title="购物车"
            badgeText="0"
            renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079FF" />}
            onPress={() => this.setState({ selectedTab: 'shopcar' })}
          >
            <Shopcar></Shopcar>
          </TabNavigator.Item>

          {/* Me的 Tab栏 */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'me'}
            title="Me"
            renderIcon={() => <Icon name="user" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079FF" />}
            onPress={() => this.setState({ selectedTab: 'me' })}
          >
            <Me></Me>
          </TabNavigator.Item>

        </TabNavigator>

      </View>
    );
  }
  
};

//StyleSheet.create创建一个样式表对象
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});


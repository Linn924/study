import React,{Component} from 'react'

import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native'

//导入轮播图组件
import Swiper from 'react-native-swiper'
// Actions 表示要进行路由的JS操作了，可以跳转到新路由
import {Actions} from 'react-native-router-flux'

//轮播图样式
const styles = StyleSheet.create({
    box:{
        width:'33.33%',
        alignItems:'center',
        marginTop:20
    }
})

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            lunbotu:[],//轮播图数据
        }
    }

    componentWillMount(){
        fetch('http://139.196.210.43:0924/wallpaperdata').then( res => res.json()).then( data =>{
            // console.warn(data.data)
            this.setState({
                lunbotu:data.data
            })
            // console.warn(this.state.lunbotu)
        })
    }

    render(){
        return <View>
            <View style={{height:220}}>
                {/* 轮播图结构 */}
                {/* 轮播图外面包裹一层容器给高度 */}
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                    {this.state.lunbotu.map((item,index) =>{
                        return <View key={index}>
                                    <Image source={{uri:item.newpath}} style={{width:'100%',height:'100%'}} />
                                </View>
                    })}
                </Swiper>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <View style={styles.box}>
                    <Image source={require('../../images/menu1.png')} style={{width:60,height:60}}></Image>
                    <Text>新闻资讯</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../../images/menu2.png')} style={{width:60,height:60}}></Image>
                    <Text>图片分享</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../../images/menu3.png')} style={{width:60,height:60}}></Image>
                    <Text>商品购买</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../../images/menu4.png')} style={{width:60,height:60}}></Image>
                    <Text>留言反馈</Text>
                </View>
                <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
                <View>
                    <Image source={require('../../images/menu5.png')} style={{width:60,height:60}}></Image>
                    <Text>热映电影</Text>
                </View>
                </TouchableHighlight>
                {/* 在 TouchableHighlight 内部，只能放置唯一的一个元素 */}
                <View style={styles.box}>
                    <Image source={require('../../images/menu6.png')} style={{width:60,height:60}}></Image>
                    <Text>联系我们</Text>
                </View>   
            </View>
            
        </View>
    }

    // 去电影列表页面
    goMovieList = () => {
        // 在这里要跳转到电影列表，需要使用 编程式导航
        // this.props.history.push
        Actions.movielist()
    }
}
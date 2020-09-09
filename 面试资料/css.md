# css
## 1.盒模型（Box Model）

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

<img src="./image/css盒模型.png"> 

总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距  
总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距   
***
## 2.css3弹性盒子（Flex Box）

CSS3 弹性盒子（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式，是对一个容器中的子元素进行排列、对齐和分配空白空间。  

<img src="./image/css3弹性盒子属性.png"> 

***
## 3.css单位

<img src="./image/css单位1.png"> 

rem与em的区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素  
<img src="./image/css单位2.png"> 

***
## 4.css选择器

<img src="./image/css选择器.png"> 

***
## 5.BFC 清除浮动

BFC 就是清除浮动 用来处理文档脱离文档流的问题  

1. 父元素也添加浮动  
   -   margin 不能使用
2. 给父元素添加一个:display:inline-block
   -   margin 不能使用
3. 给父元素添加高度
   -   扩展性不好，我们无法随意再添加元素
4. br标签
   -   不符合w3c的规范：结构样式行为三者分离。
5. clear样式：规定元素的那一侧不允许其他元素浮动
   
6. after伪类清除浮动(子元素浮动，给父元素添加clearfix类清除浮动)
```
.clear:after{
     content:"";//给元素添加一个空的内容
     display:block;//让这个空的元素成为一个块元素
     clear:both;//再让这个元素旁边两侧都不允许浮动
   }
clear{
    *zoom:1;
}
```

7. 双伪类清除浮动(子元素浮动，给父元素添加clearfix类清除浮动)
```
.clearfix:after,.clearfix:before{
    content: "";
    display: table;
}
.clearfix:after{
    clear: both;
}
clear{
    *zoom:1;
}
```  
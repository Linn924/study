# 有关css面试总结

## 1、css盒子模型

### 1. 标准盒模型
+ box-sizing:content-box;(元素默认)
+ 内容宽度 = 设置的宽度
+ 标签宽度 = 设置的宽度 + border + padding

### 2. 怪异盒模型
+ box-sizing:border-box;
+ 内容宽度 = 设置的宽度 - border - padding
+ 标签宽度 = 设置的宽度

[![B89U4e.png](https://s1.ax1x.com/2020/10/28/B89U4e.png)](https://imgchr.com/i/B89U4e)

## 2、flex布局

>CSS3 弹性盒子(Flexible Box 或 flexbox)，是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式，是对一个容器中的子元素进行排列、对齐和分配空白空间。

### 1. 属性介绍(默认情况下 主轴水平向右 侧轴水平向下)
+ flex-direction：设置主轴的方向
+ justify-content：设置主轴上的子元素排列方式
+ flex-wrap：设置子元素是否换行
+ align-content：设置侧轴上的子元素的排列方式（多行）
+ align-items：设置侧轴上的子元素排列方式（单行）
+ flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap
+ flex 属性定义子项目分配剩余空间，用flex来表示占多少份数.子元素不给宽高 那么flex的剩余空间就是整个父元素的宽高
+ align-self 控制子项自己在侧轴上的排列方式
+ order 属性定义项目的排列顺序   

### 2. flex的特点
+ 可以在垂直或者水平方向以任意一种对齐方式进行样式布局
+ 可以在单一轴线上布局也可以在多行内布局
+ 随可用空间的变化进行响应式布局（能够调整其子元素的宽度或者高度以使其能在不同分辨率的屏幕下能用最好的方式去填充可用空间）

### 3. flex布局的优缺点
+ 优点:能够很好的契合移动端，无需考虑分辨率问题，移动端flex布局占据主流
+ 缺点:PC端网页兼容性不好，ie浏览器必须是10.0版本以上；对设计稿要求很高，需要是有规律的设计稿，比如栅格系统；网页内容较多时，flex布局不太好控制。
      
### 4. 为什么要使用flex布局
+ 传统的布局方案主要基于CSS盒子模型，依赖Display、Position、Float等属性。但是它对于一些特殊布局非常不方便，比如水平垂直居中。flex布局很容易实现水平垂直居中
+ 移动端flex布局占据主流

## 3、两栏自适应布局

>[两栏自适应](http://blog.linncode.cn/article?twoColumns.md)

### 1. 三种方法
+ flex布局
+ grid布局
+ table布局

## 4、三栏布局

>[三栏布局](http://blog.linncode.cn/article?threeColumns.md)  

### 1. 四种方法
+ position定位
+ flex布局
+ grid布局
+ table布局

### 2. 遇见的问题
+ 当中间一栏中有一个非常大的子元素则会撑开中间一栏，中间一栏会变宽

## 5、元素垂直水平居中

### 1. 元素垂直水平居中(不知道页面长宽的前提)
```
<div class="box"></div>

/* 1.position和transform属性实现 */
.box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
    background-color: #1e90ff;
}

/* 2.position和margin属性实现 */
.box{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    background-color: #1e90ff;
}
```
### 2. 元素垂直水平居中
```
<div class="box"></div>

/* 1.flex实现 */
html,body{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 2.grid实现 */
html,body{
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center center;
}
.box{
    width: 200px;
    height: 200px;
    background-color: #1e90ff;
}
```

## 6、清除浮动(BFC)

>BFC 就是清除浮动 用来处理文档脱离文档流的问题
```
<!-- 第一种方法 -->
<div class="fahter">
    <div class="big">big</div>
    <div class="small">small</div>
    <div class="clear">额外标签法</div>
</div>
<div class="footer"></div>

<!-- 第二种方法 -->
<div class="fahter">
    <div class="big">big</div>
    <div class="small">small</div>
</div>
<div class="footer"></div>

<!-- 第三种方法 -->
<div class="fahter clearfix">
    <div class="big">big</div>
    <div class="small">small</div>
</div>
<div class="footer"></div>

<!-- 第四种方法 -->
<div class="fahter clearfix">
    <div class="big">big</div>
    <div class="small">small</div>
</div>
<div class="footer"></div>

/* 1.clear:both; */
.clear{
    clear:both;
}
/* 2.overflow: hidden; */ 
.fahter{
    width: 400px;
    border: 1px solid deeppink;
    overflow: hidden;
}
/* 3.使用after伪元素清除浮动 */
.clearfix::after{
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
} 
.clearfix{
    *zoom:1;
}
/* 4.使用before和after双伪元素清除浮动 display: table; 让块级标签实现行内效果，即浮动至同一横轴，并实现等高效果 */
.clearfix:after,.clearfix:before{
    content: "";
    display: table;
}
.clearfix:after{
    clear: both;
} 
.clearfix{
    *zoom:1;
}

.fahter{
    width: 400px;
    border: 1px solid deeppink;
}
.big{
    width: 200px;
    height: 200px;
    background: darkorange;
    float: left;
}
.small{
    width: 120px;
    height: 120px;
    background: darkmagenta;
    float: left;
}
.footer{
    width: 900px;
    height: 100px;
    background: darkslateblue;
}
```

## 7、css实现三角形

```
<div class="box"></div>

 /* 利用border */
.box{
    width: 0;
    height: 0;
    border-width:40px 40px 0;
    border-style: solid;
    border-color: red transparent transparent transparent;
}

/* 利用渐进线 */
.box{
    width: 40px;
    height: 40px;  
    background: linear-gradient(to bottom right, red 50%, transparent 0);
    transform: rotate(45deg);
}
```

## 8、css实现箭头

```
.box{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #1e90ff;
}
.box::after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 10px;
    left: 8px;
    border-style: solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #fff;
}
```

## 9、css实现任意角度扇形

```
/* 
    扇形制作原理，底部一个纯色原形，里面2个相同颜色的半圆，可以是白色,内部半圆按一定角度变化，就可以产生出扇形效果 
    clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的
*/
<div class="sector">
    <div class="box1"></div>
    <div class="box2"></div>
</div>

.sector{ 
    position: relative;
    width: 200px; 
    height: 200px; 
    border-radius: 50%; 
    background-color: yellow;
}
.box1{
    position: absolute; 
    width: 200px; 
    height: 200px; 
    transform: rotate(-60deg); 
    clip: rect(0px,100px,200px,0px); 
    border-radius: 50%; 
    background-color: #fff;
}
.box2{
    position: absolute; 
    width: 200px; 
    height: 200px; 
    transform: rotate(60deg); 
    clip: rect(0px,100px,200px,0px);  
    border-radius: 50%; 
    background-color: #fff;
}
```

## 10、CSS实现宽度自适应100%，宽高16:9的比例的矩形

```
/* 1.利用padding-bottom属性实现 */
<div class="box">
    <div class="sq">
        <p>16:9</p>
    </div>
</div>

.box{
    width: 50vw;
    margin: 0 auto;
}
.sq{
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    position: relative;
    background-color: pink;
}
.sq>p{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: pink;
}

/* 2.利用vw单位实现 */
<div class="box"></div>

.box{
    width: 16vw;
    height: 9vw;
    background-color: #1e90ff;
}
```

## 11、Less和Sass作用和区别

>[less和sass作用和区别](https://www.jianshu.com/p/e3f1fcbbccc3)

### 1. 作用
+ sass和less都是css的预编译处理语言
+ 引入了mixins，参数，嵌套规则，运算，颜色，名字空间，作用域，JavaScript赋值等
+ 加快了css开发效率
+ 都可以配合gulp和grunt等前端构建工具使用 
### 2. 区别
+ 实现方式的不同: less是基于JavaScript的在客户端处理 所以安装的时候用npm，sass是基于ruby所以在服务器处理

## 12、设置文字大小为6px

>[浏览器最小只能识别12px](Chrome谷歌浏览器下不支持css字体小于12px的解决办法)

```
<span>simon</span>

span{
    display: block;
    font-size: 12px; 
    transform: scale(0.5);
}
```

## 13、css优先级

>[css样式优先级](https://www.runoob.com/w3cnote/css-style-priority.html)

### 1. 最近的祖先样式比其他祖先样式优先级高
```
<!-- 类名为 son 的 div 的 color 为 blue -->
<div style="color: red">
    <div style="color: blue">
        <div class="son"></div>
    </div>
</div>
```
### 2. 直接样式比祖先样式优先级高
```
<!-- 类名为 son 的 div 的 color 为 blue -->
<div style="color: red">
    <div class="son" style="color: blue"></div>
</div>
```
### 3. 优先级关系：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
```
<!-- color 为 black -->
<div class="content-class" id="content-id" style="color: black"></div>

#content-id {
    color: red;
}
.content-class {
    color: blue;
}
div {
    color: grey;
}
```
### 4. 计算选择符中 ID 选择器的个数（a），计算选择符中类选择器、属性选择器以及伪类选择器的个数之和（b），计算选择符中标签选择器和伪元素选择器的个数之和（c）。按 a、b、c 的顺序依次比较大小，大的则优先级高，相等则比较下一个。若最后两个的选择符中 a、b、c 都相等，则按照"就近原则"来判断。
```
<!-- color 为 red -->
<div id="con-id">
    <span class="con-span"></span>
</div>

#con-id span {
    color: red;
}
div .con-span {
    color: blue;
}
```

### 5. 属性后插有 !important 的属性拥有最高优先级。若同时插有 !important，则再利用规则 3、4 判断优先级
```
<!-- background 为 red -->
<div class="father">
    <p class="son"></p>
</div>

p {
    background: red !important;
}
.father .son {
    background: blue;
}
```

## 14、隐藏元素的三种方法及区别

### 1. opacity属性
```
.hide{
    opacity:0;
}
```
+ 视觉上消失，但依然占据空间，并对网页的布局起作用。它也将响应用户交互。添加了opacity属性的元素,它的背景和元素内容也是会跟着变化的。
+ 可以利用此属性实现一些动画，如淡入淡出等
+ 该属性是兼容IE9以上的浏览器，IE8 以及更早的版本支持替代的 filter 属性，例如：filter:Alpha(opacity=50)。

### 2. display属性
```
.hide{
    display:none;
}
```
+ display属性才是真正意义上的隐藏元素,当元素的display属性为none时,该元素就会就会从视觉中消失,并且连盒模型也不生成.也不会在页面占据任何位置,不但如此,就连它的子元素也会一同从盒子模型中消失。
+ 给他和它的子元素添加的任何动画效果交互效果都会不起作用

### 3. visibility属性
```
.hide{
    visibility:hidden;
}
```
+ visibility属性类似opacity属性，该属性值为hidden的时候，元素将会隐藏，也会占据着自己的位置，并对网页的布局起作用，与 opacity 唯一不同的是它不会响应任何用户交互。
+ 能够实现动画效果，只要它的初始和结束状态不一样。这确保了 visibility 状态切换之间的过渡动画可以是时间平滑的。

## 15、css单位

>rem与em的区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素  

[![B8n1v8.md.png](https://s1.ax1x.com/2020/10/28/B8n1v8.md.png)](https://imgchr.com/i/B8n1v8)  
[![B8nlgf.md.png](https://s1.ax1x.com/2020/10/28/B8nlgf.md.png)](https://imgchr.com/i/B8nlgf)

## 16、css选择器

[![B8ncVJ.md.png](https://s1.ax1x.com/2020/10/28/B8ncVJ.md.png)](https://imgchr.com/i/B8ncVJ)

## 17、层叠上下文

>[层叠顺序详解](https://www.cnblogs.com/leftJS/p/11063683.html)

### 1. 形成层叠上下文的方法有
```
   1.根元素 <html></html>
   2.position值为 absolute|relative，且 z-index值不为 auto
   3.position 值为 fixed|sticky
   4.z-index 值不为 auto 的flex元素，即：父元素 display:flex|inline-flex
   5.opacity 属性值小于 1 的元素
   6.transform 属性值不为 none的元素
   7.mix-blend-mode 属性值不为 normal 的元素
   8.filter、 perspective、 clip-path、 mask、 mask-image、 9.mask-border、 motion-path 值不为none 的元素
   9.perspective 值不为 none 的元素
   10.isolation 属性被设置为 isolate 的元素
   11.will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
   12.-webkit-overflow-scrolling 属性被设置 touch的元素
```

### 2. 层叠等级
+ 普通元素的层叠等级优先由其所在的层叠上下文决定
+ 层叠等级的比较只有在同一个层叠上下文元素中才有意义
+ 在同一个层叠上下文中，层叠等级描述定义的是该层叠上下文中的元素在Z轴上的上下顺序
+ 层叠等级并不一定由 z-index 决定，只有定位元素的层叠等级才由 z-index 决定，其他类型元素的层叠等级由层叠顺序、他们在HTML中出现的顺序、他们的父级以上元素的层叠等级一同决定。

### 3. z-index
+ z-index 只适用于定位的元素，对非定位元素无效，它可以被设置为正整数、负整数、0、auto，如果一个定位元素没有设置 z-index，那么默认为auto；
+ 元素的 z-index 值只在同一个层叠上下文中有意义。如果父级层叠上下文的层叠等级低于另一个层叠上下文的，那么它 z-index 设的再高也没用。如果遇到 z-index 值设了很大，但是不起作用，就去看看它的父级层叠上下文是否被其他层叠上下文盖住。

### 4. 层叠顺序
[![B8uVzV.md.png](https://s1.ax1x.com/2020/10/28/B8uVzV.md.png)](https://imgchr.com/i/B8uVzV)  
[![B8ueMT.md.png](https://s1.ax1x.com/2020/10/28/B8ueMT.md.png)](https://imgchr.com/i/B8ueMT)


## 18、常见页面布局

>[常见页面布局](https://www.cnblogs.com/soyxiaobi/p/9594557.html)  

+ 静态布局
+ 流式布局(百分比布局)
+ 弹性布局(flex布局等)
+ 响应式布局(Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，grid布局等)

## 19、css预处理,后处理

>[css预处理,后处理](http://caibaojian.com/css-processor.html)

+ 预处理是一种专门编程语言为css,增加一些编程特性，将css作为目标生成文件
+ CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。

## 20、css3新特性

[![B8u5Yn.png](https://s1.ax1x.com/2020/10/28/B8u5Yn.png)](https://imgchr.com/i/B8u5Yn)  
[![B8uIWq.png](https://s1.ax1x.com/2020/10/28/B8uIWq.png)](https://imgchr.com/i/B8uIWq)

## 21、display哪些取值

+ none 此元素不会被显示，并且不占据页面空间，这也是与visibility:hidden不同的地方，设置visibility:hidden的元素，不会被显示，但是还是会占据原来的页面空间。
+ inline 行内元素 元素会在一行内显示，超出屏幕宽度自动换行，不能设置宽度和高度，元素的宽度和高度只能是靠元素内的内容撑开。示例元素：span,b,i,a,u,sub,sup,strong,em
+ block 块级元素 会独占一行，如果不设置宽度，其宽度会自动填满父元素的宽度，可以设置宽高，即使设置了宽度，小于父元素的宽度，块级元素也会独占一行。示例元素：div,h1-h6,ul,ol,dl,p
+ inline-block 行内块元素 与行内元素一样可以再一行内显示，而且可以设置宽高，可以设置margin和padding。示例元素：input,button,img
+ list-item 列表元素。示例元素：li
+ table 会作为块级表格来显示，表格前后带有换行符。
+ inline-table 会作为内联表格来显示，表格前后没有换行符。
+ flex 多栏多列布局，比较适合移动端开发使用。
+ grid 网格布局
+ inherit 继承，如果元素的某些属性没有进行设置，有些是会有默认值的，有些是会继承的。

## 22、行内元素与块级元素的区别

### 1. 嵌套问题
+ 行内元素：行内元素只能嵌套行内元素，不能嵌套块级元素。  
+ 块级元素：块级元素可以嵌套行内元素，但是行内元素不可以嵌套块级元素。块级元素之间也可以进行嵌套，但是，并不是块级元素之间可以随意的嵌套。p元素是不能嵌套任何块级元素的，div可以嵌套任意的元素，但是div并不是能够被所有的块级元素嵌套的。

### 2. margin和padding
+ 行内元素：有margin和padding，但是只能够设置左右的值，设置上下的值是无效的。  
+ 块级元素：可以设置margin和padding上下左右的四个值，margin可以有负值，padding不允许有负值。

### 3. 宽高
+ 行内元素：不允许设置宽高，行内元素的宽高只能是由行内元素内的内容撑起来。  
+ 块级元素：允许设置宽高，如果不设置，默认宽度是父元素的100%，高度是由内容撑起来的。

## 23、相邻的两个inline-block节点为什么会出现间隔，该如何解决

+ 原因:元素被当成行内元素排版的时候，原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素font-size:16px时，间距为8px。
+ 解决方法：1: font-size。2：改变书写方式。3：使用margin负值。4：使用word-spacing或letter-spacing
```
<!-- 初始样式结构 -->
<span class="baba">
    <span class="son"></span>
    <span class="son"></span>
    <span class="son"></span>
</span>

<!-- 解决方法二：改变书写方式 把回车换行去掉 -->
<span class="baba">
    <span class="son"></span><span class="son"></span><span class="son"></span>
</span>

/* 此种情况有间隙出现 */
.baba {
    display: inline-block;
    width: 200px;
    height: 100px;
    background: green;
    display: table-cell;
    vertical-align: middle; 
    text-align: center;
    
}
.son {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #dcdcdc;
    
}

/* 解决方法一：给父级元素设置font-size： 0；子元素设置相应的font-size*/
.baba {
    display: inline-block;
    width: 200px;
    height: 100px;
    background: green;
    display: table-cell;
    vertical-align: middle; 
    text-align: center;
    font-size: 0px;
}
.son {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #dcdcdc;
    font-size: 14px;
}
/* 解决方法四：设置父元素，display:table和word-spacing */
.baba {
    display: inline-block;
    width: 200px;
    height: 100px;
    background: green;
    /* 作为块级表格来显示(类似于<table>)，表格前后带有换行符。 */
    display: table;
    /* word-spacing 属性增加或减少单词间的空白（即字间隔）。 */
    word-spacing: 0;
}
.son {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #dcdcdc;
}
```

## 24、meta viewport 移动端适配

```
//浏览器引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放。  
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
[![B8MtVe.md.png](https://s1.ax1x.com/2020/10/28/B8MtVe.md.png)](https://imgchr.com/i/B8MtVe)  
[![B8MGDO.md.png](https://s1.ax1x.com/2020/10/28/B8MGDO.md.png)](https://imgchr.com/i/B8MGDO)

## 25、rem布局的优缺点

+ 优点:在手机各个机型的适配方面；大大减少我们代码的重复性，是我们的代码更兼容。 
+ 缺点:目前ie不支持 对pc页面来讲使用次数不多；数据量大：所有的图片，盒子都需要我们去给一个准确的值;才能保证不同机型的适配; 

## 26、1px边框问题

>[如何解决1px问题](https://blog.csdn.net/SilenceJude/article/details/81906716)  

+ 原因:viewport的设置和屏幕物理分辨率是按比例而不是相同的. 移动端window对象有个devicePixelRatio属性, 它表示设备物理像素和css像素的比例, 在retina屏的iphone手机上, 这个值为2或3, css里写的1px长度映射到物理像素上就有2px或3px那么长。

## 27、溢出省略号显示

```
<div>hi~来自星星的你-欢迎Linn</div>

div{
    width: 150px;
    height: 25px;
    border: 1px solid red;
    /* 当文字显示不开的时候，自动换行 */
    /* white-space:normal; */
    /* 1.强制文本一行显示 */
    white-space: nowrap;
    /* 2.溢出隐藏 */
    overflow: hidden;
    /* 文字溢出 用省略号替代 */
    text-overflow: ellipsis;
}
```
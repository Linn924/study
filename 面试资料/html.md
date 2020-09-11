# html

[2020前端面试复习资料](https://www.jianshu.com/p/137b525e09ff)

## 1.语义化

* [web 语义化](https://www.runoob.com/web/web-semantic.html)

## 2.新标签新特性

* [html新标签新特性](https://www.cnblogs.com/sun-web/p/10682465.html)

## 3.input与textarea的区别以及用div模拟textarea

* [input与textarea的区别以及用div模拟textarea](https://blog.csdn.net/animatecat/article
  
## 4.移动设备忽略将页面中的数字识别为电话号码的方法

* [移动设备忽略将页面中的数字识别为电话号码的方法](https://blog.csdn.net/shuidinaozhongyan/article/details/73194556)

```
1.标准的电话号码格式是这样的:<a  href="tel:1-408-555-5555">1-408-555-5555</a>，点击后会自动打开电话功能；

2.但有时候不是电话号码的数字也会被浏览器自动解析为电话号码, 并把数字的颜色和样式都改了；

3.如果忽略页面中的数字识别为电话号码, 只要把这个默认行为关闭就行，只要一行代码:
<meta name = "format-detection" content = "telephone=no">

4.这个关闭不会影响真正电话号码的识别；
以上方法均针对iOS设备
```
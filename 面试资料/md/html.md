# 有关html面试总结

## 1、语义化

>[web语义化](https://www.runoob.com/web/web-semantic.html)

## 2、新标签新特性

>[html新标签新特性](https://www.cnblogs.com/sun-web/p/10682465.html)

## 3、input与textarea的区别以及用div模拟textarea

### 1. 区别
+ input是单行文本框，不会换行。通过size属性指定显示字符的长度，注意：当使用css限定了宽高，那么size属性就不再起作用。value属性指定初始值，Maxlength属性指定文本框可以输入的最长长度。可以通过width和height设置宽高，但是也不会增加行数。
+ textarea是多行文本输入框，文本区中可容纳无限数量的文本，无value属性，其中的文本的默认字体是等宽字体(通常是Courier),可以通过cols和rows属性来规定textarea的尺寸,不过更好的办法是使用CSS的height和width属性。

### 2. 使用div模拟textarea
```
//textarea不能像普通div标签一样高度可以跟随内容自适应。一个普通的block元素上加个contenteditable="true"即可自适应。contenteditable 属性指定元素内容是否可编辑。给div设置了一个最小高度，当超过最小高度但不超过最大高度时，div的高度根据文本自适应，当超过最大高度时，出现滚动条。

<div class="textarea" contenteditable="true"></div>

.textarea{
    min-height: 100px;
    max-height: 300px;
    border: 1px solid #a0b3d6; 
    width: 300px;
    font-size: 14px;
    overflow-y: auto;
    overflow-x: hidden;
}
``` 
## 4、移动设备忽略将页面中的数字识别为电话号码的方法

>[移动设备忽略将页面中的数字识别为电话号码的方法](https://blog.csdn.net/shuidinaozhongyan/article/details/73194556)

## 5、iframe的缺点有哪些

+ iframe 元素会创建包含另外一个文档的内联框架（即行内框架）
+ 不容易管理。
+ iframe用户体验度差。
+ 不利于搜索引擎优化。
+ 设备兼容性差。
+ 会增加服务器的http请求，增加负担。

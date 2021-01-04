# 有关webpack资料总结

## 1、打包原理

>[webpack打包原理](https://www.jianshu.com/p/e24ed38d89fd)  
>[webpack打包原理](https://www.php.cn/faq/462367.html)

+ webpack打包原理是将根据文件间的依赖关系对其进行静态分析，然后将这些模块按指定规则生成静态资源，当webpack处理程序时，会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成bundle。

## 2、打包插件

>[webpack详解](https://www.cnblogs.com/jinzhaozhao/p/10006131.html)

+ HtmlWebpackPlugin
    + 作用:生成html文件
    + 原理:将webpack中`entry`配置的相关入口chunk 和 `extract-text-webpack-plugin`抽取的css样式 插入到该插件提供的`template`或者`templateContent`配置项指定的内容基础上生成一个html文件，具体插入方式是将样式`link`插入到`head`元素中，`script`插入到`head`或者`body`中。
+ VueLoaderPlugin

## 3、热更新原理

>[热更新原理](https://juejin.im/post/6844904008432222215)

## 4、

>[优化构建速度](https://segmentfault.com/a/1190000018493260)
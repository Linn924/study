const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件的实例对象
    template: './src/index.html', // 指定要用到的模板文件
    filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  //编译模式 两种 一种是开发development 一种是production
  mode: "development", // mode 用来指定构建模式
  entry: path.join(__dirname, "./src/index.js"), //__dirname 是当前文件所处的目录  入口指令
  output: {
    path: path.join(__dirname, "./dist"), //输出文件的存放路径
    filename: "bundle.js" //输出文件的名称
  },
  plugins: [htmlPlugin, new VueLoaderPlugin()], // plugins 数组是 webpack 打包期间会用到的一些插件列表
  // 所有第三方文件模块的匹配规则
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: "url-loader?limit=16940"
      },
      // exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的 js 文件
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      { test: /\.vue$/, use: "vue-loader" }
    ]
  }
};
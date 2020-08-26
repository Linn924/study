//gulp方法
// gulp.src()：获取任务要处理的文件
// gulp.dest()：输出文件
// gulp.task()：建立gulp任务
// gulp.watch()：监控文件的变化

//gulp插件
// gulp-htmlmin ：html文件压缩
// gulp-csso ：压缩css
// gulp-babel ：JavaScript语法转化
// gulp-less: less语法转化
// gulp-uglify ：压缩混淆JavaScript
// gulp-file-include 公共文件包含
// browsersync 浏览器实时同步

const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const less = require('gulp-less')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

//建立任务 参数一:任务名称 参数二:回调函数
// gulp.task('first',()=>{
//     console.log('第一个gulp任务')

//     //获取文件
//     gulp.src('./src/css/base.css')
//         .pipe(gulp.dest('./dist/css'))
// })


//html任务
//HTML文件中代码压缩，抽取HTML文件中的公共代码
gulp.task('htmlmin',()=>{
    //获取所有HTML文件
    gulp.src('./src/*.html')
        //抽取代码后引入代码使用插件压缩进去
        .pipe(fileinclude())
        //压缩HTML文件的代码 连空格也一起压缩
        .pipe(htmlmin({ collapseWhitespace: true }))
        //输出文件
        .pipe(gulp.dest('./dist'))
})

//css任务
//less语法转换成css代码；css代码压缩
gulp.task('cssmin',()=>{
    //获取所有less文件
    //同时选择所有的less文件和css文件
    gulp.src(['./src/css/*.less','./src/css/*.css'])
        //语法转换
        .pipe(less())
        //css文件压缩
        .pipe(csso())
        //输出文件
        .pipe(gulp.dest('./dist/css'))
})

//js任务
//es6代码转换；代码压缩
gulp.task('jsmin',()=>{
    gulp.src('./src/js/*.js')
        //转换代码
        .pipe(babel({
            //它可以判断当前代码的运行环境 将代码转换成当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        //压缩代码
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

//复制文件夹
gulp.task('copy',()=>{
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('./dist/lib'))
})

//构建任务 全部执行
gulp.task('default',['htmlmin','cssmin','jsmin','copy'])

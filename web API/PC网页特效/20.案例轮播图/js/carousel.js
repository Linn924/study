//全部加载完毕在加载js
window.addEventListener('load', function () {
    //获取DOM元素 左右两侧切换按钮以及最外层盒子
    var arrow_l = document.querySelector('.arrow-l')
    var arrow_r = document.querySelector('.arrow-r')
    var box = document.querySelector('.box')
    var boxWidth = box.clientWidth

    //鼠标经过box 就显示左右按钮
    box.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        clearInterval(timer);
        timer = null; // 清除定时器变量
    })

    //鼠标移出box 就隐藏左右按钮
    box.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    })

    //动态生成并插入小圆圈（li）
    //获取DOM元素
    var ul = document.querySelector('ul')
    var ol = document.querySelector('ol')
    var count = ul.children
    for (var i = 0; i < count.length; i++){
        var li = document.createElement('li')
        ol.appendChild(li)

        //给小圆圈设置自定义属性
        li.setAttribute('index', i)

        //排他思想 点击小圆圈变色 其他恢复原状
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            this.className = 'current'

            // 点击小li 拿到li的索引号
            var index = this.getAttribute('index');

            //点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            //点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;

            //点击小圆圈，移动图片 移动的是ul
            animate(ul, -index * boxWidth)
        })
    }

    //把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current'

    //克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //num控制ul移动几个box的宽度
    var num = 0

    //circle 控制小圆圈的播放
    var circle = 0;

    // flag 节流阀
    var flag = true;

    //点击右侧按钮， 图片滚动一张
    arrow_r.addEventListener('click', function () {
        if (flag == true) {
            flag = false; // 关闭节流阀

            //如果走到了最后复制的一张图片，此时的ul要快速复原 left 改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++
            animate(ul, -num * boxWidth, function () {
                flag = true
            })

            //点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }

            circleChange()
        }
    })

    //点击左侧按钮， 图片滚动一张
    arrow_l.addEventListener('click', function () {
        if (flag == true) {
            flag = false
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * boxWidth;
            }
            num--
            animate(ul, -num * boxWidth, function(){
                flag = true
            })

            //点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            circle = circle < 0 ? ol.children.length - 1 : circle;

            circleChange()
        }
    })

    //定义函数
    function circleChange() {
        //先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    
    //自动播放轮播图
    var timer = setInterval(function () {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);
})
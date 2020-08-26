window.addEventListener('load', function () {
    
    var box = document.querySelector('.box')
    var ul = document.querySelector('ul')
    var ol =document.querySelector('ol')
    //获取box盒子的宽度
    var boxWidth = box.clientWidth

    //利用定时器自动轮播图片
    var index = 0
    var timer = setInterval(function () {
        index++;
        var translatex = -index * boxWidth;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    },2000)

    //过渡完成之后，再去判断 监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function () {
        //无缝滚动
        if (index >= 3) {
            index = 0;
            //去掉过渡效果 使ul快速的跳到目标位置
            ul.style.transition = 'none';
            //利用最新的索引号乘以宽度去滚动图片
            var translatex = -index * boxWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * boxWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        //小圆点跟随变化
        //把ol里面li带有current类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current   add
        ol.children[index].classList.add('current');
    })

    //手指滑动轮播图 
    //触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0; // 后面会使用这个移动距离所以要定义一个全局变量
    var flag = false;//不触摸移动轮播图
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });

    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * boxWidth + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        e.preventDefault(); // 阻止滚动屏幕的行为
        flag = true //证明移动了
    });

    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function (e) {
        if (flag) {
            //如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                var translatex = -index * boxWidth;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素就回弹
                var translatex = -index * boxWidth;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translatex = -index * boxWidth;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
})
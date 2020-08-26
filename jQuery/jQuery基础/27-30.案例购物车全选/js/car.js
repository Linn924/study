$(function() {
    // 全选 全不选功能模块
    // 把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox） 事件使用change
    $(".checkall").change(function () {
        //全选
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"))
        //当全选按钮为true时
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(".cart-item").removeClass("check-cart-item");
        }
    })
    
    // 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function () {
        // console.log($(".j-checkbox:checked").length); //被选中复选框的个数
        // console.log($(".j-checkbox").length); //复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    //购物车数量增加减少
    $(".increment").click(function () {
        // 得到当前兄弟文本框的值 并加一再赋值给文本框
        var val = $(this).siblings(".itxt").val()
        val++
        $(this).siblings(".itxt").val(val)
        //计算小计模块 获取价格 截取价格字符串(去掉￥) 
        //parents(".p-num") 返回指定的祖先元素
        //(price * val).toFixed(2) 保留两位小数
        var price = $(this).parents(".p-num").siblings('.p-price').text().substr(1)
        $(this).parents(".p-num").siblings('.p-sum').text("￥" + (price * val).toFixed(2))
        getSum()
    })

    $(".decrement").click(function () {
        // 得到当前兄弟文本框的值 并减一再赋值给文本框
        var val = $(this).siblings(".itxt").val()
        // 判断数量为一则不能再减
        if (val == 1) {
            return false
        }
        val--
        $(this).siblings(".itxt").val(val)
        //计算小计模块 获取价格 截取价格字符串(去掉￥) 
        //parents(".p-num") 返回指定的祖先元素
        //(price * val).toFixed(2) 保留两位小数
         var price = $(this).parents(".p-num").siblings('.p-price').text().substr(1)
        $(this).parents(".p-num").siblings('.p-sum').text("￥" + (price * val).toFixed(2))
        getSum()
    })

    //用户修改文本框的值 计算 小计模块  
    $(".itxt").change(function () {
        // 得到文本框的里面的值 乘以 当前商品的单价 
        var val = $(this).val();
        // 当前商品的单价
        var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (price * val).toFixed(2));
        getSum()
    }); 

    //计算总计和总额
    getSum()
    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        $(".itxt").each(function (i, dom) {
            count += Number($(dom).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, dom) {
            money += Number($(dom).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    //删除商品模块
    //  商品后面的删除按钮
    $(".p-action a").click(function () {
        // 删除的是当前的商品 
        $(this).parents(".cart-item").remove()
        getSum()
    });
    //  删除选中的商品
    $(".remove-batch").click(function () {
        // 删除的是复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    //  清空购物车 删除全部商品
    $(".clear-all").click(function () {
       $(".cart-item").remove();
       getSum();
    })
    
})
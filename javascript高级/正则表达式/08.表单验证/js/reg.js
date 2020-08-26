window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/ //手机号码的正则表达式
    var regqq = /^[1-9]\d{4,}$/ // qq号验证
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //昵称验证
    var regmsg = /^\d{6}$/; // 短信验证
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/; //密码验证
    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var surepwd = document.querySelector('#surepwd')


    //表单验证函数
    function regexp(dom,reg) {
        dom.addEventListener("blur", function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
            }
        })
    }
    
    //确认密码
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';

        }
    }

    regexp(tel,regtel)
    regexp(qq,regqq)
    regexp(nc,regnc)
    regexp(msg,regmsg)
    regexp(pwd,regpwd)
}
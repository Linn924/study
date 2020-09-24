<template>
  <div class="login_container">
    <div class="login_box">

          <div class="avatar_box">
              <img src="../assets/logo.png" alt="">
          </div>

          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                  <el-form-item prop="username">
                      <el-input prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                      <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                  </el-form-item>
                  <el-form-item class="btns">
                      <el-button type="primary" @click="login">登录</el-button>
                      <el-button type="info" @click="resetloginForm">重置</el-button>
                  </el-form-item>
          </el-form>
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      loginForm: {
          username:'',
          password:''
      },
      loginFormRules:{
          username:[
              { required: true, message: '请输入登录名称', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
              { required: true, message: '请输入登录密码', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
      resetloginForm(){
          this.$refs.loginFormRef.resetFields();
      },
      login(){
          this.$refs.loginFormRef.validate( async valid => {
            if(!valid) return
            const {data:res} = await this.$http.post('login',this.loginForm)
            if(res.code !== 200) return this.$message({message:`${res.tips}`,duration:1000,type:'error'})
            this.$message({message:`${res.tips}`,duration:1000,type:'success'})
            this.$router.push('/home')
          })
      }
    },
}
</script>

<style scoped lang="less">
.login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .avatar_box{
            height: 130px;
            width: 130px;
            border-radius: 50%;
            border: 1px solid #eee;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
</style>

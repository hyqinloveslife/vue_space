<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="loginForm" label-position="left">
      <!-- 欢迎使用xxx系统-->
      <div class="loginTitle">
        <h3 class="title">欢迎使用xxx系统</h3>
      </div>

      <!-- 输入密码-->
      <el-form-item prop="username">
        <span class="svg-container">

        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="username" name="username" type="text"
          tabindex="1" auto-complete="on" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input ref="password" :key="passwordType" v-model="loginForm.password" :type="passwordType" placeholder="password"
          name="password" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin" />
      </el-form-item>

      <el-button :loading="loading" type="primary" :style="input_style" @click.native.prevent="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login-on',
    data() {
      /* 用户名验证*/
      var validateUsername=(rule,value,callback)=>{

      };
      /* 密码验证*/
      var validatePassword=(rule,value,callback)=>{

      };

      return {
        /* 密码类型*/
        passwordType:'',
        loading:false,
        input_style:{
          width:'100%',
          height:'47px',
          display:'inline-block'
        },
        /* input框的规则*/
        loginRules:{
          username:[
            {required:true,trigger:'blur',validate:validateUsername}
          ],
          password:[
            {required:true,trigger:'blue',validate:validatePassword}
          ]
        },

        loginForm: {
          username: 'admin',
          password: '123456'
        }
      }
    },
    watch: {

    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then(() => {
              this.$router.push({
                path: this.redirect || '/'
              })
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style >
  .login-container {
    width: 32.5rem;
    margin: 0 auto;
  }

  .login-container input{
    height: 2.9375rem !important;
  }

  .loginForm {}
</style>

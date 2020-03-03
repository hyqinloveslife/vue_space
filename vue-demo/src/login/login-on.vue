<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="loginForm" label-position="left">
      <!-- 欢迎使用xxx系统-->
      <div class="loginTitle">
        <h3 class="title">欢迎使用xxx系统</h3>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default{
    name:'login-on',
    data(){

      return{

      }
    },
    watch:{

    },
    methods:{

    }
  }
</script>

<style>

</style>

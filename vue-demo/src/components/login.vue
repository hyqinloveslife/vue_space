<template>
	<div class="container">
		<p> 测试，登陆页面</p>
		<p> 账号： <input type="text" placeholder="请输入账号" /> </p>
		<p> 密码： <input type="password" placeholder="请输入密码" /> </p>
		<p> 
			<button @click="login()">login</button> 
			<button @click="goto()">back</button> 
		</p>
	</div>	
</template>

<script>
	
	export default{
		name:'login',
		data() {
			return {
				
			}
		},
		methods: {
			goto() {
				this.$router.go(-1);
			},
			login(){
				alert('正在登陆,请稍后')
			}
		},
	}
	
</script>

<style>
	.container{
		margin: 0 auto;
		width: 80%;
	}
</style>

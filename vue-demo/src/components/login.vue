<template>
	<div class="container-login">
		<p> 测试，登陆页面</p>
		<p> 账号： <input type="text" placeholder="请输入账号" /> </p>
		<p> 密码： <input type="password" placeholder="请输入密码" /> </p>
		<p> 
			<button @click="login()">login</button> 
			<button @click="goto()">back</button> 
		</p>
		<p> <router-link :to="{path:'/fruits',query:{name:apiUrl}}">link</router-link> </p>
	</div>	
</template>

<script>
	// import datas from '/api/latest'
	
	export default{
		name:'login',
		data() {
			return {
				apiUrl:'/api/latest'
			}
		},
		methods: {
			goto() {
				this.$router.go(-1);
			},
			login(){
				this.$http.get('../../../static/data.json').then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
					console.log(res.data.data)
				},function(){
					console.log('请求失败');	
				})
			}
		},
	}
	
</script>

<style>
	.container-login{
		margin: 0 auto;
		width: 80%;
	}
</style>

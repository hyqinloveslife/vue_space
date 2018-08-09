<template>
	<div>
		测试，登陆页面
		<p> <button @click="goto()">back</button> </p>
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
			}
		},
	}
	
</script>

<style>
</style>

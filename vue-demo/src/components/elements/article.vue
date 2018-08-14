<template>
	<div class="articleContainer" id="app">
		
	</div>
</template>

<script>
	export default {
		name: 'articles',
		data() {
			return {
				param:''
			}
		},
		created:function(){
			let params = this.$route.query.id;
			console.log('从上个页面传来的值: '+params);
			this.$http.get('http://162.168.2.103:8080/testSSM/zhihu/zhihuMessageInfo.do?id='+params,).then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
				console.log(res.data);
				this.param = res.data.data.body;
				document.getElementById('app').innerHTML = this.param;
			},function(){
				console.log('请求失败');	
			})
		},
		methods: {
			readTitle(value){
				console.log("id = "+value);
			}
		},
	}
</script>

<style>
</style>

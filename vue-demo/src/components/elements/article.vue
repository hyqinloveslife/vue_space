<template>
	<div>
		<p>article</p>
		<div>
			<!-- 用了v-html以后，就可以不用inner HTML，就不会导致页面的模板消失 -->
			<div class="articleContainer" id="app" v-html="param">
				
			</div>
		</div>
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
			console.log('从上个页面传来的值: '+JSON.stringify(this.$route.query));
			this.$http.get('http://162.168.2.101:8080/testSSM/zhihu/zhihuMessageInfo.do?id='+params,).then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
				console.log(res.data);
				this.param = res.data.data.body;
				
				// document.getElementById('app').innerHTML = this.param;
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

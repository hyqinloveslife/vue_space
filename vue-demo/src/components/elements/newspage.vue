<template>
	<div>
		newspage
		<div class="views" v-for="(item,index) in list" @click="readTitle(item.id)">
			<div class="view-left">
				<img :src="img" v-for="img in item.images" class="artileLogo">
			</div>
			<div class="view-right">
				<router-link :to="{path:'/zhihu/articles',query:{id:item.id}}"> <p>{{item.title}}</p> </router-link>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'newspage',
		data() {
			return {
				title: '新闻',
				titleStyle:{
					isBig:true,
					isRed:true
				},
				list:''
				
				
			}
		},
		created:function(){
			console.log('oppo R15 照亮你的美');
			this.$http.get('http://162.168.2.101:8080/testSSM/zhihu/zhihuList.do').then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
				console.log(res.data.data);
				let _data = res.data.data;
				this.list = _data.stories;
			},function(){
				console.log('请求失败');	
			})
		},
		methods: {
			readTitle(value){
				console.log("id = "+value);
// 				this.$router.push({
// 					path:'/articles',
// 					query:{
// 						id:value
// 					}
// 				});
			}
		},
	}
	
</script>

<style>
</style>

<template>
	<div class="container">
		<!-- <p v-bind:class="titleStyle">
			{{title}}
		</p> -->
		<!--显示内容的区域 -->
		<div class="views" v-for="(item,index) in list" @click="readTitle(item.id)">
			<div class="view-left">
				<img :src="img" v-for="img in item.images" class="artileLogo">
			</div>
			<div class="view-right">
				<p>{{item.title}}</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'titles',
		data() {
			return {
				title: '快手短视频',
				titleStyle:{
					isBig:true,
					isRed:true
				},
				list:''
			}
		},
		created:function(){
			console.log('oppo R15 照亮你的美');
			this.$http.get('http://162.168.2.103:8080/testSSM/zhihu/zhihuList.do').then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
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
				this.$router.push({
					path:'/articles',
					query:{
						id:value
					}
				});
			}
		},
	}
</script>

<style>
	.isBig{
		font-size: 24px;
	}
	.isRed{
		color: red;
	}
	.artileLogo{
		width: 50px;
		height: 50px;
	}
	.views{
		display: flex;
		flex-flow: row;
		height: 50px;
		margin: 5px;
		border-bottom: #EEEEEE 1px solid;
	}
	.views .view-left{
		flex: 2;
	}
	.views .view-right{
		flex: 8;
	}
</style>

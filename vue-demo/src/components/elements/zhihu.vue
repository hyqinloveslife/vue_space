<template>
	<div class="container">
		<!-- <p v-bind:class="titleStyle">
			{{title}}
		</p> -->
		<!--显示内容的区域 -->
		<!--文档结构-->

		<div id="box">

			<ul >

				<li id="tab1" @click="isSelect=0" :class="{isActive:isSelect==0}"><router-link :to="{path:'/zhihu/firstpage'}">首页</router-link></li>

				<li id="tab2" @click="isSelect=1" :class="{isActive:isSelect==1}"><router-link :to="{path:'/zhihu/newspage'}">新闻</router-link></li>

				<li id="tab3" @click="isSelect=2" :class="{isActive:isSelect==2}"><router-link :to="{path:'/zhihu/articles',query:{id:'9693134'}}">个人中心</router-link></li>

				<div class="clear"></div>

			</ul>


		</div>
		
		<!-- <div class="views" v-for="(item,index) in list" @click="readTitle(item.id)">
			<div class="view-left">
				<img :src="img" v-for="img in item.images" class="artileLogo">
			</div>
			<div class="view-right">
				<router-link :to="{path:'/zhihu/articles',query:{id:item.id}}"> <p>{{item.title}}</p> </router-link>
			</div>
		</div> -->
		
		
		<div class="show">

			<router-view></router-view>

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
				list:'',
				isSelect:0
				
				
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
			},
			sele(){
				console.log(this.isSelect);
			}
		},
	}
</script>

<style>
	.isActive{background: white;border-left: deepskyblue 1px solid;border-right:  deepskyblue 1px solid;border-top: deepskyblue 1px solid;}
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
	#box{background: #EEEEEE;width: 100%;}
	ul{display: inline-flex;flex-direction: row;flex-wrap: nowrap;width: 100%;}
	li{list-style: none;padding: 10px 20px;flex: 1;border-right: #F5F5DC 1px solid;}

	a{text-decoration: none;}

	a:hover{cursor: pointer;}

	/* .show{width: 300px;height: 300px;background: #ccc;float: left;margin: 20px 0px;} */

	.clear{clear: both;}
</style>

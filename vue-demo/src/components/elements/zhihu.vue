<template>
	<div class="container">
		<!-- <p v-bind:class="titleStyle">
			{{title}}
		</p> -->
		<!--显示内容的区域 -->
		<!--文档结构-->
		<!-- 使用element ui的选项卡 -->
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="新闻管理" name="newspage">
				<router-link :to="{path:'/zhihu/newspage'}">新闻管理</router-link>
			</el-tab-pane>
			<el-tab-pane label="书本管理" name="bookshop">
				<router-link :to="{path:'/zhihu/bookshop'}">书本管理</router-link> 
			</el-tab-pane>
			<el-tab-pane label="角色管理" name="article">
				<router-link :to="{path:'/zhihu/article'}">角色管理</router-link>
			</el-tab-pane>
			<el-tab-pane label="定时任务管理" name="quartz">
				<router-link :to="{path:'/zhihu/quartz'}">定时任务管理</router-link>
			</el-tab-pane> 
		</el-tabs>
		<!-- 没有使用element ui的选项卡,效果也还是不错的 -->
		<!-- <div id="box">
			<ul >
				<li id="tab1" @click="isSelect=0" :class="{isActive:isSelect==0}"><router-link :to="{path:'/zhihu/bookshop'}">首页</router-link></li>

				<li id="tab2" @click="isSelect=1" :class="{isActive:isSelect==1}"><router-link :to="{path:'/zhihu/newspage'}">新闻</router-link></li>

				<li id="tab3" @click="isSelect=2" :class="{isActive:isSelect==2}"><router-link :to="{path:'/zhihu/articles',query:{id:'9693134'}}">个人中心</router-link></li>

				<div class="clear"></div>
			</ul>
		</div> -->
		
		<!-- <div class="views" v-for="(item,index) in list" @click="readTitle(item.id)">
			<div class="view-left">
				<img :src="img" v-for="img in item.images" class="artileLogo">
			</div>
			<div class="view-right">
				<router-link :to="{path:'/zhihu/articles',query:{id:item.id}}"> <p>{{item.title}}</p> </router-link>
			</div>
		</div> -->
		
		
		<div class="show">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'titles',
		data() {
			return {
				activeName: 'newspage',
				titleStyle:{
					isBig:true,
					isRed:true
				},
				list:'',
				isSelect:0
				
				
			}
		},
		created:function(){
			this.$http.get(global.baseURI+ '/zhihu/zhihuList.do').then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
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
			},
			sele(){
				console.log(this.isSelect);
			},
			handleClick(tab,event){
				console.log("/"+tab.name);
				// this.$router.push({path:"/"+tab.name});
			}
		},
	}
</script>

<style >
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
	#box ul{display: inline-flex;flex-direction: row;flex-wrap: nowrap;width: 100%;}
	#box li{list-style: none;padding: 10px 20px;flex: 1;border-right: #F5F5DC 1px solid;align-content: center;}

	#box a{text-decoration: none;width: 100%;}

	#box a:hover{cursor: pointer;}

	/* .show{width: 300px;height: 300px;background: #ccc;float: left;margin: 20px 0px;} */

	.clear{clear: both;}
</style>

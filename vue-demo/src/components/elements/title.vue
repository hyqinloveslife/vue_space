<template>
	<div class="container">
		<p v-bind:class="titleStyle">
			{{title}}
		</p>
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
                title: '抖音短视频APP',
				titleStyle:{
					isBig:true,
					isRed:true
				},
				list:''
            }
        },
		created:function(){
			console.log('begin');
			this.$http.get('../../../static/data.json').then(function(res){//静态资源文件要放在static目录下面，不然会默认请求vue文件
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
			}
		},
    }
</script>

<style scoped>
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
</style>

<template>
	<div>
		<div class="blank"></div>
		<div class="bottom">
			<div class="btn" v-bind:class="btnStyle" v-for="(item,index) in banners" @click="goto(index)">
				<div><img :src="item.imgUrl" /></div> 
				<div><router-link :to="{path:item.toPath}" > {{item.text}} </router-link></div> 
			</div>
		</div>
	</div>
</template>

<script>
	
	import shouye1 from '../../resource/home/shouye.png'
	import dianhua1 from '../../resource/home/1dianhua.png'
	import gouwuche1 from '../../resource/home/1gouwuche.png'
	import person1 from '../../resource/home/1wode.png'
	
	export default{
		name:'bottoms',
		data() {
			return {
				banners:[
					{imgUrl:shouye1,text:'首页',bannerClass:'',toPath:'/login'},
					{imgUrl:dianhua1,text:'文章',bannerClass:'',toPath:'/zhihu'},
					{imgUrl:gouwuche1,text:'通知',bannerClass:'',toPath:'/fruits'},
					{imgUrl:person1,text:'我的',bannerClass:'',toPath:'/time'}
				],
				btnStyle:{
					active:true
				},
				homeIcon:'../../resource/home/shouye.png'
			}
		},
		methods: {
			goto(index) {
				
				
			}
		},
	}
	
</script>

<style>
	
	a{
		text-decoration: none;
		color: black;
	}
	img{
		width: 15px;
		height: 15px;
	}
	
	.bottom{
		bottom: 0;
		left: 0;
		position: fixed;
		margin-bottom:50px 0 5px 0;
		height: 50px;
		line-height: 25px;
		width: 100%;
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background: linear-gradient(to top right,#6E6E6E,#eee, #778899);
	}
	.bottom .btn{
		padding-top: 5px;
		
	}
	.btn div{	
		height: 20px;
		font-size: 13px;
	}
	.active{
		color: beige;
	}
	.blank {
		clear: both;
		overflow: hidden;
		display: block;
		height: 50px;
	}
</style>

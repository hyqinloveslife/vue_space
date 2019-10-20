<template>
	<!-- 本页面就用来测试图片轮播效果 -->
	<el-container v-bind:style="auto_height">
		<el-header>
			<el-page-header @back="goback" title="返回首页" content="欢迎"></el-page-header>
		</el-header>
		<el-main>
			<el-carousel indicator-position="outside" :interval="3000"  type="card">
				<el-carousel-item v-for="(item,index) in images">
					<el-image :src="item.img">
						<div slot="placeholder" class="image-slot">
							加载中
							<span class="dto">...</span>
						</div>
					</el-image>
				</el-carousel-item>
			</el-carousel>
		</el-main>
		<el-footer>
		</el-footer>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				auto_height:{
					height:(baseParameter_clientHeight-50)+"px"
				},
				
				images: [{
						"img": "../../../static/image/element/1.jpg"
					},
					{
						"img": "../../../static/image/element/2.jpg"
					},
					{
						"img": "../../../static/image/element/3.jpg"
					},
					{
						"img": "../../../static/image/element/4.jpg"
					}
				]
			};
		},
		methods:{
			goback:function(){
				console.log(1);
				this.$router.push('/zhihu/bookshop');
			}
		}
	}
</script>

<style>
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.el-carousel__item img {
		margin: 0;
	}
</style>

<template>
	<!-- 后台管理界面 -->
	<el-container v-bind:style="auto_height">
		<el-aside>
			<!-- 导航菜单组件 -->
			<!-- <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="true" router>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>导航1</span>
					</template>

					<el-menu-item-group>
						<template slot="title">分组1</template>
						<el-menu-item index="/zhihu/bookshop" >新增书本信息</el-menu-item>
						<el-menu-item index="/login" >书本信息列表</el-menu-item>
					</el-menu-item-group>

					<el-menu-item-group>
						<template slot="title">分组2</template>
						<el-menu-item index="/fruits">蔬菜区</el-menu-item>
					</el-menu-item-group>

					<el-menu-item-group>
						<template slot="title">分组3</template>
						<el-menu-item index="/welcome">首页</el-menu-item>
						<el-menu-item index="1-5">选项5</el-menu-item>
					</el-menu-item-group>

					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2">
					<i class="el-icon-menu"></i>
					<span slot="title">导航二</span>
				</el-menu-item>
				<el-menu-item index="3" disabled>
					<i class="el-icon-document"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span>导航4</span>
					</template>

					<el-menu-item-group>
						<template slot="title">分组4</template>
						<el-menu-item index="1-1">选项4-1</el-menu-item>
						<el-menu-item index="1-2">选项4-2</el-menu-item>
					</el-menu-item-group>

					<el-menu-item-group>
						<template slot="title">分组5</template>
						<el-menu-item index="1-3">选项5-3</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

			</el-menu> -->
			<!-- background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" -->
			<el-menu  :default-active="activeIndex" v-bind:style="auto_height" active-text-color="#409EFF"
			router>
				<NavMenu :navMenus="menuData"></NavMenu>
			</el-menu>


		</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
	/* 在这个地方弄了很久，最后发现是路径错误 */
	import NavMenu from './menu/NavMenu.vue'

	export default {
		components: {
			NavMenu
		},
		data() {
			/* 获取屏幕高度,可以定义为全局变量 */
			// var screen_height = document.documentElement.clientHeight;

			return {
				/* 设置自适应高度 */
				auto_height: {
					'height': (baseParameter_clientHeight) + 'px'
				},
				menuData:[],
				activeIndex: 'aa'
			};
		},
		methods: {
			handleOpen: function(key, keyPath) {
				// console.log("key : " + key + "   keyPath: " + keyPath);
			},
			handleClose: function(key, keyPath) {
				// console.log("key : " + key + "   keyPath: " + keyPath);
			}
		},
		created() {
			let url = '../../../static/json/navMenu.json';
			this.$http.get(url).then(function(res){
				console.log(JSON.parse(res.bodyText));
				this.menuData = JSON.parse(res.bodyText);
			},function(err){
				this.$message.error("请求失败");
			});

			this.$router.push({
				path:'/welcome'
			});
		}
	}
</script>

<style scoped>
	body {
		margin: 0;
		padding: 0;
	}

	.el-container {
		margin: 0;
	}

	.el-aside {
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		/* background-color: #E9EEF3; */
		color: #333;
		text-align: center;
	}

	.el-menu-item {}
</style>

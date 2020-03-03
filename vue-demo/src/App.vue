<template>
	<div id="app">
		<!-- <HelloWorld/> -->

		<!-- <admin /> -->
    <login />
		<!-- <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="activeIndex"
		 router>
			<NavMenu :navMenus="menuData"></NavMenu>
		</el-menu>
		<router-view></router-view> -->
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld'
	import welcome from './components/welcome.vue'
	import admin from './components/admin.vue'
  import login from '@/login/login-on.vue'

	export default {
		name: 'App',
		components: {
			// HelloWorld,
			welcome,
			admin,
      login
		},
		data() {
			return {
// 				activeIndex: 'aa',
// 				menuData: []
			}
		},
		methods: {

		},
		created() {
// 			let url = '../static/json/navMenu.json';
// 			this.$http.get(url).then(function(res){
// 				console.log(JSON.parse(res.bodyText));
// 				this.menuData = JSON.parse(res.bodyText);
// 			},function(err){
// 				this.$message.error("请求失败");
// 			});
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
	}
</style>

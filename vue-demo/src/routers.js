import Home from './components/login.vue'
import times from './components/timeComponent.vue'
import fruits from './components/elements/fruit.vue'


//所有需要跳转的页面，难道都需要在这个js文件中注册吗？那不是很麻烦？

const routers = [{
	path: '/login',
	name: 'home',
	component: Home
}, {
	path: '/',
	component: fruits
},
{
	path:'/time',
	component:times
}]
export default routers


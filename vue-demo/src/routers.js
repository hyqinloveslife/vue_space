import Home from './components/login.vue'
import times from './components/timeComponent.vue'
import fruits from './components/elements/fruit.vue'
import titles from './components/elements/title.vue'
import zhihu from './components/elements/zhihu.vue'
import articles from './components/elements/article.vue'
import firstpage from './components/elements/firstpage.vue'
import newspage from './components/elements/newspage.vue'

//所有需要跳转的页面，难道都需要在这个js文件中注册吗？那不是很麻烦？

const routers = [{
	path: '/login',
	name: 'home',
	component: Home
}, {
	path: '/fruits',
	component: fruits
},
{
	path:'/time',
	component:times
},
{
	path:'/titles',
	component:titles
},{
	path:'/zhihu',
	component:zhihu,
	children:[
		{path:'/zhihu/articles',component:articles},
		{path:'/zhihu/fruits',component:fruits},
		{path:'/zhihu/firstpage',component:firstpage,name:'main'},
		{path:'/zhihu/newspage',component:newspage,name:'news'}
	]
}]
export default routers


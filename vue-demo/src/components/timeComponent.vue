<template>
	<div>
		<h3>{{nowTime}}  <titles></titles>  </h3>
		
	</div>
</template>

<script>
	
	import titles from './elements/title.vue'
	
	export default{
		name:'Times',//这个name表示组件被引用的名字，最好和引用的地方是相同的
		data() {
			return {
				nowTime: new Date().getFullYear()+"年"+(new Date().getUTCMonth()+1)+"月"+new Date().getUTCDate()+"日"
			}
		},
		components: {
			titles,
		}
	}
	
</script>

<style>
	
</style>
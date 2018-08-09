<template>
</template>

<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	
	Vue.use(VueRouter);
	
	const router = new VueRouter();
	
	router.map({
		'view-a':{component:ViewA},
		'view-b':{component:ViewB}
	})
	
	export default router;
	
</script>

<style>

</style>

<template>
	<div>
		<div class="header">
			<p> {{title}} </p>
		</div>
		<div class="blank"></div>
	</div>
</template>

<script>
	export default {
		name: 'headers',
		data() {
			return {
				title: '知乎日报'
			}
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.header {
		margin: 0;
		width: 100%;
		position: fixed;
		display: block;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 24px;
		background: linear-gradient(to top right, #cddc39, #76EEC6, #71C671);
		/* 颜色渐变效果 */
	}

	.blank {
		clear: both;
		overflow: hidden;
		display: block;
		height: 50px;
	}
</style>

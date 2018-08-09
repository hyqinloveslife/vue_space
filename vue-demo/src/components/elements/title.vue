<template>
    <span v-bind:class="titleStyle">
        {{title}}
    </span>
</template>

<script>

    export default {
        name: 'titles',
        data() {
            return {
                title: '司徒雷登的水果店',
				titleStyle:{
					isBig:true,
					isRed:true
				}
            }
        },
    }
</script>

<style>
	.isBig{
		font-size: 24px;
	}
	.isRed{
		color: red;
	}
</style>

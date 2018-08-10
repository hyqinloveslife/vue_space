<template>
    <div class="hello" v-if="seen()">
        <h1>{{ msg }}</h1>
        <h2>{{hello}}</h2>
        <h2>翻转效果:{{reverseMsg}}</h2>
		<p>Using mustaches:{{rawHtml}}</p>
		<p>Using v-html directive :<span v-html="rawHtml"></span> </p>
		<input type="text" name="in"  /><button v-bind:disabled="isButtonDisabled">Button</button>
		<p v-if="seen()">现在你看到我了</p>
		<p v-else>no</p>
		<a v-bind:href="url">zhangsan</a>
		<a v-on:click="doSomething">lisi</a>
		<p class="beRed" v-bind:class="classType">{{fullname}}</p>
	</div>
	<div v-else>
		<headers></headers>
		<!-- <Times></Times> -->
		<!-- <fruits></fruits> -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<bottoms></bottoms>
	</div>
	
</template>

<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	
	import headers from './elements/header.vue'
	import fruits from './elements/fruit.vue'
	import Times from './timeComponent.vue'
	import bottoms from './elements/bottom.vue'
	
	
	
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
				hello:'hello world!!!',
				rawHtml:'<span style="color:red">红色</span>',
				firstName:'尼古拉斯',
				lastName:'赵四',
				classType:{
					active:true,
					toBig:true,
					toShow:true
				}
            }
        },
		computed:{
			reverseMsg:function(){
				this.hello = 'goodbye'
				return this.hello.split('').reverse().join('')
			},
			fullname:{
				get:function(){
					return this.firstName+"·"+this.lastName
				},
				set:function(newValue){
					var names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}
			}
		},
		methods: {
			isButtonDisabled() {
				return true
			},
			seen(){
				return false
			},
			url(){
				return 'https://cn.bing.com/'
			},
			doSomething(){
				this.fullname = '金毛狮王 谢逊'
			}
		},
		components: {
			fruits,
			Times,
			headers,
			bottoms,
		}
    }
	
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
	.toBig{
		font-size: 30px;
	}
</style>

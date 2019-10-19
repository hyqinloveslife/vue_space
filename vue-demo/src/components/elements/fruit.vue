<template style="overflow-y: visible;">
	<div class="container" id="fruit-id">
		<h5>欢迎光临司徒雷登水果店,这里有全世界最绿色最新鲜最优惠的水果</h5>
		<ul>
			<li v-for="(element,index) in data.items">
				<span>{{index+1}} &nbsp; </span>
				<span> {{element.msg}} </span>
				&nbsp;&nbsp; 
				<span> {{element.price}} </span>
				<span>元/kg</span> 
			</li>
		</ul>
		<div>
			<button v-on:click="addFruits()" value="新增水果">新增水果</button>
			<button v-on:click="intoVagetable(2)">{{fruitType}}</button>
			<button v-on:click="intoVagetable(3)">{{fruitType2}}</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:'fruits',
		data() {
			return {
				data: {
					items:[
						{msg:'苹果',price:16.8},
						{msg:'梨子',price:10.8},
						{msg:'香蕉',price:18.8},
						{msg:'葡萄',price:20.8}
					]
				},
				fruitType:'蔬菜专区',
				fruitType2:'咸菜专区'
				
			}
		},
		methods: {
			addFruits() {
				// var fruitSize = this.fruitArray().size;
				let newFruit = this.fruitArray();
				console.log(newFruit);
				
				this.data.items.push({msg:newFruit,price:parseFloat(Math.random()*20).toFixed(1)});
				
			},
			fruitArray(){
				var fruits = new Array();
				fruits.push('苹果');
				fruits.push('哈密瓜');
				fruits.push('西瓜');
				fruits.push('橙子');
				fruits.push('荔枝');
				fruits.push('柚子');
				fruits.push('布朗');
				fruits.push('火龙果');
				fruits.push('香蕉');
				
				let randomValue = parseInt(Math.random()*fruits.length);
				// console.log(randomValue);
				return fruits[randomValue];
			},
			intoVagetable(param){
				console.log(param);
				if(param=='2'){
					this.$router.push('./login');
				}else if(param=='3'){
					this.$router.push('./time');
				}
				
			}
		},
		created:function(){
			console.log(this.$route.query.name);
		}
	}
	
	
	
	
	
</script>
<style scoped="scoped">
	body{
		overflow-y: visible;
	}
	.container{
		margin-bottom: 50px;
	}
	ul{
		list-style: none;
	}
	ul li{
		text-align: left;
	}
</style>
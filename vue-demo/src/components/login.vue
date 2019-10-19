<template>
	<div class="container-login">
		<div class="blank"></div>
		<!-- <p> 测试，登陆页面</p>
		<p> 账号： <input type="text" placeholder="请输入账号" /> </p>
		<p> 密码： <input type="password" placeholder="请输入密码" /> </p>
		<p> 
			<button @click="login()">login</button> 
			<button @click="goto()">back</button> 
		</p> -->
		<el-form :model="book"  :rule="rules" ref="book" label-width="100px" class="demo-book">
			<el-form-item label="书名" prop="name">
				<el-input v-model="book.name"></el-input>
			</el-form-item>
			<el-form-item label="简介" prop="referred">
				<el-input  v-model="book.referred" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="价格" prop="price">
				<el-input  v-model="book.price" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="出版社" prop="published">
				<el-input  v-model="book.published" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="作者" prop="author">
				<el-input  v-model="book.author" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="出版时间" prop="publishDate">
				<el-date-picker type="date" placeholder="选择日期" v-model="book.publishDate" style="width: 100%;"></el-date-picker>
			</el-form-item>
			<el-form-item label="详细介绍" prop="desc">
				<el-input  v-model="book.desc" type="textarea" :autosize="{minRows:2,maxRows:4}"></el-input>
			</el-form-item>
			<el-form-item label="唯一标识码" prop="isbn">
				<el-input  v-model="book.isbn" autocomplete="off"></el-input>
			</el-form-item>
			<!-- <el-form-item label="登陆选项">
				<el-checkbox label="隐身登陆" name="type"></el-checkbox>
				<el-checkbox label="记住用户名" name="type"></el-checkbox>
			</el-form-item> -->
			<el-form-item>
				<el-button type="primary" @click="submitForm(book)" :disabled="is_disabled"  >提交</el-button>
				<el-button @click="resetForm('book')">重置</el-button>
				<el-button @click="goback(book)">禁用</el-button>
			</el-form-item>
		</el-form>

		<!-- <el-link :underline="false">
			<router-link :to="{path:'/fruits',query:{name:apiUrl}}" >还没有账号？注册新账号</router-link>
		</el-link> -->
	</div>
</template>

<script>
	// import datas from '/api/latest'

	export default {
		name: 'login',
		data() {
			/* 定义变量 */
			var validatePass = (rule, value, callback) => {
				if (value == '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.book.referred !== '') {
						this.$refs.book.validateField('checkPass');
					}
					callback();
				}
			};

			return {
				apiUrl: '/api/latest',
				is_disabled:false,
				book: {
					name: '',
					referred: '',
					published:'',
					publishDate:'',
					price:'',
					author:'',
					desc:'',
					isbn:''
				},
				rules: {
					name: [{
						required: true,
						message: '请输入书名',
						trigger: 'blur'
					}],
					referred: [{
						validate: validatePass,
						trigger: 'blur'
					}],
					price:[
						{required:true, message:'请输入价格',trigger:'blur'}
					],
					published:[
						{required:true,message:'请输入出版社名字'}
					]
					
				}

			}
		},
		methods: {
			
			goto() {
				this.$router.go(-1);
			},
			/* login() {
				this.$http.get('../../../static/data.json').then(function(res) { //静态资源文件要放在static目录下面，不然会默认请求vue文件
					console.log(res.data.data)
				}, function() {
					console.log('请求失败');
				})
			}, */
			submitForm(formName){
				console.log(' submitForm的数据==> '+ JSON.stringify(formName) );
				/* 传过来整个Java对象,可以使用axios */
				this.$http.post(global.baseURI2+'/books/booklist',formName)
					.then(function(res){
						console.log(res);
						if(res.status==200){
							this.$message.success("保存书本信息成功");
							this.is_disabled = true;
						}
					},function(err){
						console.log(JSON.stringify(err));
						this.$message.error('获取数据错误:'+err.status);
					});
				
			},
			resetForm(formItem){
				console.log(formItem);
				/* 清空表单 */
				this.$refs[formItem].resetFields();
				this.is_disabled = false;
			},
			goback(formName){
				this.$message('返回！该功能还在建设中');
			}
		},
	}
</script>

<style>
	.container-login {
		margin: 0 auto;
		width: 50%;
	}
</style>

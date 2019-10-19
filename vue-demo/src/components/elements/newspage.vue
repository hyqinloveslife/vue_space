<template>
	<el-main>
		<el-table :data="booklist" style="width: 100%;">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="书名"><span>{{props.row.name}}</span></el-form-item>
						<el-form-item label="简介"><span>{{props.row.desc}}</span></el-form-item>
						<el-form-item label="价格"><span>{{props.row.price}}</span></el-form-item>
						<el-form-item label="出版社"><span>{{props.row.published}}</span></el-form-item>
						<el-form-item label="出版时间"><span>{{props.row.publishDate}}</span></el-form-item>
						<el-form-item label="作者"><span>{{props.row.author}}</span></el-form-item>
						<el-form-item label="国际标准书号"><span>{{props.row.isbn}}</span></el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column label="书名" prop="name"></el-table-column>
			<el-table-column label="价格" prop="price"></el-table-column>
			<el-table-column label="简介" prop="desc"></el-table-column>
		</el-table>
	</el-main>
</template>

<script>
	export default {
		name: 'newspage',
		data() {
			return {
				booklist: ''
			}
		},
		created: function() {

			this.$http.get(global.baseURI2 + '/books/booklist')
				.then(function(res) {
					console.log(res);
					this.booklist = res.body;
				}, function() {
					alert('请求失败');
				});
		},
		methods: {

		},
	}
</script>

<style>
	.demo-table-expand {
		font-size: 0;
	}

	.demo-table-expand label {
		width: 120px;
		color: #99a9bf;
	}

	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 100%;
	}
	.el-form-item__label{
		width: 30%;
	}
</style>

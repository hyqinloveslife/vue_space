<template>
	<el-container>
		<el-main>
			<el-table :data="booklist" ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange"
			 border :row-class-name="tableRowClassName" style="width: 100%;" height="400">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column fixed="left" label="操作" width="100">
					<template slot-scope="scope">
						<el-button @click="view(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180"></el-table-column>
				<el-table-column prop="description" label="简介" width="400"></el-table-column>
				<el-table-column prop="price" label="价格" width="80"></el-table-column>
				<el-table-column prop="isbn" label="ISBN" width="200"></el-table-column>
			</el-table>
		</el-main>
	</el-container>
	<!-- <div>
		<div class="title">
			BOOKSHOP
		</div>
		<div>
			<ul id="books">
				<li v-for="book in booklist">
					<span>
						{{book.name}}
					</span>
					 <span>
						 {{book.price}}
					 </span>
					 <span>
						 {{book.desc}}
					 </span>
					 <span>
						 {{book.isbn}}
					 </span>
				</li>
			</ul>
			
			
			
		</div>
	</div> -->
</template>

<!-- 写js的区域 -->
<script>
	export default {
		name: 'bookshop',
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex % 2 == 0) {
					return 'warning-row';
				} else if (rowIndex % 2 == 1) {
					return 'success-row';
				}
				return '';
			},
			view(row) {
				console.log(row);
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},
		data() {
			return {
				booklist: '',
				multipleSelection: []
			};
		},
		created: function() {
			this.$http.get(global.baseURI2 + '/books/booklist')
				.then(function(res) {
					console.log(res);
					this.booklist = res.body;
				}, function() {
					alert('请求失败');
				});
		}
	}
</script>

<!-- 写样式的区域 -->
<style>
	.title {
		font-family: "微软雅黑";
		font-size: 24px;
	}

	li {
		display: flex;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-main {
		background-color: #E9EEF3;
		text-align: center;
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #f0f9eb;
	}
</style>

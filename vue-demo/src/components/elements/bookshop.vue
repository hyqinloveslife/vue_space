<template>
	<el-container>
		<el-header>
			<el-button type="primary" @click="add">新增</el-button>
			<el-button type="danger" @click="remove">删除</el-button>
		</el-header>

		<el-main>
			<el-table :data="booklist" ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange"
			 border :row-class-name="tableRowClassName" style="width: 100%;" height="500">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column fixed="left" label="操作" width="100">
					<template slot-scope="scope">
						<el-button @click="view(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="name" label="书名" width="180"></el-table-column>
				<el-table-column prop="author" label="作者" width="80"></el-table-column>
				<el-table-column prop="referred" label="简介" width="500" :show-overflow-tooltip="show_overflow"></el-table-column>
				<el-table-column prop="published" label="出版社" width="150"></el-table-column>
				<!-- 格式化时间戳，关键是 formatter前面的冒号 :  没有就报错 -->
				<el-table-column prop="publishDate" label="出版时间" width="100" :formatter="timeFormatter"></el-table-column>
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
			},
			add: function() {

			},
			remove: function() {

			},

			timeFormatter: function(row, column, cellValue, index) {
				/* 
					row 表示行 
					column 表示列
					cellValue 表示值
					index 表示索引，这是第几行
				*/
				// console.log("row : "+JSON.stringify(row));
				// console.log("column :" + JSON.stringify(column));
				// console.log("cellValue : "+cellValue);
				// console.log("index : "+index);	

				if (cellValue !== '') {
					let dateArray = cellValue.split("T");
					return dateArray[0];
				}

			}
		},
		data() {
			return {
				show_overflow: true,
				booklist: [],
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

<template>
  <div>
    <el-page-header @back="goBack" content="權限管理">
    </el-page-header>
    <div style="float: left;margin-top: 10px;">
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="danger" @click="remove">删除</el-button>
    </div>

    <!-- tooltip-effect="dark" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName" -->
    <!-- <el-table :data="booklist" border style="width: 100%;"> -->
    <el-table ref="filterTable" :data="booklist" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
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


    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<!-- 写js的区域 -->
<script>
  import myHeader from './myHeader.vue'

  export default {
    name: 'bookshop',
    methods: {
      goBack() {
        history.go(-1);
      },
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
        alert(row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      add: function() {
        this.dialogFormVisible = true;
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
        multipleSelection: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    created: function() {
      /* global.baseURI2 + '/books/booklist'*/
      this.$http.get('../../../static/json/booklist.json')
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
<style scoped="scoped">
  /* .grid-content {
		border-radius: 4px;
		min-height: 36px;
	} */

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

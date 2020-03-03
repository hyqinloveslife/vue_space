<template>
  <div>
    <el-page-header @back="goBack" content="權限管理">
    </el-page-header>
    <div style="float: left;margin-top: 10px;">
      <el-button type="primary" size="small" @click="add">新增</el-button>
      <el-button type="danger" size="small" @click="remove">删除</el-button>
    </div>

    <!-- tooltip-effect="dark" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName" -->
    <!-- <el-table :data="booklist" border style="width: 100%;"> -->
    <el-table ref="filterTable" :data="booklist" style="width: 100%">
      <el-table-column fixed="left" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="view(scope.row,'view')" type="text" size="small">查看</el-button>
          <el-button @click="view(scope.row,'edit')" type="text" size="small">编辑</el-button>
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
      <!-- 这是一个隐藏列-->
      <el-table-column v-if="fakerValue" key="1" prop="id"></el-table-column>
    </el-table>


    <el-dialog title="书本详细" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-position="left">
        <el-form-item label="书名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" :disabled="editType"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author" auto-complete="off" :disabled="editType"></el-input>
        </el-form-item>
        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.referred" auto-complete="off" :disabled="editType"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth" prop="price" :rules="pricerule">
          <el-input v-model.trim="form.price" auto-complete="off" :disabled="editType"></el-input>
        </el-form-item>
        <el-form-item label="出版日期" :label-width="formLabelWidth">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.publishDate" style="width: 100%;" :disabled="editType"></el-date-picker>
        </el-form-item>
        <el-form-item label="ISBN" :label-width="formLabelWidth">
          <el-input v-model="form.isbn" auto-complete="off" :disabled="editType"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')" :disabled="editType">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<!-- 写js的区域 -->
<script>
  import myHeader from './myHeader.vue'

  export default {
    name: 'bookshop',
    components:{

    },
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
      /* 查看明细 与 编辑*/
      view(row,type) {
        console.log(type);
        this.form = row;
        this.dialogFormVisible = true;
        if(type=='edit'){
          this.editType = false;
        }else{
          this.editType = true;
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      /* 新增*/
      add: function() {
        this.dialogFormVisible = true;
      },
      remove: function() {
        this.$message('返回！该功能还在建设中');
      },
      /* 提交表单*/
      submitForm:function(formName){
        this.$message('返回！该功能还在建设中');
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
      /* 自定义规则*/
      var priceRule = (rule,value,callback)=>{
        if(value===undefined){
          callback(new Error('价格不能为空'));
          return;
        }
        if(value.indexOf(".")!=-1){
          var behindStr = value.split('.')[1];
          if(behindStr.split(" ").join("").length>2){
            callback(new Error('仅能有两位小数'));
          }
        }

        if(value!=parseFloat(value)){
          callback(new Error('请正确输入价格'));
        }else if(value<=0){
          callback(new Error('不能为负数'));
        }else{
          callback();
        }

      };

      return {
        fakerValue:false,
        show_overflow: true,
        booklist: [],
        multipleSelection: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        /* 设置表单是否可编辑状态  */
        editType:false,
        form: {
          name: '',
          author: '',
          referred: '',
          price: '',
          publishDate: '',
          published: '',
          isbn: '',
          id: ''
        },
        /* 定义表单中标签的宽度*/
        formLabelWidth: '120px',
        /* 定义价格的规则*/
        pricerule:[
          {required:true,message:'价格不能为空',trigger:'blue'},
          {validator:priceRule,trigger:'blur'}
          /* {required:true,message:'价格不能为空',trigger:'blur'},
          {type:'number',message:'价格必须为数字',trigger:'blur'} */
        ]
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

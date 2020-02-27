<template>
  <div>
    <el-steps :active="active"  align-center>
      <el-step title="步骤 1" description="這是第一個步驟" icon="el-icon-edit">
      </el-step>
      <el-step title="步骤 2" description="這是第二個步驟" icon="el-icon-upload">
      </el-step>
      <el-step title="步骤 3" description="這是第三個步驟" icon="el-icon-picture">
      </el-step>
    </el-steps>


    <el-button style="margin-top: 12px;" @click="prior">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
  "use strict"
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      prior(){
        if(--this.active<1){
          alert("已經是第一步了");
          this.active = 0;
        }
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style>
</style>

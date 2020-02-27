<template>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
</template>

<script>
  export default {
    name: 'titles',
    data() {
      return {
        activeName: 'newspage',
        titleStyle: {
          isBig: true,
          isRed: true
        },
        list: '',
        isSelect: 0


      }
    },
    created: function() {
      this.$http.get(global.baseURI + '/zhihu/zhihuList.do').then(function(res) { //静态资源文件要放在static目录下面，不然会默认请求vue文件
        console.log(res.data.data);
        let _data = res.data.data;
        this.list = _data.stories;
      }, function() {
        console.log('请求失败');
      })
    },
    methods: {
      readTitle(value) {
        console.log("id = " + value);
      },
      sele() {
        console.log(this.isSelect);
      },
      handleClick(tab, event) {
        console.log("/" + tab.name);
        // this.$router.push({path:"/"+tab.name});
      }
    },
  }
</script>

<style scoped="scoped">
  .isActive {
    background: white;
    border-left: deepskyblue 1px solid;
    border-right: deepskyblue 1px solid;
    border-top: deepskyblue 1px solid;
  }

  .isBig {
    font-size: 24px;
  }

  .isRed {
    color: red;
  }

  .artileLogo {
    width: 50px;
    height: 50px;
  }

  .views {
    display: flex;
    flex-flow: row;
    height: 50px;
    margin: 5px;
    border-bottom: #EEEEEE 1px solid;
  }

  .views .view-left {
    flex: 2;
  }

  .views .view-right {
    flex: 8;
  }

  #box {
    background: #EEEEEE;
    width: 100%;
  }

  #box ul {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
  }

  #box li {
    list-style: none;
    padding: 10px 20px;
    flex: 1;
    border-right: #F5F5DC 1px solid;
    align-content: center;
  }

  #box a {
    text-decoration: none;
    width: 100%;
  }

  #box a:hover {
    cursor: pointer;
  }

  /* .show{width: 300px;height: 300px;background: #ccc;float: left;margin: 20px 0px;} */

  .clear {
    clear: both;
  }
</style>

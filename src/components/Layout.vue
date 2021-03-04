<template>
  <div class="header_wrap">
    <div class="top_part">

    </div>
    <div class="nav">
      <el-menu 
        default-active="/" 
        mode="horizontal" 
        text-color="#a0adb5" 
        active-text-color="#feffff" 
        style="border-bottom: none;" 
        background-color="#1e50ae"
        router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu>
          <template slot="title">关于我们</template>
          <el-menu-item index="/aboutUs/introduction">公司介绍</el-menu-item>
          <el-menu-item index="/aboutUs/patents">公司专利</el-menu-item>
          <el-menu-item index="/aboutUs/qualifications">资质荣誉</el-menu-item>
        </el-submenu>
        
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style lang='scss' scoped>
.header_wrap{
  width: 100%;
  position: absolute;
  .top_part{
    height: 100px;
  }
  .nav{
    ::v-deep .el-menu {
      .el-menu-item{
        width: 124px;
        text-align: center;
        font-size: 16px;
      }
			.el-menu-item.is-active{
        background-color:#0d2e6b !important;
        border-bottom: 2px solid #388fee !important;
      }
      .el-submenu{
        .el-submenu__title{
          font-size: 16px;
        }
      }
      .el-submenu.is-active{
        .el-submenu__title{
          border-bottom-color: #388fee !important;
        }
      }
      
		}
  }
}
</style>
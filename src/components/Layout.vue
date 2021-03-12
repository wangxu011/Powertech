<template>
  <div class="layout_container">
    <div class="header_wrap">
      <div class="top_part">
        <div class="main_content">
          <div class="logo_wrap">
            <div class="img_wrap">
              <img src="../assets/images/home/logo.png" alt="">
            </div>
            <div class="comp_name_wrap">
              <p class="cn_name">北京实力源科技开发有限责任公司</p>
              <hr size="2px" color="black"/>
              <p class="en_name">BEIJING POWERTECH TECHNOLOGY CO.,LTD</p>
            </div>
          </div>
          <div class="hot_call">
            <div class="img_wrap">
              <img src="../assets/images/home/call.png" alt="">
            </div>
            <div class="phone_number_wrap">
              <p class="word">{{$t("common.hotline")}}</p>
              <p class="number">13811401500</p>
            </div>
          </div>
        </div>
        <div class="lang_wrap">
          <img src="../assets/images/home/language.png" class="lang_img" alt="">
          <span 
            :class="{'selected':locale==='CN'}" 
            class="lang_word"
            @click="switchLang('CN')"
            title="中文">中</span>
          <span style="margin: 0 7px 0 5px;">|</span>
          <span 
            :class="{'selected':locale==='EN'}" 
            class="lang_word"
            @click="switchLang('EN')"
            title="English">EN</span>
        </div>
      </div>
      <div class="nav">
        <el-menu 
          :default-active="activeRoute" 
          mode="horizontal" 
          text-color="#a0adb5" 
          active-text-color="#feffff" 
          style="border-bottom: none;" 
          background-color="#1e50ae"
          router>
          <el-menu-item index="/">{{$t("menu.home")}}</el-menu-item>
          <el-submenu index="/aboutUs">
            <template slot="title">{{$t("menu.aboutUs")}}</template>
            <el-menu-item index="/aboutUs/introduction">{{$t("menu.profile")}}</el-menu-item>
            <el-menu-item index="/aboutUs/patents">{{$t("menu.patents")}}</el-menu-item>
            <el-menu-item index="/aboutUs/qualifications">{{$t("menu.honor")}}</el-menu-item>
          </el-submenu>
          <el-submenu index="/companyTrends">
            <template slot="title">{{$t("menu.companyTrends")}}</template>
            <el-menu-item index="/companyTrends/news">{{$t("menu.news")}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="content_container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Cookies from 'js-cookie'

  export default {
    components: {
      Footer
    },
    data () {
      return {
        locale: Cookies.get('lang') || 'CN'
      }
    },
    methods: {
      switchLang(locale) {
        console.log(locale)
        this.locale = locale
        Cookies.set('lang', locale)
        this.$i18n.locale = locale
      }
    },
    computed: {
      activeRoute() {
        return this.$route.path
      }
    }
  }
</script>

<style lang='scss' scoped>
.layout_container{
  position: relative;
  .header_wrap{
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #ffffff;
    z-index: 1000;
    .top_part{
      width: 1400px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .main_content{
        width: 1100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo_wrap{
          display: flex;
          align-items: center;
          .img_wrap{
            img{
              width: 66px;
            }
          }
          .comp_name_wrap{
            margin-left: 5px;
            .cn_name{
              font-size: 18px;
            }
            .en_name{
              font-size: 12px;
            }
          }
        }
        .hot_call{
          display: flex;
          align-items: center;
          .phone_number_wrap{
            margin-left: 6px;
            .word{
              font-size: 14px;
              margin-bottom: 4px;
            }
            .number{
              font-size: 20px;
              color: #1e50ae;
            }
          }
        }
      }
      .lang_wrap{
        display: flex;
        align-items: center;
        .lang_img{
          width: 20px;
          margin-right: 6px;
        }
        .lang_word{
          width: 20px;
          text-align: center;
          display: inline-block;
          cursor: pointer;
          &:hover{
            font-weight: bold;
            color: #1e50ae;
          }
        }
        .selected{
          font-weight: bold;
          color: #1e50ae;
        }
      }
    }
    .nav{
      background-color: #1e50ae;
      ::v-deep .el-menu {
        width: 1400px;
        margin: 0 auto;
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
            background-color:#0d2e6b !important;
            border-bottom-color: #388fee !important;
          }
        }
        
      }
    }
  }
  .content_container{
    margin-top: 160px;
    padding-bottom: 50px;
    // border: 1px solid red;
  }
}
</style>
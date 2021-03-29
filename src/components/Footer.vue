<template>
  <div class="footer_wrap">
    <div class="top_wrap">
      <div class="link_wrap">
        <span class="link">{{$t('common.link')}}：</span>
        <a href="http://www.chinesevacuum.com/" target="_blank">{{$t('link.vacuum')}}</a>
        <a href="http://www.cut35.com/" target="_blank">{{$t('link.cutter')}}</a>
        <a href="http://www.terasolar.com.cn/" target="_blank">{{$t('link.teraSolar')}}</a>
        <a href="https://www.tzc.edu.cn/" target="_blank">{{$t('link.taizhou')}}</a>
      </div>
      <div class="middle_wrap">
        <div class="menu_wrap">
          <div class="menu_group" v-for="(menu, index) in menuList" :key="index">
            <p class="parent">{{$t(menu.title)}}</p>
            <p class="normal" 
              v-for="(child, i) in menu.children" 
              :key="i"
              @click="switchRoute(child.path)">{{$t(child.title)}}</p>
          </div>
        </div>
        <div class="contact_wrap">
          <div class="wechat_wrap">
            <img src="../assets/images/common/wechat.jpg">
          </div>
          <p class="label">{{$t('common.hotline')}}</p>
          <p class="phone">13811401500</p>
        </div>
      </div>
    </div>
    <div class="bottom_wrap">{{$t('common.right')}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuList: [
          {
            title: 'menu.aboutUs',
            children: [
              { title: 'menu.profile', path: '/aboutUs/introduction' },
              { title: 'menu.patents', path: '/aboutUs/patents' },
              { title: 'menu.honor', path: '/aboutUs/qualifications' }
            ]
          },
          {
            title: 'menu.companyTrends',
            children: [
              { title: 'menu.news', path: '/companyTrends/news' }
            ]
          },
          {
            title: 'menu.products',
            children: [
              { title: 'menu.hard', path: '/products/hard' },
              { title: 'menu.decorative', path: '/products/decorative' },
              { title: 'menu.photoelectric', path: '/products/photoelectric' },
              { title: 'menu.research', path: '/products/research' },
              { title: 'menu.magnetic', path: '/products/magnetic' },
              { title: 'menu.fuel', path: '/products/fuel' },
              { title: 'menu.ion', path: '/products/ion' },
              { title: 'menu.auxiliary', path: '/products/auxiliary' }
            ]
          },
          {
            title: 'menu.contactUs',
            children: [
              { title: 'menu.contactInfo', path: '/contactUs/info' }
            ]
          }
        ]
      }
    },
    methods: {
      switchRoute(path) {
        this.$router.push({path})
      }
    }
  }
</script>

<style lang='scss' scoped>
.footer_wrap{
  .top_wrap{
    height: 400px;
    background-color: #1f1f1f;
    .link_wrap{
      width: 1200px;
      margin: 0 auto;
      border-bottom: 1px solid #4c4c4c;
      .link{
        font-size: 15px;
        color: #8c8c8c;
        line-height: 5em;
      }
      a{
        color: #666666;
        font-size: 13px;
        margin-left: 15px;
      }
    }
    .middle_wrap{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .menu_wrap{
        display: flex;
        .menu_group{
          margin-right: 45px;
          .parent{
            color:#d9d9d9;
            font-size: 16px;
            margin-bottom: 10px;
          }
          .normal{
            color:#4c4c4c;
            font-size: 14px;
            line-height: 2em;
            cursor: pointer;
            &:hover{
              color:#d9d9d9;
            }
          }
        }
      }
      .contact_wrap{
        .wechat_wrap{
          width: 150px;
          height: 150px;
          margin: 0 auto;
          img{
            width: 100%;
          }
        }
        .label{
          font-size: 16px;
          color: #e5e5e5;
          line-height: 2em;
          text-align: center;
        }
        .phone{
          font-size: 30px;
          font-weight: bold;
          color: #13439d;
          text-align: center;
        }
      }
    }
  }
  .bottom_wrap{
    height: 50px;
    line-height: 50px;
    background-color: #121212;
    text-align: center;
    color: #4c4c4c;
    font-size: 14px;
  }
}
</style>
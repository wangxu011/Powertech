<template>
  <div class="about_container">
    <div class="banner_wrap"></div>
    <div class="content_wrap">
      <SideBar :routes="routes"></SideBar>
      <div class="inner_wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'

  export default {
    data () {
      return {
        routes: [
          {
            name: 'menu.profile',
            path: '/aboutUs/introduction'
          },
          {
            name: 'menu.patents',
            path: '/aboutUs/patents'
          },
          {
            name: 'menu.honor',
            path: '/aboutUs/qualifications'
          }
        ]
      }
    },
    components: {
      SideBar
    }
  }
</script>

<style lang='scss' scoped>
.about_container{
  .banner_wrap{
    height: 300px;
    background-image: url('../../assets/images/common/banner.jpg');
    background-size: cover;
    background-position: center;
  }
  .content_wrap{
    width: 1200px;
    margin: 0 auto;
    // border: 1px solid red;
    display: flex;
    margin-top: 50px;
    .inner_wrap{
      width: calc(100% - 200px);
      // border: 1px solid orange;
      margin-left: 50px;
    }
  }
}
</style>
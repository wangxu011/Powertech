<template>
  <div class="about_container">
    <div class="banner_wrap"></div>
    <div class="content_wrap">
      <SideBar :routes="routes"></SideBar>
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
            name: '公司介绍',
            path: '/aboutUs/introduction'
          },
          {
            name: '公司专利',
            path: '/aboutUs/patents'
          },
          {
            name: '资质荣誉',
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
    width: 1400px;
    margin: 0 auto;
    border: 1px solid red;
  }
}
</style>
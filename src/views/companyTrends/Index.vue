<template>
  <div class="news_container">
    <div class="banner_wrap"></div>
    <div class="content_wrap">
      <router-view></router-view>
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
.news_container{
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
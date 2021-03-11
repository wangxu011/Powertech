<template>
  <div class="content_container">
    <p class="title">{{$t('menu.patents')}}</p>
    <p class="sub_title">{{$t('companyPatents.content')}}</p>
    <div class="img_wrap">
      <img src="../../assets/images/aboutUs/patents.jpg" alt="">
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
.content_container{
  .title{
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  .sub_title{
    text-align: center;
    line-height: 2em;
  }
  .img_wrap{
    img{
      width: 100%;
    }
  }
}
</style>
<template>
  <div class="news_detail_container">
    <p class="title">{{detail.title}}</p>
    <p class="time">{{$t('common.time')}}：{{detail.publish_year + '-' + detail.publish_date}}</p>
    <div class="content" v-html="detail.detail"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detail: null
      }
    },
    created() {
      if(localStorage.getItem('newsDetail')) {
        this.detail = JSON.parse(localStorage.getItem('newsDetail'))
        console.log(this.detail)
      }
    }
  }
</script>

<style lang='scss'>
.news_detail_container{
  min-height: 100%;
  // border: 1px solid greenyellow;
  .title{
    font-size: 35px;
    text-align: center;
  }
  .time{
    font-size: 15px;
    line-height: 4em;
    color: #aaa;
    text-align: center;
  }
  .content{
    .text{
      font-size: 16px;
      line-height: 1.8em;
      text-indent: 2em;
    }
    .img_wrap{
      position: relative;
      height: 400px;
      margin-top: 30px;
      img{
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
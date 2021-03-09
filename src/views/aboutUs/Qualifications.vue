<template>
  <div class="content_container">
    <p class="title">资质荣誉</p>
    <div class="img_wrapper">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="img_wrap">
          <img :src="item.img_path" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios/index.js'

  export default {
    data () {
      return {
        list: []
      }
    },
    created() {
      axios.get('/data/qualifications.json').then(res => {
        console.log(res)
        this.list = res.value
      })
    }
  }
</script>

<style lang='scss' scoped>
.content_container{
  .title{
    font-size: 40px;
    text-align: center;
  }
  .sub_title{
    text-align: center;
    line-height: 2em;
  }
  .img_wrapper{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .item{
      width: 280px;
      height: 200px;
      border: 1px solid #eee;
      border-radius: 6px;
      position: relative;
      padding: 20px;
      margin-left: 48px;
      margin-top: 48px;
      .img_wrap{
        height: 100%;
        position: relative;
        overflow: hidden;
        img{
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
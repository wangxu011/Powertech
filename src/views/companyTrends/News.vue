<template>
  <div class="content_container">
    <p class="title">{{$t('menu.news')}}</p>
    <div class="list_wrap">
      <div class="news_wrap"> 
        <div class="cover_wrap">
          <img src="">
        </div>
        <div class="content_wrap">
          <p class="title"></p>
          <p class="discribe"></p>
        </div>
        <div class="time_wrap">
          <p class="date"></p>
          <p class="year"></p>
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
        newsList: []
      }
    },
    created() {
      axios.get('/data/news.json').then(res => {
        this.newsList = res.value
        console .log(res)
      })
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
  .list_wrap{
    .news_wrap{
      display: flex;
      .cover_wrap{
        width: 120px;
        height: 120px;
        position: relative;
        border: 1px solid pink;
        overflow: hidden;
        img{
          height: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .content_wrap{
        .title{

        }
        .discribe{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .time_wrap{

      }
    }
  }
}
</style>
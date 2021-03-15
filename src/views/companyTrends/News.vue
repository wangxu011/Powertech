<template>
  <div class="content_container">
    <p class="title">{{$t('menu.news')}}</p>
    <div class="list_wrap">
      <div class="news_wrap" 
        v-for="news in newsList" 
        :key="news.id"
        @click="toDetail(news.id)"> 
        <div class="cover_wrap">
          <img class="cover" :src="news.cover_path">
        </div>
        <div class="content_wrap">
          <p class="sub_title">{{news.title}}</p>
          <p class="discribe">{{news.discribe}}</p>
        </div>
        <div class="time_wrap">
          <p class="date">{{news.publish_date}}</p>
          <p class="year">{{news.publish_year}}</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
    },
    methods: {
      toDetail(id) {
        this.$router.push({path: `/companyTrends/news/${id}`})
      }
    }
  }
</script>

<style lang='scss' scoped>
.content_container{
  border: 1px solid red;
  position: relative;
  .title{
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  .list_wrap{
    .news_wrap{
      display: flex;
      padding-bottom: 50px;
      margin-bottom: 50px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      &:hover > .cover_wrap > .cover{
        height: 120%;
      }
      .cover_wrap{
        width: 300px;
        height: 180px;
        position: relative;
        // border: 1px solid pink;
        overflow: hidden;
        .cover{
          height: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          transition: all .3s ease-in-out;
        }
      }
      .content_wrap{
        width: 600px;
        margin-left: 50px;
        padding: 50px 0;
        margin-right: 160px;
        .sub_title{
          font-size: 25px;
        }
        .discribe{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 30px;
        }
      }
      .time_wrap{
        width: 80px;
        height: 75px;
        border-radius: 3px;
        background-color: #eee;
        color: #626971;
        text-align: center;
        margin-top: 50px;
        .date{
          font-size: 26px;
          font-weight: 700;
          line-height: 1.8em;
        }
        .year{
          font-size: 16px;
        }
      }
    }
  }
}
</style>
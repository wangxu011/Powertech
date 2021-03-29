<template>
  <div class="content_container">
    <div class="news_wrapper" v-if="!showDetail">
      <p class="title">{{$t('menu.news')}}</p>
      <div class="list_wrap">
        <div class="news_wrap" 
          v-for="news in newsList" 
          :key="news.id"
          @click="toDetail(news)"> 
          <div class="cover_wrap">
            <img class="cover" :src="news.cover_path">
          </div>
          <div class="content_wrap">
            <p class="sub_title">{{news.title}}</p>
            <p class="discribe">{{news.describe}}</p>
          </div>
          <div class="time_wrap">
            <p class="date">{{news.publish_date}}</p>
            <p class="year">{{news.publish_year}}</p>
          </div>
        </div>
      </div>
      <el-pagination 
        background 
        :total="totalList.length"
        :page-size="5"
        :current-page="currentPage"
        layout="total,prev,pager,next,jumper"
        @current-change="handlePageChange">
      </el-pagination>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import axios from '@/axios/index.js'

import Cookies from 'js-cookie'

  export default {
    data () {
      return {
        totalList: [],
        newsList: [],
        currentPage: 1,
        pageSize: 5,
        // 是否显示详情页
        showDetail: null,
        // 调用中文json还是英文json
        dataPath: ''
      }
    },
    created() {
      console.log(this.$store.state.locale)
      const pathLength = this.$route.path.split('/').length
      if(pathLength === 3) {
        this.dataPath = Cookies.get('lang') === 'CN' ? '/data/news.json' : '/data/news_en.json'
        this.getNewsList(this.dataPath)
      }else {
        this.showDetail = true
        this.selectedNews = JSON.parse(localStorage.getItem('newsDetail')) 
      }
    },
    methods: {
      toDetail(news) {
        this.showDetail = true
        // 将新闻详情存入localStorage中
        localStorage.setItem('newsDetail', JSON.stringify(news))
        this.$router.push({path: `/companyTrends/news/${news.id}`})
      },
      getList(page, size = 5) {
        this.newsList = this.totalList.slice((page-1)*size, page*size)
      },
      handlePageChange(page) {
        this.currentPage = page
        this.getList(page, this.pageSize)
      },
      getNewsList(dataPath) {
        this.showDetail = false
        axios.get(dataPath).then(res => {
          this.totalList = res.value
          this.getList(this.currentPage, this.pageSize)
        })
      }
    },
    watch: {
      $route: function (val) {
        const pathLength = val.path.split('/').length
        if(pathLength === 3) {
          this.dataPath = Cookies.get('lang') === 'CN' ? '/data/news.json' : '/data/news_en.json'
          this.getNewsList(this.dataPath)
        } 
      },
      '$store.state.locale': function (val) {
        const pathLength = this.$route.path.split('/').length
        // 先判断如果处在详情页，先跳转回列表页面，再切换语言
        if(pathLength === 4) {
          this.$router.push({
            path: '/companyTrends/news'
          })
        }else {
          this.dataPath = val === 'CN' ? '/data/news.json' : '/data/news_en.json'
          this.getNewsList(this.dataPath)
        }
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
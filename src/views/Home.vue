<template>
  <div class="home_container">
    <div class="swiper_wrap">
      <el-carousel height="500px" indicator-position="none">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <div class="img_wrap">
            <img :src="item.imgPath" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content_wrap">
      <div class="product_wrap">
        <p class="title">{{$t('menu.products')}}</p>
        <div class="item_wrap">
          <div class="item"
            @click="turnToProduct(product.path)"
            v-for="(product, index) in productList" :key="index">
            <div class="img_wrap">
              <img :src="product.img_path" alt="">
            </div>
            <div class="mask_wrap">
              <p class="name">{{$t(product.name)}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="news_wrap">
        <p class="title">{{$t('menu.news')}}</p>
        <div class="news" v-for="news in newsList" :key="news.id"
          @click="toNewsDetail(news)">
          <div class="main_part">
            <p class="news_title">{{news.title}}</p>
            <p class="describe">{{news.describe}}</p>
          </div>
          <div class="time">{{news.publish_year + '-' + news.publish_date}}</div>
        </div>
      </div>
      <div class="aboutUs_wrap">
        <div class="aboutUs_content">
          <div class="img_wrap">
            <img src="../assets/images/home/aboutUs.png" alt="">
          </div>
          <div class="text">
            <p class="bold">{{$t('menu.aboutUs')}}</p>
            <p class="content">{{$t('companyProfile.content1')}}</p>
            <p class="more" @click="toAboutUs">{{$t('common.more')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios/index.js'
import Cookies from 'js-cookie'

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      imgList: [
        {
          id: 1,
          imgPath: require('../assets/images/home/1.jpg')
        },
        {
          id: 2,
          imgPath: require('../assets/images/home/2.jpg')
        },
        {
          id: 3,
          imgPath: require('../assets/images/home/1.jpg')
        },
        {
          id: 4,
          imgPath: require('../assets/images/home/2.jpg')
        }
      ],
      productList: [
        {
          img_path: require('../assets/images/home/product/hard.jpg'),
          name: 'menu.hard',
          path: '/products/hard'
        },
        {
          img_path: require('../assets/images/home/product/decorative.jpg'),
          name: 'menu.decorative',
          path: '/products/decorative'
        },
        {
          img_path: require('../assets/images/home/product/photoelectric.jpg'),
          name: 'menu.photoelectric',
          path: '/products/photoelectric'
        },
        {
          img_path: require('../assets/images/home/product/research.jpg'),
          name: 'menu.research',
          path: '/products/research'
        },
        {
          img_path: require('../assets/images/home/product/magnetic.jpg'),
          name: 'menu.magnetic',
          path: '/products/magnetic'
        },
        {
          img_path: require('../assets/images/home/product/fuel.jpg'),
          name: 'menu.fuel',
          path: '/products/fuel'
        },
        {
          img_path: require('../assets/images/home/product/ion.jpg'),
          name: 'menu.ion',
          path: '/products/ion'
        },
        {
          img_path: require('../assets/images/home/product/auxiliary.jpg'),
          name: 'menu.auxiliary',
          path: '/products/auxiliary'
        }
      ],
      newsList: [],
      dataPath: ''
    }
  },
  created() {
    this.dataPath = Cookies.get('lang') === 'CN' ? '/data/news.json' : '/data/news_en.json'
    this.getNewsList()
  },
  methods: {
    toAboutUs() {
      this.$router.push({
        path: '/aboutUs/introduction'
      })
    },
    getNewsList() {
      axios.get(this.dataPath).then(res => {
        this.newsList = res.value.splice(0,4)
      })
    },
    toNewsDetail(news) {
      localStorage.setItem('newsDetail', JSON.stringify(news))
      this.$router.push({path: `/companyTrends/news/${news.id}`})
    },
    turnToProduct(path) {
      this.$router.push({
        path
      })
    }
  },
  watch: {
    '$store.state.locale': function (val) {
      this.dataPath = val === 'CN' ? '/data/news.json' : '/data/news_en.json'
      this.getNewsList()
    }  
  }
}
</script>
<style lang="scss">
.home_container{
  .swiper_wrap{
    .img_wrap{
      height: 100%;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      img{
        width: 100%;
        position: absolute;
      }
    }
  }
  .content_wrap{
    margin-top: 50px;
    // border: 1px solid red;
    .product_wrap{
      width: 1200px;
      margin: 0 auto;
      .title{
        font-size: 30px;
        text-align: center;
      }
      .item_wrap{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 60px;
        .item{
          width: 280px;
          margin-bottom: 26px;
          border-radius: 6px;
          box-shadow: 1px 4px 8px 4px #ddd;
          position: relative;
          cursor: pointer;
          &:hover > .mask_wrap{
            opacity: 1;
          }
          &:hover > .img_wrap > img{
            height: 110%;
          }
          .img_wrap{
            height: 200px;
            position: relative;
            overflow: hidden;
            border-radius: 6px;
            img{
              height: 100%;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              transition: all 0.5s;
            }
          }
          .mask_wrap{
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .5);
            opacity: 0;
            transition: opacity 0.5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            .name{
              text-align: center;
              font-size: 25px;
              color: #eee;
            }
          }
        }
      }
    }
    .news_wrap{
      width: 1200px;
      margin: 0 auto;
      margin-top: 45px;
      .title{
        font-size: 30px;
        text-align: center;
        margin-bottom: 60px;
      }
      .news{
        display: flex;
        justify-content: space-between;
        // margin-bottom: 20px;
        padding: 40px 0;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        &:hover{
          background-color: #eee;
        }
        .main_part{
          width: 800px;
          .news_title{
            font-size: 23px;
          }
          .describe{
            margin-top: 15px;
            font-size: 18px;
            color: #999;
            line-height: 2em;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .time{
          font-size: 16px;
          color: #ccc;
        }
      }
    }
    .aboutUs_wrap{
      background-image: url('../assets/images/home/us_bg.jpg');
      background-size: cover;
      padding: 60px 0;
      // background-color: #1e50ae;
      margin-top: 50px;
      .aboutUs_content{
        width: 1200px;
        display: flex;
        margin: 0 auto;
        align-items: center;
        .img_wrap{
          height: 280px;
          img{
            height: 100%;

          }
        }
        .text{
          margin-left: 30px;
          color: #eef4fe;
          .bold{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .content{
            font-size: 16px;
            line-height: 1.8em;
          }
          .more{
            margin-top: 30px;
            cursor: pointer;
            &:hover{
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>

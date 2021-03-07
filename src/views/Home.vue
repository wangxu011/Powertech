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
  </div>
</template>

<script>

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
      ]
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
}
</style>

<template>
  <div class="products_container">
    <div class="banner_wrap"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .products_container{
    .banner_wrap{
      height: 300px;
      background-image: url('../../assets/images/common/banner.jpg');
      background-size: cover;
      background-position: center;
    }
    .content_container{
      width: 1200px;
      margin: 0 auto;
      // border: 1px solid red;
      margin-top: 50px;
      .title{
        font-size: 40px;
        text-align: center;
        margin-bottom: 50px;
      }
      .product_wrapper{
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        margin-bottom: 20px;
        .product{
          width: 350px;
          // display: flex;
          justify-content: space-between;
          box-shadow: 1px 4px 8px 4px #ddd;
          border-radius: 6px;
          padding: 10px;
          margin-bottom: 30px;
          margin-right: 30px;
          cursor: pointer;
          &:hover > .img_wrap > img{
            height: 110%;
          }
          .title{
            font-size: 25px;
            text-align: center;
            margin-bottom: 0;
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
          }
          .img_wrap{
            height: 300px;
            // border: 1px solid pink;
            overflow: hidden;
            position: relative;
            margin-top: 20px;
            img{
              height: 100%;
              left: 50%;
              position: absolute;
              transform: translateX(-50%);
              transition: all .3s ease-in-out;
            }
          }
        }
      }
    }
  }
</style>
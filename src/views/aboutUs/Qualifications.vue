<template>
  <div class="content_container">
    <p class="title">{{$t('menu.honor')}}</p>
    <div class="img_wrapper">
      <div class="inner_wrapper" v-for="item in list" :key="item.id">
        <div class="item">
          <div class="img_wrap">
            <el-image
              :src="item.img_path"
              :preview-src-list="preViewList">
            </el-image>
            <!-- <img :src="item.img_path" alt=""> -->
          </div>
        </div>
        <p class="text">{{$t('honor.content')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios/index.js'

  export default {
    data () {
      return {
        list: [],
        preViewList: []
      }
    },
    created() {
      axios.get('/data/qualifications.json').then(res => {
        // console.log(res)
        this.list = res.value
        this.preViewList = this.list.map(item => (
          item.img_path
        ))
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
    .inner_wrapper{
      margin-left: 48px;
      margin-top: 48px;
      .item{
        width: 280px;
        height: 200px;
        border: 1px solid #eee;
        border-radius: 6px;
        position: relative;
        padding: 20px;
        cursor: pointer;
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
      .text{
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
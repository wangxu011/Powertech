<template>
  <div class="product_detail_container">
    <div class="top_wrap">
      <div class="img_wrap">
        <div class="show_img_wrap">
          <div class="inner_wrap">
            <img class="show_img" :src="selectedImagePath">
          </div>
        </div>
        <div class="select_list_wrap">
          <div 
            v-for="(item, index) in detail.img_path_list"
            :key="index"
            class="select_wrap"
            :class="{'selected': selectedIndex === index}"
            @click="selectPic(index, item)">
            <img class="select" :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="text_wrap">
        <p class="title">{{detail.name}}</p>
        <div class="describe_wrap" v-html="detail.describe"></div>
      </div>
    </div>
    <el-tabs v-model="tabValue">
      <el-tab-pane :label="$t('common.tech')" name="tech">
        <div class="tech_wrap" v-html="detail.tech"></div>
      </el-tab-pane>
      <el-tab-pane :label="$t('common.scope')" name="scope">
        <div class="scope_wrap" v-html="detail.scope">
          <!-- <div class="big_wrap">
            <img src="/images/news/1/1.jpg">
          </div> -->
          <!-- <div class="small_wrap">
            <div class="item_wrap">
              <img src="/images/news/1/1.jpg" />
            </div>
            <div class="item_wrap">
              <img src="/images/news/1/1.jpg" />
            </div>
            <div class="item_wrap">
              <img src="/images/news/1/1.jpg" />
            </div>
            <div class="item_wrap">
              <img src="/images/news/1/1.jpg" />
            </div>
          </div> -->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detail: null,
        selectedImagePath: '',
        selectedIndex: 0,
        tabValue: 'tech'
      }
    },
    created() {
      if(localStorage.getItem('productDetail')) {
        this.detail = JSON.parse(localStorage.getItem('productDetail'))
        this.selectedImagePath = this.detail.img_path_list[0]
      }
    },
    methods: {
      selectPic(index, item) {
        this.selectedIndex = index
        this.selectedImagePath = item
      }
    }
  }
</script>

<style lang='scss'>
.product_detail_container{
  min-height: 100%;
  // border: 1px solid greenyellow;
  .top_wrap{
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    .img_wrap{
      width: 500px; 
      // border: 1px solid lightblue;
      .show_img_wrap{
        width: 350px;
        height: 350px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 5px;
        .inner_wrap{
          height: 100%;
          position: relative;
          overflow: hidden;
          border-radius: 5px;
          .show_img{
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      .select_list_wrap{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .selected{
          border: 8px solid #13439d !important;
        }
        .select_wrap{
          width: 100px;
          height: 100px;
          box-sizing: border-box;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
          border: 1px solid #aaa;
          cursor: pointer;
          .select{
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .text_wrap{
      width: 430px;
      // border:1px solid red;
      .title{
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }
      .describe_wrap{
        font-size: 16px;
        line-height: 1.8em;
        .describe{
          text-indent: 2em;
          text-align: justify;
        }
      }
    }
  }
  .el-tabs{
    margin-top: 30px;
    .el-tabs__item{
      text-align: center;
      font-size: 18px;
      &:hover{
        color: #1e50ae;
      }
    }
    .el-tabs__active-bar{
      background-color: #1e50ae;
    }
    .el-tabs__item.is-active{
      color: #1e50ae;
    }
    .el-tabs__content{
      padding: 0 20px;
      .tech_wrap{
        .img_wrap{
          margin: 10px auto;
          width: 800px;
          height: auto;
          position: relative;
          img{
            width: 100%;
          }
        }
      }
      .scope_wrap{
        .title{
          font-size: 16px;
          line-height: 2em;
          text-align: center;
          margin-bottom: 0;
        }
        .big_wrap{
          height: 500px;
          margin: 0 auto;
          margin-top: 15px;
          position: relative;
          img{
            position: absolute;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .small_wrap{
          display: flex;
          flex-wrap: wrap;
          width: 550px;
          margin: 0 auto;
          margin-top: 15px;
          .item_wrap{
            width: 250px;
            height: 250px;
            position: relative;
            overflow: hidden;
            margin-right: 20px;
            margin-bottom: 20px;
            img{
              position: absolute;
              height: 100%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }
    }
  }
}
</style>
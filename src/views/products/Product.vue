<template>
  <div class="content_container">
    <div class="product_container" v-if="!showDetail">
      <div class="title">{{$t(`menu.${this.currentProductType}`)}}</div>
      <div class="product_wrapper">
        <div class="product" 
          v-for="product in productList" 
          :key="product.id"
          @click="toDetail(product)">
          <p class="title">{{product.name}}</p>
          <div class="img_wrap">  
            <img :src="product.cover_img_path" alt="">
          </div>
          <!-- <div class="text_wrap">
            <p class="title">{{product.name}}</p>
            <p class="describe">{{product.describe}}</p>
          </div> -->
        </div>
      </div>
      <el-pagination 
        background 
        :total="totalList.length"
        :page-size="6"
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
  data() {
    return {
      totalList: [],
      productList: [],
      currentPage: 1,
      pageSize: 6,
      selectedProduct: null,
      showDetail: null,
      dataPath: '',
      // 当前的设备类型，共八种类型
      currentProductType: ''
    }
  },
  created() {
    const pathLength = this.$route.path.split('/').length
    if(pathLength === 3) {
      this.currentProductType = this.$route.path.split('/')[2]
      this.dataPath = Cookies.get('lang') === 'CN' ? `/data/products/${this.currentProductType}/cn.json` : `/data/products/${this.currentProductType}/en.json`
      this.getProductsList(this.dataPath)
    }else {
      this.showDetail = true
      this.selectedProduct = JSON.parse(localStorage.getItem('productDetail')) 
    }
  },
  methods: {
    toDetail(product) {
      this.showDetail = true
      // 将产品详情存入localStorage中
      localStorage.setItem('productDetail', JSON.stringify(product))
      this.$router.push({path: `/products/${this.currentProductType}/${product.id}`})
    },
    getProductsList(path) {
      this.showDetail = false
      axios.get(path).then(res => {
        this.totalList = res.value
        this.getList(this.currentPage, this.pageSize)
      })
    },
    handlePageChange(page) {
      this.currentPage = page
      this.getList(page, this.pageSize)
    },
    getList(page, size = 6) {
      this.productList = this.totalList.slice((page-1)*size, page*size)
    }
  },
  watch: {
    $route: function (val) {
      const pathLength = val.path.split('/').length
      if(pathLength === 3) {
        this.currentProductType = this.$route.path.split('/')[2]
        this.dataPath = Cookies.get('lang') === 'CN' ? `/data/products/${this.currentProductType}/cn.json` : `/data/products/${this.currentProductType}/en.json`
        this.getProductsList(this.dataPath)
      }
    },
    '$store.state.locale': function (val) {
      const pathLength = this.$route.path.split('/').length
      if(pathLength === 4) {
        this.$router.push({
          path: `/products/${this.currentProductType}`
        })
      } else {
        this.dataPath = val === 'CN' ? `/data/products/${this.currentProductType}/cn.json` : `/data/products/${this.currentProductType}/en.json`
        this.getProductsList(this.dataPath)
      }
    }
  }
}
</script>
<style lang="scss">
  
</style>
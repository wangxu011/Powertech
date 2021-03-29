<template>
  <div class="content_container">
    <div class="title">{{$t('menu.decorative')}}</div>
    <div class="product_wrapper">
      <div class="product" v-for="product in productList" :key="product.id">
        <div class="img_wrap">  
          <img :src="product.cover_img_path" alt="">
        </div>
        <div class="text_wrap">
          <p class="title">{{product.name}}</p>
          <p class="describe">{{product.describe}}</p>
        </div>
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
      dataPath: ''
    }
  },
  created() {
    const pathLength = this.$route.path.split('/').length
    if(pathLength === 3) {
      this.dataPath = Cookies.get('lang') === 'CN' ? '/data/products/decorative/cn.json' : '/data/products/decorative/en.json'
      this.getProductsList(this.dataPath)
    }else {
      this.showDetail = true
      this.selectedProduct = JSON.parse(localStorage.getItem('productDetail')) 
    }
  },
  methods: {
    getProductsList(path) {
      axios.get(path).then(res => {
        console.log(res.value)
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
    '$store.state.locale': function (val) {
      const pathLength = this.$route.path.split('/').length
      if(pathLength === 4) {
        this.$router.push({
          path: '/products/decorative'
        })
      }
      this.dataPath = val === 'CN' ? '/data/products/decorative/cn.json' : '/data/products/decorative/en.json'
      this.getProductsList(this.dataPath)
    }
  }
}
</script>
<style lang="scss">
  
</style>
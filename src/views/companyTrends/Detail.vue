<template>
  <div class="detail_container">
    xiangqing
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created() {
      if(localStorage.getItem('newsDetail')) {
        console.log(localStorage.getItem('newsDetail'))
      }
    }
  }
</script>

<style lang='scss' scoped>
.detail_container{
  min-height: 100%;
  border: 1px solid greenyellow;
}
</style>
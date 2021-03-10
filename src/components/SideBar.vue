<template>
  <div class="bar_wrap">
    <p 
      :class="{'selected': activeRoute===item.path}" 
      class="item" 
      v-for="item in routes" 
      :key="item.id"
      @click="goRoute(item.path)">
      {{item.name}}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      routes: {
        type: Array
      }
    },
    data () {
      return {
        
      }
    },
    computed: {
      activeRoute() {
        return this.$route.path
      }
    },
    methods: {
      goRoute(path) {
        this.$router.push({path})
      }
    }
  }
</script>

<style lang='scss' scoped>
.bar_wrap{
  width: 200px;
  // height: 135px;
  border-right: 1px solid #e9edf5;
  .item{
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    text-align: center;
    &:hover{
      color: #388fee;
      cursor: pointer;
    }
  }
  .selected{
    color: #388fee;
    border-right: 2px solid #388fee;
    background: linear-gradient(90deg,#fff,#9fcaf9);
  }
}
</style>
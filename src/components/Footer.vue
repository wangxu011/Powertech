<template>
  <div class="footer_wrap">
    <div class="top_wrap">
      <div class="menu_wrap">
        <div class="menu_group" v-for="(menu, index) in menuList" :key="index">
          <p class="parent">{{$t(menu.title)}}</p>
          <p class="normal" v-for="(child, i) in menu.children" :key="i">{{$t(child.title)}}</p>
        </div>
      </div>
      <div class="contact_wrap"></div>
    </div>
    <div class="bottom_wrap">

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuList: [
          {
            title: 'menu.aboutUs',
            children: [
              { title: 'menu.profile' },
              { title: 'menu.patents' },
              { title: 'menu.honor' }
            ]
          },
          {
            title: 'menu.companyTrends',
            children: [
              { title: 'menu.news' }
            ]
          },
          {
            title: 'menu.contactUs',
            children: [
              { title: 'menu.contactInfo' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
.footer_wrap{
  .top_wrap{
    height: 400px;
    background-color: #1f1f1f;
    display: flex;
    .menu_wrap{
      display: flex;
    }
  }
  .bottom_wrap{
    height: 50px;
    background-color: #121212;
  }
}
</style>
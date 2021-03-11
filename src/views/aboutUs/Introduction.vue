<template>
  <div class="content_container">
    <p class="title">{{$t('menu.profile')}}</p>
    <p class="sub_title">{{$t('companyProfile.title1')}}</p>
    <p class="context">
      {{$t('companyProfile.content1')}}
    </p>
    <p class="sub_title">{{$t('companyProfile.title2')}}</p>
    <p class="context">
      {{$t('companyProfile.content2')}}
    </p>
    <p class="sub_title">{{$t('companyProfile.title3')}}</p>
    <p class="context">
      {{$t('companyProfile.content3')}}
    </p>
    <p class="sub_title">{{$t('companyProfile.title4')}}</p>
    <p class="context">
      {{$t('companyProfile.content4')}}
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss' scoped>
.content_container{
  .title{
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  .sub_title{
    font-size: 16px;
    font-weight: bold;
    line-height: 2em;
    margin-top: 30px;
  }
  .context{
    font-size: 16px;
    line-height: 2em;
    text-indent: 2em;
  }
}
</style>
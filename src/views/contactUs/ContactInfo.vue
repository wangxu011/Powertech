<template>
  <div class="content_container">
    <p class="title">{{$t('menu.contactInfo')}}</p>
    <div class="item_wrap">
      <p class="item">
        <span class="label">{{$t('contactUs.companyName.label')}}：</span>
        <span class="value">{{$t('contactUs.companyName.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.address.label')}}：</span>
        <span class="value">{{$t('contactUs.address.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.zipCode.label')}}：</span>
        <span class="value">{{$t('contactUs.zipCode.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.phone.label')}}：</span>
        <span class="value">{{$t('contactUs.phone.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.fax.label')}}：</span>
        <span class="value">{{$t('contactUs.fax.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.person.label')}}：</span>
        <span class="value">{{$t('contactUs.person.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.mail.label')}}：</span>
        <span class="value">{{$t('contactUs.mail.value')}}</span>
      </p>
      <p class="item">
        <span class="label">{{$t('contactUs.website.label')}}：</span>
        <span class="value">{{$t('contactUs.website.value')}}</span>
      </p>
    </div>
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
  .item_wrap{
    .item{
      padding-left: 300px;
      font-size: 20px;
      line-height: 1.8em;
      .label{
        width: 105px;
        display: inline-block;
      }
      .value{
        display: inline-block;
      }
    }
  }
}
</style>
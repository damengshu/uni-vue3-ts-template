<template>
  <view class="warp">
    <u-image
      width="200rpx"
      height="200rpx"
      border-radius="50%"
      src="https://cdn.uviewui.com/uview/example/fade.jpg"
    />
    <u-form ref="uForm">
      <u-form-item :label="t('home.brand')">
        <DropDown :placeholder="t('home.placeholder')" src="aaa" />
      </u-form-item>
      <u-form-item :label="t('home.manufacturer')">
        <DropDown :placeholder="t('home.placeholder')" src="aaa" />
      </u-form-item>
      <u-form-item :label="t('home.ultility')">
        <DropDown :placeholder="t('home.placeholder')" src="aaa" />
      </u-form-item>
      <u-form-item :label="t('home.colour')">
        <DropDown :placeholder="t('home.placeholder')" src="aaa" />
      </u-form-item>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DropDown from '@/components/DropDown/index.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.warp {
  padding: 20rpx 50rpx;
  .u-image {
    margin: 20rpx auto;
  }
  .u-form {
    margin: 0 100rpx;
    margin-top: 50rpx;
  }
}
</style>

<template>
  <view class="index-page">
    <Hello />
    <text class="h2"> 查看其它页面↓ </text>
    <view>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
        v.title
      }}</navigator>
    </view>
    <button @click="test">{{ t('test') }}</button>
    <u-tabbar :list="tabbar"></u-tabbar>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { onLoad } from '@dcloudio/uni-app'

import lang from '@/locales/lang'
import Hello from '@/components/hello/index.vue'
import { useAppStore } from '@/store/modules/app'

const { tabbar } = useAppStore()
const { t, locale } = useI18n()

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'Axios Demo',
    url: '/pages/axios/index'
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  }
])

const test = () => {
  uni.setLocale(lang['en'])
  locale.value = lang['en']
}

onLoad(() => {
  uni.hideTabBar()
})
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}

.h2 {
  color: green;
  font-size: 50rpx;
}

navigator {
  color: #1e80ff;
}
</style>

<template>
  <view>
    <u-tabbar :list="tabbar"></u-tabbar>
  </view>
</template>
<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { useAppStore } from '@/store/modules/app'

const { tabbar } = useAppStore()

onLoad(() => {
  uni.hideTabBar()
})
</script>

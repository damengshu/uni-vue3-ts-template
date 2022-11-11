<template>
  <view class="drop-down">
    <navigator hover-class="none" :url="src">
      <view> {{ props.result ? props.result : props.placeholder }} </view>
      <u-icon name="arrow-down"></u-icon>
    </navigator>
  </view>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    src: string
    result?: string
    placeholder?: string
  }>(),
  {
    placeholder: '请选择'
  }
)
</script>

<style lang="scss" scoped>
.navigator-wrap {
  width: 100%;
  display: block;
  uni-navigator {
    display: flex;
    justify-content: end;
  }
}
.drop-down {
  width: 100%;

  .u-icon {
    margin-left: 10rpx;
  }
}
</style>

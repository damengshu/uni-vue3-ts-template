<template>
  <view class="warp">
    <u-select
      v-model="state.showSelectLanguage"
      :list="language"
      value-name="code"
      label-name="text"
      :default-value="currentLanguage()"
      :confirm-text="t('profile.languageSelect.confirm')"
      :cancel-text="t('profile.languageSelect.cancel')"
      @confirm="confirm"
    />
    <u-cell-group border>
      <u-cell-item
        bg-color="rgb(244,244,244)"
        :title="t('profile.setting.account')"
      />
      <u-cell-item
        bg-color="rgb(244,244,244)"
        :title="t('profile.setting.unit')"
      />
      <u-cell-item
        bg-color="rgb(244,244,244)"
        :title="t('profile.setting.privacy')"
      />
      <u-cell-item
        bg-color="rgb(244,244,244)"
        :title="t('profile.setting.language')"
        @click="state.showSelectLanguage = true"
      />
    </u-cell-group>
    <u-cell-group border title="  ">
      <u-cell-item
        bg-color="rgb(244,244,244)"
        :title="t('profile.setting.help')"
      />
    </u-cell-group>
  </view>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { language } from '@/setting/globalSetting'

const { locale, t } = useI18n()

const state = reactive({
  showSelectLanguage: false
})

const currentLanguage = () => {
  const current = uni.getLocale()
  const index = language.findIndex((item) => item.code === current)
  return [index]
}

const confirm = (data: { value: any }[]) => {
  const { value } = data[0]
  uni.setLocale(value)
  locale.value = value
  uni.reLaunch({
    url: ''
  })
}
</script>

<style lang="scss" scoped>
.warp {
  padding: 0 30rpx;
  ::v-deep(.u-cell-group) {
    margin-top: 30rpx;
    border-radius: 50rpx;
  }
  ::v-deep(.u-cell-box) {
    border-radius: 50rpx;
  }
}
</style>

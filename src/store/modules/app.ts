import { defineStore } from 'pinia'
import { i18n } from '@/locales'

interface AppState {
  tabbar: {
    pagePath: string
    iconPath: string
    text: string
    selectedIconPath: string
  }[]
}

const { t } = i18n.global

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    tabbar: [
      {
        pagePath: '/pages/index/index',
        iconPath: '/static/tabBar/index.png',
        selectedIconPath: '/static/tabBar/index-full.png',
        text: t('aaa')
      },
      {
        pagePath: '/pages/profile/index',
        iconPath: '/static/tabBar/profile.png',
        selectedIconPath: '/static/tabBar/profile-full.png',
        text: t('bbb')
      }
    ]
  })
})

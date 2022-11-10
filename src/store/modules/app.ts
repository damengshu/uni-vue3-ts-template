import { defineStore } from 'pinia'

interface AppState {
  tabbar: {
    pagePath: string
    icon: string
    text: string
    selectedIconPath: string
  }[]
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    tabbar: [
      {
        pagePath: '/pages/index/index',
        icon: '/static/tabBar/shouye.png',
        selectedIconPath: '/static/tabBar/shouye.png',
        text: '首页'
      },
      {
        pagePath: '/pages/profile/index',
        icon: '/static/tabBar/profile.png',
        selectedIconPath: '/static/tabBar/profile.png',
        text: '我的'
      }
    ]
  })
})

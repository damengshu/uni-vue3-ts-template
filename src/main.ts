import { createSSRApp } from 'vue'
import uView from 'vk-uview-ui'
import { setupStore, Pinia } from '@/store'
import { setupI18n } from '@/locales'

// @ts-ignore
import App from './App.vue'
import 'virtual:windi.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  setupStore(app)
  setupI18n(app)
  return {
    app,
    Pinia
  }
}

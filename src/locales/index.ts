import { createI18n } from 'vue-i18n'
import { App } from 'vue'
import messages from './lang'

const i18nConfig = {
  legacy: false,
  allowComposition: true,
  locale: uni.getLocale(),
  globalInjection: true,
  messages
}
export const i18n = createI18n(i18nConfig)

export const setupI18n = (app: App) => {
  app.use(i18n)
}

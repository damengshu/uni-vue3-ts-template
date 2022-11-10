import { createI18n } from 'vue-i18n'
import { App } from 'vue'
import messages from './lang'

const i18nConfig = {
  allowComposition: true,
  locale: uni.getLocale(),
  messages
}
const i18n = createI18n(i18nConfig)

export const setupI18n = (app: App) => {
  app.use(i18n)
  return i18n
}

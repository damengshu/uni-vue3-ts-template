import type { App } from 'vue'
import * as Pinia from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const store = Pinia.createPinia()

export function setupStore(app: App<Element>) {
  store.use(piniaPersist)
  app.use(store)
}

export { store, Pinia }

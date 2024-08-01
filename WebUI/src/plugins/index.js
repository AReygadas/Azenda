import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import axiosHelper from '@/Helpers/axiosHelper'
import dashrouter from '@/router/DashRouter.js'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(axiosHelper)
}

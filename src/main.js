import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import CountryFlag from 'vue-country-flag'
import axios from 'axios'
import { store } from './store/index'

Vue.config.productionTip = false

Vue.component('country-flag', CountryFlag)

const base = axios.create({
  baseURL: 'http://192.168.178.21/wordpress'
})

Vue.prototype.$http = base

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

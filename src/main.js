import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import { store } from './store/index'
import i18n from './i18n'

Vue.config.productionTip = false

const base = axios.create({
    // baseURL: 'http://192.168.178.27/wordpress'
    // baseURL: 'http://127.0.0.1/wordpress'
    baseURL: 'https://waldsee.todesstern.me'
})

Vue.prototype.$http = base

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
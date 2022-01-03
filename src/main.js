import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import CountryFlag from 'vue-country-flag'
import axios from 'axios'
import { store } from './store/index'
import i18n from './i18n'
import * as VueAos from 'vue-aos'

Vue.config.productionTip = false

Vue.component('country-flag', CountryFlag)

const base = axios.create({
    baseURL: 'http://192.168.178.21/wordpress'
        // baseURL: 'http://127.0.0.1/wordpress'
})

Vue.prototype.$http = base

Vue.use(VueAos)

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Reservation from '../views/Reservation.vue'
import Food from '../views/Food.vue'
import Drinks from '../views/Drinks.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
    },
    {
        path: '/food',
        name: 'Food',
        component: Food
    },
    {
        path: '/drinks',
        name: 'Drinks',
        component: Drinks
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
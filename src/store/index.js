import Vue from 'vue'
import Vuex from 'vuex'

import ratings from './modules/ratings'
import dishes from './modules/dishes'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        ratings: ratings,
        dishes: dishes
    }
})
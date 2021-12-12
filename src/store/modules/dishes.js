const state = () => ({
    dishes: {}
})

const getters = {
    get_dishes: (state) => {
        return state.dishes
    }
}

const mutations = {
    set_dishes(state, dishes) {
        state.dishes = dishes
    }
}

export default {
    namespaced: true,
    state, 
    getters,
    mutations
}
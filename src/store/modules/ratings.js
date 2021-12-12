const state = () => ({
    ratings: {}
})

const getters = {
    get_ratings: (state) => {
        return state.ratings
    }
}

const mutations = {
    set_ratings(state, ratings) {
        state.ratings = ratings
    }
}

export default {
    namespaced: true,
    state, 
    getters,
    mutations
}
const state = () => ({
    sortBy: 'popular',
    category: 'all'
})

const getters = {
    getSort: state => state.sortBy,
    getCategory: state => state.category
}

const actions = {
    setCategory({ commit }, category) {
        commit('setCategory', category)
    },
    setSort({ commit }, sort) {
        commit('setSort', sort)
    }
}

const mutations = {
    setCategory(state, category) {
        state.category = category
    },
    setSort(state, sort) {
        state.sortBy = sort
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
const state = () => ({
    items: {},
    countsItems: {}
})

const getters = {
    getBasketItems: state => state.items,
    getTotalPrice: state => Object.values(state.items).length ? Object.values(state.items).reduce((totalPrice, item) => totalPrice + item.pizza.price * item.count, 0) : 0,
    getTotalCount: state => Object.values(state.items).length ? Object.values(state.items).reduce((count, item) => count + item.count, 0) : 0,
    getCountsItems: state => state.countsItems
}

const actions = {
    calcId(pizza) {
        return pizza ? `${pizza.id}_${pizza.size}_${pizza.type.id}` : ''
    },
    addPizza({ commit }, pizza) {
        commit('setNewPizza', pizza)
    },
    removeAllPizzas({ commit }) {
        commit('removeAllPizzas')
    },
    removeSelectedPizzas({ commit }, pizza) {
        commit('removeSelectedPizzas', pizza)
    },
    addOneMore({ commit }, pizza) {
        commit('addOneMore', pizza)
    },
    removeOneMore({ commit }, pizza) {
        commit('removeOneMore', pizza)
    },
}

const mutations = {
    setNewPizza(state, pizza) {
        const id = actions.calcId(pizza)

        state.items[id] = {
            pizza: pizza,
            count: state.items[id] ? ++state.items[id].count : 1
        }
        state.countsItems[pizza.id] = state.countsItems[pizza.id] ? state.countsItems[pizza.id] + 1 : 1
        console.log(state)
    },
    addOneMore(state, pizza) {
        const id = actions.calcId(pizza)

        state.items[id] = {
            pizza: pizza,
            count: state.items[id].count + 1
        }
        state.countsItems[pizza.id] = state.countsItems[pizza.id] + 1
    },
    removeOneMore(state, pizza) {
        const id = actions.calcId(pizza)

        if (state.items[id].count - 1 > 0) {
            state.items[id] = {
                pizza: pizza,
                count: state.items[id].count - 1
            }
        } else {
            delete state.items[id]
        }

        state.countsItems[pizza.id] = state.countsItems[pizza.id] - 1 > 0 ? state.countsItems[pizza.id] - 1 : 0
    },
    removeSelectedPizzas(state, pizza) {
        const id = actions.calcId(pizza)

        delete state.items[id]
        delete state.countsItems[pizza.id]
    },
    removeAllPizzas(state) {
        state.items = {}
        state.countsItems = {}
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
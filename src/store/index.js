import { createStore, createLogger } from 'vuex'

import { filterStore, basketStore } from './modules';

const store = createStore({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        filter: filterStore,
        basket: basketStore
    },
    devtools: true,
    plugins: [createLogger()]
})
export default store
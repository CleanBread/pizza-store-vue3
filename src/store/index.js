import { createStore } from 'vuex'

import { filterStore } from './modules';

const store = createStore({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        filter: filterStore
    },
    devtools: true
})
export default store
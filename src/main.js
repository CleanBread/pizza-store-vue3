import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './styles/app.scss'

const Vue = createApp(App)
Vue.config.errorHandler = function (err, vm, info) {
    console.log(err, vm, info, 'err')
}
Vue.use(router).mount('#app')

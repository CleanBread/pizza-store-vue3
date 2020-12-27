import { createApp } from 'vue'
import Maska from 'maska'

import App from './App.vue'

import router from './router';
import store from './store';

import './styles/app.scss'

const app = createApp(App)
app.config.devtools = true;
app.config.errorHandler = function (err, vm, info) {
    console.log(err, vm, info, 'err')
}
app
    .use(store)
    .use(router)
    .use(Maska)
    .mount('#app')

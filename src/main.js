import './assets/main.css'

import { createApp } from 'vue'
import 'flowbite';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue'
import store from "./store";
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')


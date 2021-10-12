import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'


createApp(App).use(store).use(ElementPlus).mount('#app')


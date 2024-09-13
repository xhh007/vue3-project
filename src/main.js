import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 创建实例
const pinia = createPinia()
// pinia实例加入到应用中
createApp(App).use(pinia).mount('#app')

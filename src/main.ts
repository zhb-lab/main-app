import { createApp } from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
import './assets/styles/index.scss'

createApp(App).mount('#app')
microApp.start()

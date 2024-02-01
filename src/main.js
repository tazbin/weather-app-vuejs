import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// require('dotenv').config()

const app = createApp(App)

app.use(createPinia())
app.mount('#app')

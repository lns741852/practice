import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Vue實例
const app = createApp(App)
app.use(store).use(router)


//掛載並渲染
app.mount('#app')

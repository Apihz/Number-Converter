import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('./components/AboutUs.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})




createApp(App).use(router).mount('#app')


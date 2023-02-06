import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import CalculatorComponent from "@/components/CalculatorComponent";
import ReviewComponent from "@/components/ReviewComponent";
import store from './store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CalculatorComponent },
        { path: '/review', component: ReviewComponent }
    ]
})

createApp(App).use(router).use(store).mount('#app')

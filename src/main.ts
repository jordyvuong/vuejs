import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router";
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import TestView from './pages/TestView.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes : [
        {
            path:'',
            component: HomePage
        },
        {
            path:'/login',
            component: LoginPage
        },
        {
            path: '/register',
            component: RegisterPage
        },
        {
            path: '/test',
            component: TestView
        }
    ]
})

createApp(App).use(router).mount('#app')

export default router;
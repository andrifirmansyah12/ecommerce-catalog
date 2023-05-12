import './assets/style.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Template from './App.vue'
import MensCloth from './pages/mensClothes.vue'
import Unavailable from './pages/unAvailable.vue'
import NotFounds from './pages/notFounds.vue'

const routes = [
    {
        path: "/:pathMatch(.*)*",
        component: NotFounds,
    },
    {
        name: "Unavailable",
        path: "/unavailable",
        component: Unavailable,
    },
    {
        name: "Home",
        path: "/",
        component: MensCloth,
    },
];

const router = new createRouter({
    routes,
    history: createWebHistory(),
});

createApp(Template).use(router).mount('#app')
import { createRouter, createWebHistory } from "vue-router";

import Home from './Home.vue';
import Pokemon from './Pokemon.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/pokemon/:id',
        component: Pokemon,
        props: true,
    },
    {
        path: '/:pathMatch(.*)*',
        component: Home,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
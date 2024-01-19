import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomeIndex.vue';
import Todos from '../pages/todos/TodoIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/todos',
            name: 'Todos',
            component: Todos
        }
    ]
});

export default router;
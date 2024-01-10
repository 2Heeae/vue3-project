import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/homeIndex.vue';
import Todos from '../pages/todos/todoIndex.vue';

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
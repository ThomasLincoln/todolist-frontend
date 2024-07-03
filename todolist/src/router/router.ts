import { createRouter, createMemoryHistory } from "vue-router";

import Login from "../views/Login.vue";
import About from "../views/About.vue";

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/about',
        component: About,
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
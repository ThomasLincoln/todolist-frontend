import { createRouter, createMemoryHistory } from "vue-router";

import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Cadastro from "../views/Cadastro.vue";
import Profile from "../views/Profile.vue";

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: "/cadastro",
        component: Cadastro
    },
    {
        path: "/profile",
        component: Profile
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
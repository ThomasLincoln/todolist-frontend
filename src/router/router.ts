import { createRouter, createMemoryHistory } from "vue-router";

import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Cadastro from "../views/Cadastro.vue";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import Contato from "../views/Contato.vue"

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
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/contato",
        component: Contato
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
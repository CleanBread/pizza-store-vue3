import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home";
import Basket from "../pages/Basket";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/basket",
        name: "Basket",
        component: Basket,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
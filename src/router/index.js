import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/home.vue"),
        },
        {
            path: "/article/:id",
            name: "article",
            component: () => import("../views/article.vue"),
        },
    ],
});

export default router;

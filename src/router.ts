import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {path: "/", component: () => import("./pages/Main.vue")},
  {path: "/checkout", component: () => import("./pages/Cart.vue")},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

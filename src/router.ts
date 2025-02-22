import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {path: "/",redirect: "/shirts"},
  {path: "/:category", component: () => import("./pages/Main.vue")},
  {path: "/checkout", component: () => import("./pages/Checkout.vue")},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/login',
    // hidden: true,
  },
  {
    path: "login",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import About from '../views/About.vue'
import Register from '../views/register.vue'
const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: "/login",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/product",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/product.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory('http://localhost:8080'),
  routes,
});

export default router;


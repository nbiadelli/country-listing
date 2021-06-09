import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:name",
    name: "details",
    component: () => import("../views/Details.vue"),
    props: {},
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

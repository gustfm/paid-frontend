import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/spending-checker",
    name: "spending-checker",
    component: () =>
      import(
        /* webpackChunkName: "speding-checker" */ "../app/SpendingChecker/SpendingChecker.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

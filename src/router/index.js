/*
 * @Author:
 * @Date: 2022-08-05 23:40:22
 * @LastEditTime: 2022-10-02 22:21:18
 * @LastEditors: LittleQ
 * @Description:
 * @FilePath: \ol_plugins_vue\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "/navigator/index",
        component: () => import("../views/openlayers/Map.vue"),
      },
      {
        path: "/navigatortwo/index",
        component: () => import("../views/openlayers/Map_Tracker.vue"),
      },
      {
        path: "/navigatorTherr/index",
        component: () => import("../views/openlayers/Map_Tracker2.vue"),
      },
      {
        path: "/navigatorFour/index",
        component: () => import("../views/openlayers/Map_WebglPoints.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

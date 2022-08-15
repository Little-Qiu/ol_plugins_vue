/*
 * @Author:
 * @Date: 2022-08-05 23:40:22
 * @LastEditTime: 2022-08-06 23:03:34
 * @LastEditors: qiulongwen
 * @Description:
 * @FilePath: \ol_plugins\src\router\index.js
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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

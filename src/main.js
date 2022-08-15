/*
 * @Author:
 * @Date: 2022-08-05 23:40:22
 * @LastEditTime: 2022-08-06 23:42:32
 * @LastEditors: qiulongwen
 * @Description:
 * @FilePath: \ol_plugins\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ol/ol.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/*
 * @Author:
 * @Date: 2022-08-05 23:40:22
 * @LastEditTime: 2022-10-02 21:42:31
 * @LastEditors: LittleQ
 * @Description:
 * @FilePath: \ol_plugins_vue\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ol/ol.css";

Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

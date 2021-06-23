/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 17:34:34
 * @FilePath: /node-js/src/main.js
 */
import Vue from "vue";
import "@/style/reset.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AtComponents from "at-ui";
import "at-ui-style";
import CTitle from "@/components/Title";

import { getAllTopics } from "@/api";

Vue.config.productionTip = false;

Vue.use(AtComponents);

Vue.component("CTitle", CTitle);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 11:53:31
 * @FilePath: /node-js/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AtComponents from "at-ui";
import "at-ui-style";

import { getAllTopics } from "@/api";

const fun1 = async () => {
  let res = await getAllTopics();
  console.log(res);
};

fun1();

Vue.config.productionTip = false;

Vue.use(AtComponents);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

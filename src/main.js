/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 11:08:31
 * @FilePath: /node-js/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AtComponents from "at-ui";
import "at-ui-style";
import CTitle from "@/components/Title";
import Divider from "@/components/Divider";
import "@/style/reset.css";
import dayjs from "dayjs";
import "@/style/at-ui-style.scss";


Vue.config.productionTip = false;
Vue.prototype.$dayjs = dayjs;

Vue.use(AtComponents);

Vue.component("CTitle", CTitle);
Vue.component("Divider", Divider);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

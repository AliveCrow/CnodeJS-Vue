/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 10:48:10
 * @FilePath: /node-js/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      level: "first",
    },
  },
  {
    path: "/topic/:id",
    name: "topicContent",
    component: () => import("../views/topic.vue"),
    meta: {
      level: "second",
      comment: true,
    },
  },
  {
    path: "/user/:loginname",
    name: "UserInfo",
    component: () => import("../views/user.vue"),
    meta: {
      level: "second",
      userInfo: true,
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;

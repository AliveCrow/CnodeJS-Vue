/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 17:03:18
 * @FilePath: /node-js/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comment: {},
    commentsList: [],
    userInfo: {},
  },
  mutations: {
    setComment(state, payload) {
      state.comment = payload;
    },
    setConmentsList(state, payload) {
      state.commentsList = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {},
  modules: {},
});

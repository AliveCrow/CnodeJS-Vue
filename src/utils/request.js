/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 11:19:32
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 11:51:47
 * @FilePath: /node-js/src/utils/request.js
 */
import axios from "axios";
import router from "vue-router";
import { Message } from "at-ui";

const defaultsConfig = {
  baseURL: "https://cnodejs.org/api/v1",
  timeout: 5000,
  headers: {
    post: {
      "Content-Type":
        "application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data",
    },
  },
};

if (process.env.NODE_ENV === "production") {
  defaultsConfig.baseURL = "https://cnodejs.org/api/v1";
} else if (process.env.NODE_ENV === "development") {
  defaultsConfig.baseURL = "https://cnodejs.org/api/v1";
}

export const request = axios.create(defaultsConfig);

request.interceptors.request.use(
  (request) => {
    //请求拦截器
    return request;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Message.error("登录过期，请重新登录");
          // 清除token
          /*           
          localStorage.removeItem('token')
                    store.commit('loginSuccess', null)
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                      router.replace({
                        path: '/login',
                        query: {
                          redirect: router.currentRoute.fullPath
                        }
                      })
                    }, 1000) 
            */
          break;
        // 404请求不存在
        case 404:
          Message.error("请求不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          Message.error(error.response.data.message);
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    request
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    request
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

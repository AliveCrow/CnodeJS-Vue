/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 11:32:09
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 12:03:37
 * @FilePath: /node-js/src/api/index.js
 */
import { get, post, request } from "@/utils/request";

const METHOD = {
  get: get,
  post: post,
};

const tpl = async (url, method, params) => {
  let resp;
  try {
    resp = await METHOD[method](url);
  } catch (error) {
    return error;
  }
  return resp;
};

// get /topics 主题首页
export const getAllTopics = () => tpl("topics", "get");

//get /topic/:id 主题详情
export const getTopicsById = (id) => tpl(`topics/${id}`, "get");

//get /topic_collect/:loginname 用户所收藏的主题
export const getUserTopicCollect = (loginname) =>
  tpl(`topic_collect/${loginname}`, "get");

// get /user/:loginname 用户详情
export const getUserInfo = (loginname) => tpl(`user/${loginname}`, "get");

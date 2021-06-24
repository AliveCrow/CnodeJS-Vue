/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 11:32:09
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 16:37:53
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
    resp = await METHOD[method](url, params);
  } catch (error) {
    return error;
  }
  return resp;
};

/**
 * get /topics 主题首页
 * @param {Number}  page [页数]
 * @param {String} tab  [主题分类。目前有 ask share job good]
 * @param {Number} limit  [每一页的主题数量]
 * @param {String} mdrender  [当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。]
 */
export const getAllTopics = (params) =>
  tpl("topics", "get", { limit: 20, ...params });

/**
 * get /topic/:id 主题详情
 * @param {String} mdrender [当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。]
 * @param {String} accesstoken [当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。]
 */
export const getTopicsById = (id, params) =>
  tpl(`topic/${id}`, "get", { params });

//get /topic_collect/:loginname 用户所收藏的主题
export const getUserTopicCollect = (loginname) =>
  tpl(`topic_collect/${loginname}`, "get");

// get /user/:loginname 用户详情
export const getUserInfo = (loginname) => tpl(`user/${loginname}`, "get");

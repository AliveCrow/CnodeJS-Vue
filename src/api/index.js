/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 11:32:09
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 11:34:18
 * @FilePath: /node-js/src/api/index.js
 */
import { get, post, request } from "@/utils/request";

const METHOD = {
  get: get,
  post: post,
};

export const tpl = async (url, method, params) => {
  let resp;
  try {
    resp = await METHOD[method](url, params);
  } catch (error) {
    return error;
  }
  return resp;
};


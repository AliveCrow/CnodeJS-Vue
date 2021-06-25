/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-25 11:03:42
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 12:18:07
 * @FilePath: /node-js/src/api/user.js
 */
import { tpl } from "./index.js";


// get /user/:loginname 用户详情
export const getUserInfo = (loginname) => tpl(`user/${loginname}`, "get");

//post /accesstoken 验证 accessToken 的正确性
/**
 * @param {String} accesstoken [用户的 accessToken]
 */
export const VerifyToken = (params) => tpl(`/accesstoken`, 'post', params)
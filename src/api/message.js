/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-25 11:04:16
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 14:15:59
 * @FilePath: /node-js/src/api/message.js
 */
import { tpl } from "./index.js";

// 获取未读消息数
/**
 * @param {String} accesstoken [用户的 accessToken]
 */
export const unReadMsgCount = (params) =>
  tpl('/message/count', 'get', params)


// 获取已读和未读消息
/**
* @param {String} accesstoken [用户的 accessToken]
* @param {String} mdrender [当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。]
*/
export const getAllMsg = (params) =>
  tpl('/messages', 'get', params)


//标记全部已读
/**
 * @param {String} accesstoken [用户的 accessToken]
 */
export const setAllMsgReaded = (params) =>
  tpl('/message/mark_all', 'post', params)

//标记单个消息为已读
/**
* @param {String} accesstoken [用户的 accessToken]
*/
export const setAllMsgReaded = (msg_id, params) =>
  tpl(`/message/mark_one/${msg_id}`, 'post', params)

/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-25 11:03:54
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 14:11:00
 * @FilePath: /node-js/src/api/replies.js
 */
import { tpl } from "./index.js";

// 新建评论
/**
 * @param {String} accesstoken [用户的 accessToken]
 * @param {String} content [评论的主体]
 * @param {String} reply_id [如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。]
 *
*/
export const replies = (topic_id, params) =>
  tpl(`/topic/${topic_id}/replies`, 'post', params)

// 为评论点赞
/**
 * @param {String} accesstoken [用户的 accessToken]
 * 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。
*/
export const replyUps = (topic_id, params) =>
  tpl(`/reply/${topic_id}/ups`, 'post', params)
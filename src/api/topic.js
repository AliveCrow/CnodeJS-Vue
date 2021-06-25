/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-25 11:01:37
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 15:04:40
 * @FilePath: /node-js/src/api/topic.js
 */
import { tpl } from "./index.js";

//主题首页
/**
 * @param {Number}  page [页数]
 * @param {String} tab  [主题分类。目前有 ask share job good]
 * @param {Number} limit  [每一页的主题数量]
 * @param {String} mdrender  [当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。]
 */
export const getAllTopics = (params) =>
  tpl("/topics", "get", { limit: 20, ...params });

//主题详情
/**
* 
* @param {String} mdrender [当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。]
* @param {String} accesstoken [当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。]
*/
export const getTopicsById = (id, params) =>
  tpl(`/topic/${id}`, "get", { params });

//新建主题
/**
 * @param {String} accesstoken [用户的 accessToken]
 * @param {String} title [用户的 标题]
 * @param {String} tab [目前有 ask share job dev,开发新客户端的同学，
 *  请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。]
 * @param {String} content [主体]
*/
export const createTopic = (params) =>
  tpl(`/topics`, 'post', params);

//编辑主题
/**
 * @param {String} accesstoken [用户的 accessToken]
 * @param {String} topic_id [主题id]
 * @param {String} title [用户的 标题]
 * @param {String} tab [目前有 ask share job dev,开发新客户端的同学，
 *  请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。]
 * @param {String} content [主体]
*/
export const updateTopic = (params) =>
  tpl(`/topics/update`, 'post', params);

//收藏主题
/**
 * @param {String} accesstoken [用户的 accessToken]
 * @param {String} topic_id [主题的id]
*/
export const collectTopic = (params) =>
  tpl(`/topic_collect/collect`, 'post', params);

//取消主题
/**
 * @param {String} accesstoken [用户的 accessToken]
 * @param {String} topic_id [主题的id]
*/

//get /topic_collect/:loginname 用户所收藏的主题
export const getUserTopicCollect = (loginname) =>
  tpl(`topic_collect/${loginname}`, "get");

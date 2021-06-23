/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:42:17
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 10:46:00
 * @FilePath: /node-js/vue.config.js
 */
const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  /* 
    publicPath: '/workspace8.1',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    parallel: require('os').cpus().length > 1,
    productionSourceMap: false,
    devServer: {
      host: '',
      port: port,
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
        '/operation-service': {
          // target: 'http://10.236.12.3:8090/refreshProcessDefCacha/api/rest/common-feign-api/v1'
          target: 'http://10.236.12.20:8080/operation-service'
        },
        '/basicInfo': {
          // target: 'http://10.236.12.3:8090/refreshProcessDefCacha/api/rest/common-feign-api/v1'
          target: 'http://10.236.12.3:8090/operation-service/api/v1/operation/workflow-catalog-role'
        },
        '/queryCatalog': {
          // target: 'http://10.236.12.3:8090/refreshProcessDefCacha/api/rest/common-feign-api/v1'
          target: 'http://10.236.12.3:8090/operation-service/api/v1/operation/process-readonle-role'
        },
        // '/verificationOne': {
        //   target: 'http://10.236.12.3:8090/operation-service/api/rest/common-feign-api/v1'
        // },
        '/org': {
          // target: 'http://10.16.16.214:28080/org'
          target: 'http://10.236.17.165:28080/org'
          // target: 'http://10.236.17.170:8080/org'
          // pathRewrite: {'^/org': ''}
        },
        '/com': {
          // target: 'http://10.16.16.214:28080/com'
          target: 'http://10.236.17.165:28080/com'
          // target: 'http://10.236.17.170:8080/com'
          // pathRewrite: {'^/org': ''}
        }

      }
    }, 
  */
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "name",
    resolve: {
      alias: {
        "@": resolve("src"),
        "@lib": resolve("/src/libs"),
        "@util": resolve("/src/utils"),
      },
    },
    plugins: [],
  },
};

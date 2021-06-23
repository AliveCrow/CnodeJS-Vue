<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 17:14:41
 * @FilePath: /node-js/src/App.vue
-->
<template>
  <div id="app " class="row at-row">
    <div class="col-xs-24 col-lg-18 col-sm-24" style="overflow-x: hidden">
      <router-view />
    </div>
    <div class="col-lg-6" style="background-color: #343434">
      <img src="./assets/cnodejs_light.svg" alt="" style="margin: 40px" />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 10:45:37
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 15:49:36
 * @FilePath: /node-js/src/components/layout/left.vue
-->

<template>
  <div
    class="col-xs-24 col-lg-18 col-sm-24 layout-left"
    style="overflow-x: hidden"
  >
    <slot></slot>
  </div>
</template>
<script lang="js">
export default {
  name: 'Left'
};
</script>
<style scoped lang="scss">
.layout-left {
  max-height: 100vh;
}
@media screen and (max-width: 1200px) {
  .layout-left {
    max-height: 100%;
  }
}
</style>

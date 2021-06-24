<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 10:45:43
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 15:50:04
 * @FilePath: /node-js/src/components/layout/right.vue
-->
<template>
  <div class="col-lg-6 layout-right" style="background-color: #343434">
    <slot></slot>
  </div>
</template>
<script lang="js">
export default {
  name: 'Right'

};
</script>
<style scoped lang="scss">
.layout-right {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  max-height: 100vh;
}
@media screen and (max-width: 1200px) {
  .layout-right {
    max-height: 100%;
  }
}
</style>

<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 10:49:39
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 10:50:03
 * @FilePath: /node-js/src/components/layout/Container.vue
-->
<template>
  <div class="row at-row">
    <slot></slot>
  </div>
</template>
<script lang="js">
export default {
  name: 'Container'
};
</script>
<style scoped lang="scss"></style>

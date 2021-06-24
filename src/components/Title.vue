<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 17:26:49
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 16:53:47
 * @FilePath: /node-js/src/components/Title.vue
-->

<template>
  <div
    :class="
      'title-component ' +
      [size === 'large' ? ' large' : size === 'small' ? 'small' : '']
    "
  >
    <slot></slot>
  </div>
</template>
<script lang="js">
export default {
  name: 'CTitle',
  props:{
    size:{
      type: String,
      default:'default'
    }
  }

};
</script>
<style scoped lang="scss">
.title-component {
  font-size: 1rem;
  font-weight: bold;
  padding: 20px;
}
.large {
  font-size: 2rem;
  font-weight: bold;
}
.small {
  font-size: 0.8rem;
  font-weight: bold;
}
</style>

<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 09:45:34
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 10:38:02
 * @FilePath: /node-js/src/components/Divider.vue
-->
<template>
  <div class="divider">
    <div :class="`divider-text divider-${contentPosition}`">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="js">
export default {
  name:"Divider",
  props:{
        /**
     * @param {String}  horizontal|vertical [设置分割线方向	]
     *  */
    direction:{
      type:String,
      default:'horizontal',
      required:false,
    },
    /**
     * @param {String}  left|right|center [设置分割线文案的位置	]
     *  */
    "content-position":{
      type:String,
      default:'left',
      required:false,
    }
  }

};
</script>
<style scoped lang="scss">
.divider {
  display: block;
  height: 1px;
  width: 100%;
  margin: 24px 0;
  background-color: #dcdfe6;
  position: relative;
  &-text {
    position: absolute;
    background-color: #fff;
    top: 50%;
    padding: 0 20px;
    transform: translateY(-50%);
    color: #5e6d82;
    font-size: 0.8rem;
  }
  &-left {
    left: 40px;
  }
  &-center {
    left: 50%;
  }
  &-right {
    right: 40px;
  }
}
</style>

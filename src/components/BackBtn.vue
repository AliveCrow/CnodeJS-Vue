<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 10:52:38
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 11:03:40
 * @FilePath: /node-js/src/components/BackBtn.vue
-->
<template>
  <at-button
    :class="'back-btn ' + [inline ? '' : 'block']"
    :type="type"
    @click="clickHandle"
  >
    <slot>按钮文字</slot>
  </at-button>
</template>
<script lang="js">
export default {
  name: 'BackBtn',
  props: {
    type:{
      type:String,
      default:'',
    },
    inline:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    clickHandle(){
      this.$emit('clickHandle')
    }
  }

};
</script>
<style scoped lang="scss">
.back-btn {
  margin-left: -2px;
  color: #fff;
  font-size: 2rem;
  line-height: 2rem;
  border: none;
  background-color: #272727;
  &:hover {
    background-color: #73b200;
  }
}
.block {
  width: 100%;
}
</style>

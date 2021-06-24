<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 11:20:33
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 15:01:58
 * @FilePath: /node-js/src/components/Collapse.vue
-->
<template>
  <at-collapse
    ref="at-collapse"
    class="collapse"
    :accordion="accordion"
    :simple="simple"
    :value="0"
    @on-change="collapseChanged"
  >
    <at-collapse-item
      class="collapse-item"
      v-for="item in list"
      :title="item.title"
    >
      <slot :item="item"></slot>
    </at-collapse-item>
  </at-collapse>
</template>
<script lang="js">
export default {
  name: 'Collapse',
  props:{
    list:{
      type: Array,
      default:()=>[]
    },
    // 是否开启手风琴模式（即至多展开一个面板项）
    accordion:{
      type: Boolean,
      default: false
    },
    simple:{
      type: Boolean,
      default: false
    }
  },
   mounted() {
    this.$on("Ctoggle", ()=>{
      console.log('22222');
      this.$refs['at-collapse'].toggle
    });  // 在mounted生命周期注册事件
  },
  methods:{
    collapseChanged(scoped){
      this.$emit("onChange",scoped)
    }
  }

};
</script>
<style scoped lang="scss">
.collapse {
  margin-left: -4px;
  border: none;
  border-radius: 0;
  &-item {
    border-radius: 0;
    background-color: #fff;
  }
}
</style>

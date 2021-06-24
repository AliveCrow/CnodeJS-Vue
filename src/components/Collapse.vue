<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 11:20:33
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 11:50:08
 * @FilePath: /node-js/src/components/Collapse.vue
-->
<template>
  <at-collapse
    class="collapse"
    :accordion="accordion"
    :simple="simple"
    :value="0"
    @onChange="collapseChanged"
  >
    <at-collapse-item
      class="collapse-item"
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
    >
      <div>
        {{ item.content }}
      </div>
    </at-collapse-item>
  </at-collapse>
</template>
<script lang="js">
export default {
  name: 'Collapse',
  props:{
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
  data(){
    return {
      list:[
        {
          title:'关于',
          content:'2'
        }
      ]
    }
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

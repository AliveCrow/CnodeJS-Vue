<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 17:16:05
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-23 17:49:16
 * @FilePath: /node-js/src/views/topic.vue
-->
<template>
  <div class="topic">
    <CTitle size="large">{{ topic.title }}</CTitle>
    <section>
      <span>作者:{{ topic.author.loginname }}</span>
      <span> • </span>
      <span>发布于:{{ topic.create_at }}</span>
      <span> • </span>
      <span>2000次浏览</span>
    </section>
    <div class="content" v-html="topic.content"></div>
  </div>
</template>
<script lang="js">
import {getTopicsById} from '@/api'

export default {
  data(){
    return {
      topic:{}
    }
  },
  created(){

      getTopicsById(this.$route.params.id).then(res=>{
        console.log(res);
        this.topic = res.data
      })
  }

};
</script>
<style scoped lang="scss">
.topic {
  display: inline-block;
}
.content {
  color: #333;
  line-height: 1.6;
  margin-bottom: 50px;
  >>> img {
    width: 100%;
  }
}
</style>

<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 17:16:05
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 17:21:50
 * @FilePath: /node-js/src/views/topic.vue
-->
<template>
  <div class="topic">
    <CTitle size="large">{{ topic.title }}</CTitle>
    <Divider contentPosition="right">
      <section>
        <span
          >作者:
          <a :href="'/user/' + topic.author.loginname">{{
            topic.author.loginname
          }}</a>
        </span>
        <span> • </span>
        <span
          >发布于:{{
            $dayjs(topic.create_at).format("YYYY-MM-DD HH:mm:ss")
          }}</span
        >
        <span> • </span>
        <span>{{ topic.visit_count }}次浏览</span>
      </section>
    </Divider>

    <div class="content" v-html="content"></div>
  </div>
</template>
<script lang="js">
import {getTopicsById} from '@/api';
import showdown from 'showdown';


export default {
  data(){
    return {
      topic:{
        author:{loginname:''}
      },
      content:''
    }
  },
  created(){
    getTopicsById(this.$route.params.id).then(res=>{
      let converter = new showdown.Converter();
      this.topic = res.data
      this.content = converter.makeHtml(res.data.content);
      this.$store.commit('setConmentsList',res.data.replies)
    })
  },

};
</script>
<style scoped lang="scss">
.topic {
  margin: 50px;
}
.content {
  color: #333;
  line-height: 1.6;
  margin-bottom: 50px;
}
</style>

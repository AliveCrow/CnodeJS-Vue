<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 17:16:05
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 10:41:35
 * @FilePath: /node-js/src/views/topic.vue
-->
<template>
  <div class="topic">
    <CTitle size="large">{{ topic.title }}</CTitle>
    <Divider contentPosition="right">
      <section>
        <span>作者:{{ topic.author.loginname }}</span>
        <span> • </span>
        <span
          >发布于:{{
            $dayjs(topic.create_at).format("YYYY-MM-DD HH:mm:ss")
          }}</span
        >
        <span> • </span>
        <span>2000次浏览</span>
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
      topic:{},
      content:''
    }
  },
  created(){
    let converter = new showdown.Converter();
      getTopicsById(this.$route.params.id).then(res=>{
        this.topic = res.data
        this.content = converter.makeHtml(res.data.content);
        console.log(this.content);
      })
  }

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
  >>> img {
    width: 100%;
  }
}
</style>

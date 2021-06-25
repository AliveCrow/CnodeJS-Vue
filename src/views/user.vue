<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 16:39:49
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 15:10:45
 * @FilePath: /node-js/src/views/user.vue
-->
<template>
  <div class="user-info">
    <!-- <CTitle size="large">最近创建的话题</CTitle> -->
    <Divider contentPosition="left">
      <section>最近创建的话题</section>
    </Divider>
    <List
      :avatar="false"
      :badge="false"
      :ListData="userInfo.recent_topics"
      @CardClick="CardClick"
    ></List>
    <Divider contentPosition="left">
      <section>最近参与的话题</section>
    </Divider>
    <List
      :avatar="false"
      :badge="false"
      :ListData="userInfo.recent_replies"
      @CardClick="CardClick"
    ></List>

    <Divider contentPosition="left">
      <section>收藏的话题</section>
    </Divider>
    <List
      :avatar="false"
      :badge="false"
      :ListData="userInfo.collect_topics"
      @CardClick="CardClick"
    ></List>
  </div>
</template>
<script lang="js">
  import {getUserInfo} from "@/api/user.js";
  import {getUserTopicCollect} from "@/api/topic.js"
  import List from '@/components/List';

export default {
  components:{
    List
  },
  data(){
    return {
      userInfo:{
        recent_topics:[],
        recent_replies:[],
        collect_topics:[]
      }
    }
  },
  created(){
    this.initUserInfo()
  },
  methods:{
    async initUserInfo(){
      let userInfo = await getUserInfo(this.$route.params.loginname)
      let collectTopics = await getUserTopicCollect(this.$route.params.loginname)
      console.log(collectTopics);
      if(userInfo.success && collectTopics.success ){
        this.userInfo = userInfo.data
        this.userInfo.collect_topics = collectTopics.data
        this.$store.commit('setUserInfo',userInfo.data)
      }
    },
    CardClick(list){
      this.$router.push({name:'topicContent',params:{id:list.id}})
    }
  }

};
</script>
<style scoped lang="scss">
.user-info {
  margin: 50px;
  section {
    font-size: 2rem;
    color: #000;
  }
}
</style>

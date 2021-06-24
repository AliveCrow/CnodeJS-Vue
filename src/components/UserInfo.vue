<!--
 * @Description: 输入文件描述信息 
 * @Author: liu-wb
 * @Date: 2021-06-24 17:11:28
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 17:15:34
 * @FilePath: /node-js/src/components/UserInfo.vue
-->

<template>
  <section class="aside-user">
    <img :src="$store.state.userInfo.avatar_url" alt="" width="90px" />
    <span>{{ $store.state.userInfo.loginname }}</span>
    <span>积分:{{ $store.state.userInfo.score }}</span>
    <span
      >GitHub:
      <a
        :href="`https://github.com/${$store.state.userInfo.githubUsername}`"
        target="_blank"
        >{{ $store.state.userInfo.loginname }}</a
      ></span
    >
    <span
      >注册时间:{{
        $dayjs($store.state.userInfo.create_at).format("YYYY-MM-DD HH:mm:ss")
      }}</span
    >
  </section>
</template>
<script lang="js">
export default {
  name: 'UserInfo',
  data(){
    return {
      userInfo:{}
    }
  },
  created(){
    this.userInfo = this.$store.state.userInfo
  }
};
</script>
<style scoped lang="scss">
.aside-user {
  width: 100%;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>

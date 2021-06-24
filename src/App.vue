<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 10:25:22
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 11:44:12
 * @FilePath: /node-js/src/App.vue
-->
<template>
  <div id="app ">
    <Container>
      <Left>
        <router-view />
      </Left>
      <Right>
        <BackBtn
          v-if="$route.meta.level === 'second'"
          :inline="false"
          @clickHandle="clickHandle"
          >返回首页</BackBtn
        >
        <Logo />
        <Collapse></Collapse> </Right
    ></Container>
  </div>
</template>

<script lang="js">
  import Container from "@/components/layout/Container.vue";
  import Left from "@/components/layout/Left.vue";
  import Right from "@/components/layout/Right.vue";
  import BackBtn from "@/components/BackBtn.vue";
  import Logo from "@/components/Logo.vue";
  import Collapse from "@/components/Collapse.vue";

export default {
  components:{
    Left,Right,Container,BackBtn,Logo,Collapse
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
    clickHandle(){
      this.$router.replace('/')
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

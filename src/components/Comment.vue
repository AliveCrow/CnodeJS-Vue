<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-24 15:13:10
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 17:10:04
 * @FilePath: /node-js/src/components/Comment.vue
-->
<template>
  <div class="comment">
    <div class="comment-title">
      <img :src="comment.author ? comment.author.avatar_url : ''" alt="" />
      <a class="loginname" :href="`/user/${comment.author.loginname}`">{{
        comment.author ? comment.author.loginname : ""
      }}</a>
      <span style="font-size: 0.8rem">{{
        $dayjs(comment.create_at).format("YYYY-MM-DD")
      }}</span>
      <!-- </div> -->
      <span>点赞({{ comment.ups ? comment.ups.length : "" }})</span>
    </div>
    <div class="comment-content" v-html="comment.content"></div>
  </div>
</template>
<script lang="js">
export default {
  name: 'Comment',
  props:{
    comment:{
      type:Object,
      default:()=>{
        return {
        author:{
          avatar_url:'',
          loginname:''
        },
        ups:[]
      }
      }
    }
  },
  created(){
    console.log(this.comment);
  }
};
</script>
<style scoped lang="scss">
.comment {
  padding: 0 2px;
  &-title {
    font-size: 0.9rem;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    .loginname {
      color: #73b200;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
  p {
    color: #fff;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 1rem;
    margin: 0;
  }
}
</style>

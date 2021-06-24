<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 15:13:40
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-24 16:54:48
 * @FilePath: /node-js/src/components/List.vue
-->
<template>
  <div class="list">
    <at-card
      v-for="list in ListData"
      :id="list.id"
      class="card"
      style="width: 100%"
      :no-hover="true"
      :bordered="false"
      @click.native="clickCard(list)"
    >
      <div class="list-item">
        <img
          v-if="avatar"
          :title="list.author.loginname"
          :src="list.author.avatar_url"
          alt
        />
        <div>
          <at-badge v-if="badge" :value="list.reply_count"></at-badge>
        </div>
        <at-tag
          v-show="list.tab"
          color="info"
          :style="`background: ${tabsColorMap[list.tab]};border-color:${
            tabsColorMap[list.tab]
          }`"
        >
          {{ tabsMapReserve[list.tab] }}
        </at-tag>
        <p>{{ list.title }}</p>
        <span class="list-item-date">{{
          $dayjs(list.create_at).format("YYYY-MM-DD")
        }}</span>
      </div>
    </at-card>
  </div>
</template>
<script lang="js">
export default {
  name: 'List',

  props: {
    ListData: {
      type: Array,
      default: [],
    },
    avatar:{
      type:Boolean,
      default: true
    },
    badge:{
      type:Boolean,
      default: true
    },
    tabsMapReserve: {
      type: Object,
      default: () => {
        return {
          'good': '精华',
          'share': '分享',
          'ask': '问答',
          'job': '招聘',
        }
      },
      required: false
    },
    tabsColorMap: {
      type: Object,
      default: () => {
        return {
          'good': '#6190E8',
          'share': '#FFC82C',
          'ask': '#BFBFBF',
          'job': '#2C405A',
        }
      },
      required: false
    }

  },
  methods: {
    clickCard(list){
      this.$emit('CardClick',list)
    }
  }
};
</script>
<style scoped lang="scss">
.card {
  &:hover {
    cursor: pointer;
    p {
      color: #13ce66;
    }
  }
  padding: 0 !important;
  .list-item {
    margin: -18px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: nowrap;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      text-align: left;
    }
    span {
      width: 70px;
      flex-shrink: 0;
      font-size: 0.8rem;
    }
  }
}
</style>

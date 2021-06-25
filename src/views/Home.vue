<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-06-23 12:07:03
 * @LastEditors: liu-wb
 * @LastEditTime: 2021-06-25 11:33:20
 * @FilePath: /node-js/src/views/Home.vue
-->
<template>
  <div class="homepage" ref="homepage">
    <div style="overflow-y: hidden; text-align: center">
      <at-tabs :animated="false" @on-change="tabChanged">
        <at-tab-pane
          v-for="tab in tabs"
          :label="tab"
          :name="tab"
          style="font-size: 1rem"
        >
          <List
            :badge="true"
            :ListData="ListData"
            @CardClick="CardClick"
          ></List>
        </at-tab-pane>
      </at-tabs>
    </div>
  </div>
</template>
<script lang="js">
import {getAllTopics} from '@/api/topic';
import {tabsMap} from '@/config';
import List from '@/components/List';


export default {
  components:{
    List
  },
  data(){
    return {
      ListData:[],
      loading:true,
      tabs:[
        '全部','精华','分享','问答','招聘'
      ],
      page:1,
      currentTab:''
    }
  },
  mounted(){
    this.$Loading.config({
      width: 6
    })
    this.$refs.homepage.addEventListener('scroll', ()=>this.listenBottomOut(this.$refs.homepage))
  },
  methods:{
    async tabChanged(scoped){
      this.$Loading.start()
      this.currentTab = tabsMap[scoped.name]
      let res = await getAllTopics({tab:tabsMap[scoped.name],page:this.page})
      if(!res.success) {
        this.$Loading.error()
        return
      }
      this.$Loading.finish()
      this.ListData = res.data
    },
    listenBottomOut(ref){
      let scrollTop = ref.scrollTop; //滚动高度
      let clientHeight = ref.clientHeight //页面可视区域高度
      let scrollHeight = ref.scrollHeight; //页面高度
      if(scrollTop + clientHeight >= scrollHeight){
        this.$Loading.start()
        this.page = this.page + 1
        getAllTopics({tab:this.currentTab,page:this.page}).then(res=>{
          this.ListData = this.ListData.concat(res.data)
          this.$Loading.finish()
        }).catch(error=>{
          this.$Loading.error()
        })
      }
    },
    CardClick(list){
      let ref = this.$refs.homepage
      this.$router.push({name:'topicContent',params:{id:list.id}}).then(()=>{
        ref.removeEventListener('scroll',()=>this.listenBottomOut(ref))
      })
    }
  },

};
</script>
<style scoped lang="scss">
.homepage {
  overflow: auto;
  height: 100%;
}
</style>

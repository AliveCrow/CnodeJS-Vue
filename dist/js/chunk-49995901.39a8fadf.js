(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49995901"],{"6db7":function(t,e,n){"use strict";n("d1dc")},a547:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info"},[n("Divider",{attrs:{contentPosition:"left"}},[n("section",[t._v("最近创建的话题")])]),n("List",{attrs:{avatar:!1,badge:!1,ListData:t.userInfo.recent_topics},on:{CardClick:t.CardClick}}),n("Divider",{attrs:{contentPosition:"left"}},[n("section",[t._v("最近参与的话题")])]),n("List",{attrs:{avatar:!1,badge:!1,ListData:t.userInfo.recent_replies},on:{CardClick:t.CardClick}})],1)},a=[],i=n("1da1"),s=(n("96cf"),n("365c")),c=n("2e90"),o={components:{List:c["a"]},data:function(){return{userInfo:{recent_topics:[],recent_replies:[]}}},created:function(){this.initUserInfo()},methods:{initUserInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(t.$route.params.loginname);case 2:n=e.sent,n.success&&(t.userInfo=n.data,t.$store.commit("setUserInfo",n.data));case 4:case"end":return e.stop()}}),e)})))()},CardClick:function(t){this.$router.push({name:"topicContent",params:{id:t.id}})}}},u=o,d=(n("6db7"),n("2877")),f=Object(d["a"])(u,r,a,!1,null,"56be459a",null);e["default"]=f.exports},d1dc:function(t,e,n){}}]);
//# sourceMappingURL=chunk-49995901.39a8fadf.js.map
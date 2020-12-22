<!--
 * @Author: zhangyao
 * @Date: 2020-12-21 17:25:04
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-22 15:30:49
-->
<template>
  <div class="personal-center-tpl border-box min-height-full p-10 radius-4">
    <el-row :gutter="24">
      <el-col class="bg-f" :span="6">
        <div class="user-info">
          <div class="text-center">
            <img class="user-avator m-t-10" :src="userAvatar" />
            <p class="m-b-10 m-t-10 f-s-24 font-bold">{{ userInfo.name }}</p>
            <span>要得到，先成为。</span>
          </div>
          <p class="m-t-20 f-s-14">
            <i class="el-icon-s-cooperation"></i> 前端工程师
          </p>
          <p class="m-t-10 f-s-14"><i class="el-icon-location"></i> 北京市</p>
          <ul class="m-t-20 display-flex app-content">
            <li class="user-app" v-for="(item, index) in appList" :key="index">
              <a :href="item.herf" target="_blank"
                ><img :src="item.imgUrl"
              /></a>
            </li>
          </ul>
          <el-divider></el-divider>
          <div>
            <h4 class="m-b-10">标签</h4>
            <el-tag
              class="m-r-5 m-t-5"
              :key="index"
              v-for="(tag, index) in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(index)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag m-t-5"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag m-t-5"
              size="small"
              @click="showInput"
              >+ 添加</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col class="bg-f m-l-20 p-20" :span="17">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="`文章(${contentList.length})`" name="first">
            <ul>
              <li v-for="(content,index) in contentList" :key="index" class="m-b-10">
                <a class="f-s-18 content-title" :href="content.herf" target="_blank">{{content.title}}</a>
                <p class="m-t-20 m-b-10 f-s-12">{{content.des}}</p>
                <p class="m-b-10 f-s-12"><img :src="userAvatar" class="author-img m-r-5">{{content.authName}} 发表于 <span>{{content.time}}</span></p>
                <p class="f-s-12">
                  <span class="m-l-5 m-r-5"><i class="el-icon-view font-bold"></i> {{content.view}}</span>
                  <span class="m-r-5"><i class="el-icon-chat-square font-bold"></i> {{content.comment}}</span>
                  <span class="m-r-5"><i class="el-icon-share font-bold"></i> {{content.share}}</span>
                </p>
                 <el-divider></el-divider>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane :label="`项目模块(${modules.length})`" name="second">
              <el-row :gutter="24">
                   <el-col :span="12" v-for="(item,index) in modules" :key="index">
                       <el-card class="box-card border-box m-b-10" shadow="never" >
                            <div class="f-s-14 p-20">
                                <p class="font-bold f-s-18"><img :src="userAvatar" class="author-img m-r-5"> {{item.name}}</p>
                                <p class="m-b-5 m-t-20">模块内容: {{item.module}}</p>
                                <p class="m-b-5">负责人: {{item.name}}</p>
                                <p>最后更新时间: {{item.end_time}}</p>
                            </div>
                             <div class="m-t-10">
                                 <ul class="display-flex opt-content">
                                     <li>
                                         <i class="el-icon-thumb"></i>
                                     </li>
                                     <li>
                                         <i class="el-icon-download"></i>
                                     </li>
                                     <li>
                                         <i class="el-icon-edit-outline"></i>
                                     </li>
                                     <li>
                                          <i class="el-icon-share"></i>
                                     </li>
                                 </ul>
                            </div>
                        </el-card>
                   </el-col>
              </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      appList: [
        {
          herf: "https://www.jianshu.com/u/cb93f94a7fb7",
          imgUrl: require("@assets/image/j.png"),
        },
        {
          herf: "https://github.com/zdbss1990/vue-manage-template",
          imgUrl: require("@assets/image/g.jpg"),
        },
        {
          herf: "https://y.qq.com/index.html",
          imgUrl: require("@assets/image/q.png"),
        },
        {
          herf: "https://music.163.com/",
          imgUrl: require("@assets/image/w.png"),
        },
      ],
      dynamicTags: ["前端小白", "王者荣耀", "有点想法", "快乐"],
      inputValue: "",
      inputVisible: false,
      activeName:'first',
      contentList:[
          {
              title:'宏队列与微队列',
              herf:'https://www.jianshu.com/p/4702e2375251',
              des:"1.javascript是单线程，基于事件循环，非阻塞IO的特点:处理I/0的应用,不适合cpu运算密集的应用.说明：事件循环中使用一个事件...",
              authName:'张嘚吧',
              view:170,
              comment:0,
              share:2,
              time:'2020-03-31 15:53'
          },
          {
              title:'Object.defineProperty详解',
              herf:'https://www.jianshu.com/p/89f5f18ca435',
              des:"1.vue2双向数据绑定实现 vue2主要借助于object.defineProperty实现(讲解) 数据描述符: 1.configurabl...",
              authName:'张嘚吧',
              view:108,
              comment:0,
              share:1,
              time:'2020-04-01 11:37'
          },
          {
              title:'Proxy详解',
              herf:'https://www.jianshu.com/p/b20278665cac',
              des:"概述 Proxy可以理解为，在目标对象之前设一层'拦截'，外界对该对象的访问，都必须通过这层拦截,可以对外界的访问进行过滤和改写（表示可以用它...",
              authName:'张嘚吧',
              view:341,
              comment:0,
              share:0,
              time:'2020-04-01 16:42'
          },
           {
              title:'Vue Composition API学习',
              herf:'https://www.jianshu.com/p/03862c7bf35a',
              des:"作者提供api的动机是逻辑重用与代码组织，由于vue当前的api所带来编程限制，基本分为两种:1.随着功能的增长，复杂组件中的代码越来越难以推理...",
              authName:'张嘚吧',
              view:2412,
              comment:0,
              share:2,
              time:'2020-04-24 15:22'
          },
           {
              title:'set、WeakSet、 map、 WeakMap区别',
              herf:'https://www.jianshu.com/p/e677d3b55566',
              des:"1.es6新增Set结构,类似数组,但是成员值都是唯一的不能重复.Set本身是一个构造函数.需要new. set对象存储值是唯一的，所有需要判断...",
              authName:'张嘚吧',
              view:160,
              comment:0,
              share:0,
              time:'2020-11-24 15:33'
          }
      ],
       modules:[
           {
               name:'张嘚吧',
               module:'主页',
               end_time:'2020-11-1'
           },
           {
               name:'张嘚吧',
               module:'列表',
               end_time:'2020-11-3'
           },
            {
               name:'张嘚吧',
               module:'表单',
               end_time:'2020-11-5'
           },
            {
               name:'张嘚吧',
               module:'图表',
               end_time:'2020-11-8'
           },
           {
               name:'张嘚吧',
               module:'编辑器',
               end_time:'2020-11-15'
           },
           {
               name:'张嘚吧',
               module:'异常页面',
               end_time:'2020-11-15'
           }
       ]
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.authModule.user,
      userAvatar: (state) => state.authModule.userAvatar,
    }),
  },
  methods: {
    handleClose(index) {
      this.dynamicTags.splice(index, 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      if (this.inputValue) {
        this.dynamicTags.push(this.inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.user-avator {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user-info {
  padding: 10px;
}
.personal-center-tpl {
  color: $color;
}
.user-app {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 32px;
    height: 32px;
  }
}
.app-content {
  justify-content: space-around;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.content-title{
    cursor: pointer;
    text-decoration: none;
    color: $color;
    &:hover{
        color: $link-color;
    }
}
.author-img{
  width: 28px;
  height: 28px;
  border-radius: 50%;
  vertical-align: bottom;
}
.box-card{
    color:$color
}
.opt-content{
    padding: 10px 0;
    justify-content: space-around;
    border-top: 1px solid #EBEEF5;
    li{
        line-height: 40px;
        font-size: 24px;
        width: 100%;
        text-align: center;
    }
    li:not(:last-child){
       border-right: 1px solid #EBEEF5;
    }
}
.box-card ::v-deep .el-card__body{
   padding: 0;
}
</style>
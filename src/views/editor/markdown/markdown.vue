<!--
 * @Author: zhangyao
 * @Date: 2020-12-17 17:46:00
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-18 15:47:21
-->
<template>
  <div class="markdown-tpl border-box min-height-full bg-f p-10 radius-4">
    <el-row :gutter="24">
       <el-col :span="24">
         <Markdown :value="value"/>
       </el-col>
    </el-row>
  </div>
</template>
<script>
import Markdown from 'vue-meditor';
export default {
   components: {
            Markdown
  },
  data() {
    return {
      value:'<h1>你好</h1>'
    };
  },
  methods:{
    
  }
};
</script>
<style lang="scss" scoped>
.default-block{
  display: inline-block;
  width: 50px;
  height: 10px;
  border-radius: 2px;
  // background:rgb(220, 220, 220);
  margin-left: 5px;
}
.default{
   background:rgb(220, 220, 220);
}
.low{
   background: rgb(255, 70, 15);
}
.middle{
   background:rgb(255, 106, 0)
}
.high{
  background: rgb(10, 158, 0);
}
</style>

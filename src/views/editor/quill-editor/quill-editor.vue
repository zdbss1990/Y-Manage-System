<!--
 * @Author: zhangyao
 * @Date: 2020-12-17 16:59:07
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-17 17:45:02
-->
<template>
    <div class="quill-editor-tpl border-box min-height-full bg-f p-10 radius-4">
         <el-row :gutter="24">
            <el-col :span="24">
                <div class="f-s-18 m-b-10">{{ $t("route.quill_editor") }}</div>
                <p class="f-s-12 gray m-b-10">以富文本的方式编辑.</p>
            </el-col>
            <el-col :span="24">
                <quill-editor class="quill-editor" v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @change="onEditorChange($event)">
                </quill-editor>
            </el-col>
         </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:'',
            editorOption:{
                 placeholder: '编辑文章内容'
            }
        }
    },
    methods:{
        onEditorChange(event){
            console.log(event)
        }
    }
}
</script>
<style lang="scss" scoped>
  .quill-editor{
      height: 400px;
  }
</style>
<!--
 * @Author: zhangyao
 * @Date: 2020-12-21 15:14:54
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-21 16:58:25
-->
<template>
    <div class="upload-tpl border-box min-height-full bg-f p-10 radius-4">
        <el-row :gutter="24">
            <el-col :span="24">
                <div class="f-s-18 m-b-10">{{ $t("route.upload") }}</div>
                <p class="f-s-12 gray m-b-10">以列表的方式展示上传内容.</p>
            </el-col>
            <el-col :lg="14" :md="14" :span="24">
                <uploader :options="options" class="uploader-example"  
                        @file-added="onFileAdded"
                        @file-success="onFileSuccess"
                        @file-progress="onFileProgress"
                        @file-error="onFileError">
                    <uploader-unsupport></uploader-unsupport>
                    <uploader-btn class="upload-btn" :attrs="attrs">选择文件</uploader-btn>
                    <uploader-list class="m-t-10">
                        <div slot-scope="props">
                            <ul>
                                 <li v-for="file in props.fileList" :key="file.id" class="m-b-10">
                                     <div class="file-list">
                                           <img :src="getImageUrl(file)" class="file-img">
                                           <span class="m-l-10 file-name" :title="file.name" >文件名:{{file.name}}</span>
                                           <el-progress style="width:200px" :percentage="file.prevProgress"></el-progress>
                                           <span class="m-l-5">文件大小:{{file.size | humanLimitSize}}</span>
                                           <span>状态:{{file.error ? '失败':'成功'}}</span>
                                     </div>
                                 </li>
                                 <div class="no-file" v-if="!props.fileList.length">暂无待上传文件</div>
                            </ul>
                        </div>
                    </uploader-list>
                </uploader>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            options: {
                target: '//localhost:3000/upload',
                testChunks: false
            },
                attrs: {
                accept: 'image/*'
            }
        }
    },
    computed:{
         getImageUrl(){
             return (event)=>{
                 let url='';
                    if(window.createObjectURL!= undefined){
                        url=window.createObjectURL(event.file)
                    }else if(window.URL!=undefined){
                        url=window.URL.createObjectURL(event.file)
                    }else if(window.webkitURL!=undefined){
                        url=window.webkitURL.createObjectURL(event.file)
                    }
                    console.log(url)
                return url
             }
           
       }
    },
    methods:{
        onFileAdded(file){
            console.log(file)
        },
        onFileSuccess(file){
            
        },
        onFileProgress(file){
            
        },
        onFileError(file){
            
        }
    }
}
</script>
<style lang="scss" scoped>
.upload-btn{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    font-size: 14px;
    padding: 10px 15px;
    &:hover,&:focus{
       background-color: #409eff;
       border-color: #409eff;
    }
}
.no-file{
    text-align: center;
    line-height: 80px;
    border-radius: 4px;
    border: 1px solid #cdcdcd;
    color: #cccccc;
}
.file-img{
    width: 50px;
    height: 50px;
}
.file-list{
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.file-name{
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
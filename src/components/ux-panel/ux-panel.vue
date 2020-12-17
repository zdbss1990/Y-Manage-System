<!--
 * @Author: zhangyao
 * @Date: 2020-12-10 17:10:17
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-15 14:58:50
-->
<template>
    <div class="ux-panel-tpl">
        <el-card class="box-card" :class="[{'expand':expand,'folded':folded}]" v-if="!remove">
            <div slot="header" class="clearfix">
                <slot name="title"></slot>
                <div class="panel-opt">
                    <span class="panel-icon bg-f m-r-5" @click="handleExpand"><i class="el-icon-full-screen font-bold panel-full f-s-14"></i></span>
                    <span class="panel-icon bg-success  m-r-5" @click="refreshCharts"><i class="el-icon-refresh font-bold"></i></span>
                    <span class="panel-icon bg-warning  m-r-5" @click="foldedPanel"><i class="el-icon-minus font-bold"></i></span>
                    <span class="panel-icon bg-danger" @click="removePanel"><i class="el-icon-close font-bold"></i></span>
                </div>
            </div>
            <div class="panel-content height-full" v-loading="loading" 
                :element-loading-text="$t('layout.loading')"
                 element-loading-spinner="el-icon-loading">
                <slot></slot>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    props:{
       charts:{
           type:String,
           default:''
       }
    },
    data(){
        return{
            expand:false,
            folded:false,
            remove:false,
            loading:false
        }
    },
    methods:{
        handleExpand(){
            this.expand=!this.expand;
            this.$emit('resize',this.charts)
        },
        refreshCharts(){
            this.loading=true;
            setTimeout(()=>{this.loading=false},2000)
        },
        foldedPanel(){
            this.folded=!this.folded
        },
        removePanel(){
            this.remove=!this.remove
        }
    }
}
</script>
<style lang="scss" scoped>
.panel-icon{
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
}
.ux-panel-tpl ::v-deep .el-card__header{
    padding: 0 15px !important;
    line-height: 45px;
    background: #0f0f0f;
    color: #fff;
    position: relative;
}
.panel-full{
    color: #303133;
}
.expand{
    position: fixed;
    z-index: 1000;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
.ux-panel-tpl ::v-deep .el-card__body{
     padding: 0px;
     height: 300px;
     transition: all 1s ease;
}
.folded ::v-deep .el-card__body{
    height: 0px;
    transition: all 1s ease;
}
.panel-opt{
    position: absolute;
    right: 10px;
    top:0px;
}

</style>
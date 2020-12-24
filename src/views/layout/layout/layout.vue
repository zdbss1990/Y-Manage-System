<!--
 * @Author: zhangyao
 * @Date: 2020-11-16 16:33:09
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-24 14:50:00
-->
<template>
    <div class="uxcloud-home-tpl page-body-fixed">
         <ux-header></ux-header>
         <ux-side-bar></ux-side-bar>
         <ux-main></ux-main>
         <ux-config></ux-config>
    </div>
</template>
<script>
import UxHeader from './../header/header.vue';
import UxMain from './../main/main.vue';
import uxSideBar from './../sidebar/sidebar.vue';
export default {
    components:{
        UxHeader,
        UxMain,
        uxSideBar
    },
    data(){
        return{
            
        }
    },
}
</script>
<style scoped lang="scss">
.page-body-fixed{
    padding-top: 50px;
    height: 100%;
    box-sizing: border-box;
    background:#e4e7e8;
}
</style>
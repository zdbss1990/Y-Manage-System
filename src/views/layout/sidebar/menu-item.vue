<!--
 * @Author: zhangyao
 * @Date: 2020-11-27 17:22:24
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-01 14:46:26
-->
<template>
    <div>
        <el-submenu :index="menu.path" v-if="menu.children&&menu.children.length">
            <template slot="title">
                <i :class="menu.icon" v-if="menu.icon"></i>
                <span slot="title">{{$t(`route.${menu.name}`)}}</span>
            </template>
            <menu-item v-for="(me,index) in menu.children"  :menu="me" :key="index"></menu-item>
        </el-submenu>
        <el-menu-item :index="menu.path" v-else>
            <i :class="menu.icon" v-if="menu.icon"></i>
            <span slot="title">{{$t(`route.${menu.name}`)}}</span>
        </el-menu-item>
    </div>
</template>
<script>
export default {
    name:'menu-item',
    props:{
        menu:{
            type:[Array,Object],
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse > div > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
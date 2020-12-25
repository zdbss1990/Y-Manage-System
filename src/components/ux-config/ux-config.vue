<!--
 * @Author: zhangyao
 * @Date: 2020-12-24 14:50:19
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-25 14:43:38
-->
<template>
    <div>
        <el-drawer
            size='220px'
            title="基础配置"
            :visible.sync="flag"
            :before-close="close"
            :show-close="false"
            >
           <ul class="display-flex theme-config-main">
               <li v-for="(item,index) in 2" :key="index" @click="handleSetting(index)">
                   <div>
                       <span class="theme-menu" :class="`left-${index+1}`"></span>
                       <span class="theme-content" :class="`right-${index+1}`"></span>
                   </div>
                   <div class="text-center m-t-5">
                        <span class="active" v-if="activeIndex===index"></span>
                   </div>
               </li>
           </ul>
          <div class="p-20 f-s-14">
              <span class="vertica-middle">
                  显示折叠侧边栏按钮
              </span>
              <el-switch
                class="pull-right"
                v-model="foldBtn" @change="handleFold">
             </el-switch>
          </div>
           <div class="p-20 f-s-14">
              <span class="vertica-middle">
                 显示全屏按钮
              </span>
              <el-switch
                class="pull-right"
                v-model="screenBtn" @change="handleScreen">
             </el-switch>
          </div>
        </el-drawer>
    </div>
</template>
<script src="./ux-config.js"></script>
<style lang="scss" scoped src="./ux-config.scss"></style>
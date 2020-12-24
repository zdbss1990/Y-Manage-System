<!--
 * @Author: zhangyao
 * @Date: 2020-12-24 14:50:19
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-24 17:59:15
-->
<template>
    <div>
        <el-drawer
            size='18%'
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
          <div>
              <span>
                  显示折叠侧边栏按钮
              </span>
              <el-switch
                v-model="btn">
             </el-switch>
          </div>
        </el-drawer>
    </div>
</template>
<script src="./ux-config.js"></script>
<style lang="scss" scoped src="./ux-config.scss"></style>
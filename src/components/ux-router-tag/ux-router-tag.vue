<template>
    <div class="ux-router-tag-tpl">
         <div class="pull-right f-s-14">
            <template v-for="(route,index) in router_list" >
                  <span v-if="index!==router_list.length-1" :key="index" class="link" @click="toPage(route)">
                       <i v-if="route.icon" :class="route.icon"></i>
                       <span>{{$t(`route.${route.title}`)}}</span> 
                       <span class="no-redirect"> / </span>
                  </span>
                  <span v-else :key="index" class="no-redirect">
                       {{$t(`route.${route.title}`)}}
                  </span>
            </template>
        </div>
    </div>
</template>
<script src="./ux-router-tag.js"></script>
<style lang="scss" scoped src="./ux-router-tag.scss"></style>
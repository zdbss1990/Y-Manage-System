<!--
 * @Author: zhangyao
 * @Date: 2020-11-16 16:31:41
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-01 16:51:48
-->
<template>
  <div class="uxcloud-main-tpl" :class="collapse ? 'min-layout':'max-layout'">
    <vue-custom-scrollbar class="height-full" >
      <div class="ux-view-tpl height-full">
        <ux-router-tag></ux-router-tag>
        <router-view></router-view>
      </div>
    </vue-custom-scrollbar>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ux-main",
  data() {
    return {};
  },
   computed: mapState({
    collapse: (state) => state.layoutModule.isCollapse,
  }),
};
</script>
<style scoped lang="scss">
 @mixin main-tpl{
   padding:10px;
   height: 100%;
  //  background: red;
   box-sizing: border-box;
}
.uxcloud-main-tpl ::v-deep .ps__rail-x{
    display: none !important;
}
.max-layout{
   width: calc(100% - 220px);
   margin-left: 220px;
}
.min-layout{
   width: calc(100% - 65px);
   margin-left: 65px;
}
@media (min-width: 768px) {
  .uxcloud-main-tpl {
    @include  main-tpl;
   }
}
@media (max-width: 768px) {
  .uxcloud-main-tpl {
    width: 100%;
    margin-left: 0px;
    @include  main-tpl;
  }
}
</style>
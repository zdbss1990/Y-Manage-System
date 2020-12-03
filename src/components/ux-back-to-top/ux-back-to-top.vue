<template>
  <div>
    <el-backtop
      :target="eleSelector"
      :bottom="80"
      :visibility-height="200"
      @click="backTop"
      :right="50"
    >
     <span class="el-icon-arrow-up backto-top-icon"></span>
    </el-backtop>
  </div>
</template>
<script src="./ux-back-to-top.js"></script>
<style lang="scss" scoped src="./ux-back-to-top.scss"></style>
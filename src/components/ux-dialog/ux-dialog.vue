<template>
  <div class="ux-dialog-tpl">
    <el-dialog
      :title="dialog_title || $t('msg.tips')"
      :visible.sync="dialog_visible"
      :width="dialog_width"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <div><slot></slot></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">{{$t('button.cancel')}}</el-button>
        <el-button type="primary" @click="submit">{{$t('button.confirm')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script src="./ux-dialog.js"></script>
<style lang="scss" scoped src="./ux-dialog.scss"></style>
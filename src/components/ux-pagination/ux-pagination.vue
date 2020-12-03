<template>
  <div class="ux-pagination-tpl">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pageOptions.currentPage"
      :page-size="pageOptions.pageSize"
      layout="total,slot, prev, pager, next, jumper"
      :total="total"
    >
      <el-select class="ux-page-size" v-model="pageOptions.pageSize" size="mini" @change="handleSizeChange">
        <el-option v-for="(page, index) in pageSizes" 
           :label="page === -1 ? $t('layout.all') : `${page}${$t('layout.total')}/${$t('layout.page')}`"
           :key="index" 
           :value="page">
        </el-option>
      </el-select>
    </el-pagination>
  </div>
</template>
<script src="./ux-pagination.js"></script>
<style lang="scss" scoped src="./ux-pagination.scss"></style>
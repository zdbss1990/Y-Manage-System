<template>
  <div class="ux-search-tpl">
    <el-form ref="searchForm" :model="search_form" inline>
      <el-form-item prop="search_type">
        <el-select v-model="search_form.search_type" value-key="key" style="width:120px">
          <el-option
            v-for="(type, index) in options_type"
            :key="index"
            :label="type.name"
            :value="type">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :prop="search_form.search_type.key" v-if="search_form.search_type.type === 'input'">
        <el-input
          class='w200'
          v-model="search_form.value"
          :placeholder="search_form.search_type.placeholder"
        ></el-input>
      </el-form-item>
      <el-form-item :prop="search_form.search_type.key" v-if="search_form.search_type.type === 'select'">
        <el-select
          class='w200'
          v-model="search_form.value"
          :placeholder="search_form.search_type.placeholder"
          value-key="id">
          <el-option
            v-for="(option, index) in search_form.search_type.select_options"
            :key="index"
            :label="option.name"
            :value="option.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
           <el-button type="primary" @click="searchForm">搜索</el-button>
           <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src="./ux-search.js"></script>
<style lang="scss" scoped src="./ux-search.scss"></style>
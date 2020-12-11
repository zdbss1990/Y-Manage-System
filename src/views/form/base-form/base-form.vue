<!--
 * @Author: zhangyao
 * @Date: 2020-12-07 14:19:11
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-10 10:58:12
-->
<template>
  <div class="base-form border-box min-height-full bg-f p-10 radius-4">
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="f-s-18 m-b-10">{{ $t("route.base_form") }}</div>
        <p class="f-s-12 gray m-b-10">以基础的方式展现表单.</p>
      </el-col>
      <el-col :lg="10" :md="10" :span="23" :offset="1">
        <el-form
          label-position="right"
          :model="ruleForm"
          :rules="rules"
          ref="form"
          class="demo-ruleForm"
          label-width="100px"
        >
          <el-form-item :label="$t('form.name')" prop="name">
            <el-input
              clearable
              v-model.trim="ruleForm.name"
              :placeholder="$t('errMsg.please_enter_the_name')"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('form.sex')" prop="sex">
            <el-radio v-model="ruleForm.sex" label="man">{{
              $t("form.man")
            }}</el-radio>
            <el-radio v-model="ruleForm.sex" label="woman">{{
              $t("form.woman")
            }}</el-radio>
          </el-form-item>
          <el-form-item :label="$t('form.status')" prop="status">
            <el-radio v-model="ruleForm.status" label="online">{{
              $t("form.online")
            }}</el-radio>
            <el-radio v-model="ruleForm.status" label="off_line">{{
              $t("form.off_line")
            }}</el-radio>
          </el-form-item>
          <el-form-item :label="$t('form.hobbies_interests')">
            <el-checkbox-group v-model="ruleForm.interests">
              <el-checkbox
                :label="$t('form.music')"
                name="interests"
                vaule="music"
              ></el-checkbox>
              <el-checkbox
                :label="$t('form.drawing')"
                name="interests"
                vaule="drawing"
              ></el-checkbox>
              <el-checkbox
                :label="$t('form.photography')"
                name="interests"
                vaule="photography"
              ></el-checkbox>
              <el-checkbox
                :label="$t('form.cate')"
                name="interests"
                value="cate"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item :label="$t('form.user_avatar')">
             <el-upload
                class="avatar-uploader"
                action="#"
                :limit="1"
                :show-file-list="false"
                :on-change="getImageUrl"
                >
                 <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item :label="$t('form.create_time')" prop="create_time">
            <el-date-picker
              v-model="ruleForm.create_time"
              :picker-options="pickerOptions"
              type="datetime"
              :placeholder="$t('errMsg.please_select_time')"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item :label="$t('form.address')" prop="address">
            <el-input
              clearable
              type="textarea"
              v-model.trim="ruleForm.address"
              :placeholder="$t('errMsg.please_enter_the_address')"
            ></el-input>
          </el-form-item>
          <el-form-item>
                <el-button type="primary">立即创建</el-button>
               <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        sex: "man",
        create_time: "",
        status: "online",
        address: "",
        interests: [],
        imageUrl:''
      },
      pickerOptions: {
        disabledDate: (time) => {
          return Date.now() < time;
        },
      },
      rules: {
        name: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_enter_the_name")}`,
            trigger: "blur",
          },
        ],
        create_time: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_select_time")}`,
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_enter_the_address")}`,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
     getImageUrl(event){
         let url='';
         if(window.createObjectURL!= undefined){
             url=window.createObjectURL(event.raw)
         }else if(window.URL!=undefined){
             url=window.URL.createObjectURL(event.raw)
         }else if(window.webkitURL!=undefined){
             url=window.webkitURL.createObjectURL(event.raw)
         }
         this.ruleForm.imageUrl=url
     }
  },
};
</script>
<style lang="scss" scoped>
  .avatar-uploader ::v-deep .el-upload{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 140px;
    height: 140px;
    line-height: 140px;
    text-align: center;
  }
  .avatar {
    width: 140px;
    height: 140px;
    display: block;
  }
</style>
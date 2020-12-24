<!--
 * @Author: zhangyao
 * @Date: 2020-12-08 10:14:41
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-23 17:14:52
-->
<template>
  <div class="login-tpl height-full">
    <div class="login-container">
      <div class="login-main">
        <h5 class="logo">vue-template</h5>
        <div class="language">
          <span
            class="icon iconfont iconyingwen1"
            v-if="lang === 'zh_CN'"
            @click="setLang('en')"
          ></span>
          <span
            class="icon iconfont iconzhongwen"
            v-else
            @click="setLang('zh_CN')"
          ></span>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="ruleForm"
        >
          <el-form-item prop="username" class="m-t-10">
            <el-input
              v-model="ruleForm.username"
              autocomplete="off"
              :placeholder="$t('form.user_name')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="m-b-8">
            <el-input
              :type="inputType"
              v-model="ruleForm.password"
              autocomplete="off"
              :placeholder="$t('form.password')"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox
              v-model="checked"
              @change="checkPass"
              class="pull-right"
              >{{ $t("layout.show_password") }}</el-checkbox
            >
            <el-button
              style="width: 100%"
              type="primary"
              @click="singin('ruleForm')"
              >{{ $t("button.signin") }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      inputType: "password",
      checked: false,
      rules: {
        username: [
          {
            required: true,
            message: this.$i18n.t("errMsg.please_enter_your_userName"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$i18n.t("errMsg.please_enter_the_password"),
            trigger: "blur",
          },
          {
            min: 6,
            max: 16,
            message: this.$i18n.t("errMsg.password_length"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: mapState({
    lang: (state) => state.layoutModule.language,
  }),
  methods: {
    ...mapActions(["setLanguage", "login"]),
    setLang(val) {
      this.$i18n.locale = val;
      this.setLanguage(val);
      this.$_notify({
        title: this.$i18n.t("msg.tips"),
        type: "success",
        message: this.$i18n.t("msg.set_success"),
      });
    },
    checkPass() {
      this.inputType = this.checked ? "text" : "password";
    },
    singin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           this.login(this.ruleForm).then((res) => {
                console.log(res)
                this.$router.push({
                  path: "/home",
                });
            }).catch((err) => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-tpl {
  background: #304156;
}
.login-main {
  width: 400px;
  padding: 20px;
  box-sizing: border-box;
  height: 270px;
  // border: 1px solid #f5f5f5;
  text-align: center;
  border-radius: 4px;
  // box-shadow: 1px 1px #f5f5f5;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
}
.logo {
  font-size: 20px;
  // font-style: italic;
  // font-weight: bolder;
  color: #303133;
  text-shadow: 2px 4px 2px #d7d8db;
}
.language {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  .icon {
    font-size: 24px;
    font-weight: bolder;
    color: #000;
  }
}
</style>
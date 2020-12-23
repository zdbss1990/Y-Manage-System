<!--
 * @Author: zhangyao
 * @Date: 2020-12-22 15:40:15
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-23 14:22:53
-->
<template>
  <div class="personal-setting-tpl border-box min-height-full">
    <el-row :gutter="24">
      <el-col :lg="6" :md="6" class="m-t-10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人设置</span>
          </div>
          <div
            v-for="(list, index) in lists"
            :key="index"
            class="setting-item m-b-10"
            :class="activeIndex == index ? 'active' : ''"
            @click="activeIndex = index"
          >
            <h4>{{ list.title }}</h4>
            <p class="m-t-10 f-s-12">{{ list.des }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="18" :md="18">
        <div class="bg-f p-20 m-t-10">
          <div class="base-info-tpl" v-if="activeIndex === 0">
            <h4 class="f-s-18 font-bold">基本信息</h4>
            <el-row :gutter="24">
              <el-col :lg="8" :md="8" class="text-center">
                <div class="m-t-20">
                  <el-avatar
                    shape="square"
                    :size="80"
                    :src="userAvatar"
                  ></el-avatar>
                  <br />
                  <el-button class="m-t-10" size="small" @click="openDialog"
                    >更换头像</el-button
                  >
                </div>
              </el-col>
              <el-col :lg="14" :md="14">
                <el-form
                  label-position="top"
                  :model="baseForm"
                  :rules="baseRules"
                  ref="form"
                  class="demo-ruleForm"
                  label-width="100px"
                >
                  <el-form-item label="昵称" prop="name">
                    <el-input
                      v-model="baseForm.name"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="baseForm.email"></el-input>
                  </el-form-item>
                  <el-form-item label="权限" prop="power">
                    <el-select v-model="baseForm.power">
                      <el-option label="管理员" value="admin"></el-option>
                      <el-option label="用户" value="user"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="个人介绍" prop="introduction">
                    <el-input
                      type="textarea"
                      v-model="baseForm.introduction"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary">更新基本信息</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :title="dialog_title"
      :visible.sync="dialog_visible"
      width="50%"
      :append-to-body="true"
      @close="handleClose"
    >
      <div class="vue-cropper-container display-flex">
        <div class="cropper">
          <vue-cropper
            v-if="dialog_visible"
            autoCrop
            fixedBox
            ref="cropper"
            :info="option.info"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :full="option.full"
            @realTime="realTime"
            @imgLoad="imgLoad"
          >
          </vue-cropper>
        </div>
        <div class="ivew-container" :style="computeStyle">
          <div class="preview" :style="previews.div">
            <img :src="viewAvatar" :style="previews.img" />
          </div>
        </div>
      </div>
      <div class="m-t-20 display-flex">
        <el-upload
          class="avatar-uploader m-r-10"
          action="#"
          :limit="1"
          :show-file-list="false"
          :on-change="getImageUrl"
        >
          <el-button>更换图片</el-button>
        </el-upload>
        <el-button
          icon="el-icon-zoom-in"
          circle
          @click="changeScale(1)"
        ></el-button>
        <el-button
          icon="el-icon-zoom-out"
          circle
          @click="changeScale(-1)"
        ></el-button>
        <el-button
          icon="el-icon-refresh-right"
          circle
          @click="rotateRight"
        ></el-button>
        <el-button
          icon="el-icon-refresh-left"
          circle
          @click="rotateLeft"
        ></el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="changeUserAvatar('blob')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      activeIndex: 0,
      lists: [
        {
          title: "基本设置",
          des: "个人账户信息设置",
        },
        {
          title: "安全设置",
          des: "密码、邮箱等设置",
        },
        {
          title: "账号绑定",
          des: "绑定第三方社交账户",
        },
        {
          title: "新消息通知",
          des: "各种通知的设置",
        },
      ],
      baseForm: {
        name: this.$store.state.authModule.user["true_name"],
        email: this.$store.state.authModule.user["email"],
        power: "",
        introduction: "",
      },
      baseRules: {
        name: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        power:[
           { required: true, message: "请选择权限", trigger: "change" },
        ]
      },
      dialog_title: "更换头像",
      dialog_visible: false,
      viewAvatar: "",
      option: {
        img: this.$store.state.authModule.userAvatar,
        size: 1,
        outputType: "png",
        info: true,
        full: false,
        autoCropHeight: 220,
        autoCropWidth: 220,
      },
      previews: {
        w: "",
        h: "",
        img: "",
        div: "",
      },
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.authModule.user,
      userAvatar: (state) => state.authModule.userAvatar,
    }),
    computeStyle() {
      return {
        width: `${this.previews.w}px`,
        height: `${this.previews.h}px`,
      };
    },
  },
  methods: {
    ...mapActions(["setUserAvatar"]),
    getUrl(event) {
      let url = "";
      if (window.createObjectURL != undefined) {
        url = window.createObjectURL(event);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(event);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(event);
      }
      return url;
    },
    //更换图片头像
    getImageUrl(event) {
      let url = this.getUrl(event.raw);
      this.option.img = url;
    },
    //关闭模态框
    handleClose() {
      this.dialog_visible = false;
      setTimeout(() => {
        this.option.img = this.userAvatar;
      }, 500);
    },
    openDialog() {
      this.dialog_visible = true;
    },
    realTime(event) {
      this.viewAvatar = event.url;
      this.previews.w = event.w;
      this.previews.h = event.h;
      this.previews.img = event.img;
      this.previews.div = event.div;
    },
    imgLoad(event) {},
    //改变图片大小
    changeScale(num) {
      this.$refs["cropper"].changeScale &&
        this.$refs["cropper"].changeScale(num);
    },
    rotateRight() {
      this.$refs["cropper"].rotateRight && this.$refs["cropper"].rotateRight();
    },
    rotateLeft() {
      this.$refs["cropper"].rotateLeft && this.$refs["cropper"].rotateLeft();
    },
    changeUserAvatar() {
      this.$refs["cropper"].getCropBlob((data) => {
        //调用api 这里本地预览模拟下
        let url = this.getUrl(data);
        this.setUserAvatar(url);
        this.dialog_visible = false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.personal-setting-tpl {
  color: $color;
}
.setting-item {
  padding: 15px;
  &:hover:not(.active) {
    color: $color;
    background: $light;
  }
}
.active {
  color: $primary;
  background: #f0faff;
}
.cropper {
  width: 300px;
  height: 250px;
}
.vue-cropper-container {
  justify-items: center;
}
.ivew-container {
  flex: 1;
  display: flex;
  justify-content: center;
  .preview {
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #cccccc;
    background: #cccccc;
    // margin-left: 40px;
  }
}
</style>
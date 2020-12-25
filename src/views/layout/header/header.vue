<template>
  <div class="uxcloud-header-tpl">
    <div class="header-default">
      <div class="navbar-header">
        <div>
          <span class="navbar-logo"></span>
          <a class="font-weight"><b>Y Manage System</b></a>
        </div>
        <div class="config-opt">
          <!-- 全屏 -->
          <div class="config-screen" v-if="screen" @click="fullScreen">
            <i class="el-icon-full-screen"></i>
          </div>
          <div class="navbar-nav navbar-right m-l-10">
            <!-- 更多下拉菜单 -->
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar
                  class="header-avatar"
                  shape="square"
                  size="small"
                  :src="userAvatar"
                ></el-avatar>
                {{ userInfo.true_name
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="logout">退出登录</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div @click="goToSetting">个人设置</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div @click="setLang">
                    {{ language === "zh_CN" ? "En" : "中文" }}
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="config-button m-l-10" @click="openSetting">
            <i class="el-icon-more"></i>
          </div>
        </div>
         <!-- 面包屑 -->
        <span class="header-crumbs el-icon-s-unfold" @click="changeMenu"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "ux-header",
  data() {
    return {
      fullscreen: false,
    };
  },
  computed: {
    ...mapState({
      show: (state) => state.layoutModule.show,
      userInfo: (state) => state.authModule.user,
      language: (state) => state.layoutModule.language,
      menuList: (state) => state.authModule.menuList,
      userAvatar: (state) => state.authModule.userAvatar,
      drawer: (state) => state.layoutModule.drawer,
      screen: (state) => state.layoutModule.screen,
    }),
  },

  methods: {
    ...mapActions([
      "changeMenuState",
      "setLanguage",
      "loginOut",
      "openSettings",
    ]),
    changeMenu() {
      //点开导航
      let menu = this.show;
      this.changeMenuState(!menu);
    },
    //设置语言
    setLang() {
      let value = this.language === "en" ? "zh_CN" : "en";
      this.$i18n.locale = value;
      this.setLanguage(value);
      this.$_notify({
        title: this.$i18n.t("msg.tips"),
        type: "success",
        message: this.$i18n.t("msg.set_success"),
      });
    },
    //退出登录
    logout() {
      this.loginOut().then((res) => {
        this.$router.push({
          path: "/login",
        });
      });
    },
    //打开设置
    openSetting() {
      let flag = this.drawer;
      this.openSettings(!flag);
    },
    //全屏
    fullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    goToSetting(){
      this.$router.push({
        path:'/user-management/personal-setting'
      })
    }
  },
};
</script>
<style scoped lang='scss'>
.uxcloud-header-tpl {
  position: fixed;
  & {
    top: 0px;
    left: 0px;
    right: 0;
    z-index: 1000;
    display: flex;
    flex: 1;
    background: $fff;
  }
}
.config-button,.config-screen {
  width: 32px;
  height: 32px;
  text-align: center;
}
.config-opt {
  position: absolute;
  right: 10px;
  display: inline-flex;
  line-height: 30px;
}
.header-crumbs {
  font-size: 20px;
  &:hover {
    opacity: 0.7;
  }
}
@media (min-width: 768px) {
  .navbar-header {
    width: 220px;
  }
  .header-crumbs {
    display: none;
  }
}
@media (max-width: 767px) {
  .header-crumbs {
    position: absolute;
    left: 200px;
    display: block;
  }
  .navbar-right {
    display: none;
  }
}
.navbar-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
}
.navbar-logo {
  display: inline-block;
  margin-right: 10px;
  background: #00acac;
  border: 10px solid transparent;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  vertical-align: middle;
}
.header-avatar {
  vertical-align: middle;
  margin-right: 10px;
}
</style>

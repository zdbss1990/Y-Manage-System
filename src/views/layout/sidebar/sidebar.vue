


<template>
  <div
    class="ux-sidebar-tpl"
    :style="collapse ? 'width:65px' : 'width:220px'"
    :class="show ? 'min-layout' : 'max-layout'"
  >
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo sidebar-menu"
      :background-color="menuBg"
      text-color="rgba(255, 255, 255, 0.45)"
      active-text-color="#fff"
      :collapse="collapse"
      router
    >
      <vue-custom-scrollbar class="custom-scrollbar height-full">
        <menu-item
          v-for="(menu, index) in menuData"
          :menu="menu"
          :key="index"
        ></menu-item>
      </vue-custom-scrollbar>
      <!-- 展开关闭箭头 -->
      <div class="arrow" v-if="fold" @click="changeCollapseState">
        <i
          :class="!collapse ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"
        ></i>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import menuItem from "./menu-item.vue";
export default {
  components: { menuItem },
  name: "ux-sidebar",
  data() {
    return {
    };
  },
  computed: mapState({
    collapse: (state) => state.layoutModule.isCollapse,
    show: (state) => state.layoutModule.show,
    menuData:(state)=>state.authModule.menus,
    menuBg:(state)=>state.layoutModule.menuBg,
    fold:(state)=>state.layoutModule.fold
  }),
  methods: {
    ...mapActions(["changeMenuState", "changeCollapse"]),
    isMobile() {
      const client_w = 768;
      let body = document.documentElement.clientWidth;
      return body < client_w;
    },
    //点击收起
    changeCollapseState() {
      let collapse = this.collapse;
      this.changeCollapse(!collapse);
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (!document.hidden) {
        const isMobile = this.isMobile();
        //移动端
        this.changeMenuState(isMobile);
      }
    });
  },
};
</script>
<style scoped lang="scss">
.ux-sidebar-tpl {
  position: fixed;
  height: calc(100% - 50px);
  z-index: 1000;
}
.min-layout {
  left: -220px;
}
.max-layout {
  left: 0px;
  // animation:max .3s;
}

@media (min-width: 768px) {
  .max-layout {
    top: 50px;
  }
}
@media (max-width: 768px) {
  .max-layout {
    top: 0px;
    height: 100%;
  }
}
.sidebar-menu {
  height: 100%;
}
.arrow {
  position: absolute;
  bottom: 50px;
  right: 2px;
  margin: 10px 0;
  padding: 5px 20px 5px 10px !important;
  background: rgba($color: #000000, $alpha: 0.2);
  color: #ffffff;
  border-radius: 20px 0 0 20px;
}
</style>
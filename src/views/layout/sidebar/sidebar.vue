


<template>
  <div
    class="ux-sidebar-tpl"
    :style="collapse ? 'width:65px' : 'width:220px'"
    :class="show ? 'min-layout' : 'max-layout'"
  >
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo sidebar-menu"
      background-color="#2d353c"
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
      <div class="arrow" @click="changeCollapseState">
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
      menuData: [
        {
          path: "/home",
          icon: "el-icon-s-home",
          name: "home",
          children: [
            {
              path: "/home/dashboard",
              name: "dashboard",
            },
          ],
        },
        {
          path: "/list",
          icon: "el-icon-tickets",
          name: "list",
          children: [
            {
              path: "/list/basic-tables",
              name: "basic_tables",
            },
            {
              path: "/list/product-list",
              name: "product_list",
            },
          ],
        },
        {
          path: "/form",
          icon: "el-icon-edit-outline",
          name: "form",
          children: [
            {
              path: "/form/base-form",
              name: "base_form",
            },
          ],
        },
        {
          path: "/charts",
          icon: "el-icon-pie-chart",
          name: "charts",
        },
        {
          path: "/form2",
          icon: "el-icon-tickets",
          name: "form2",
          children: [
            {
              path: "/form1",
              name: "form1",
              title: "123322",
              children: [
                {
                  path: "/input",
                  name: "input",
                  children: [
                    {
                      path: "/input1",
                      name: "input1",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "/form31",
          icon: "el-icon-tickets",
          name: "form1",
          children: [
            {
              path: "/form122",
              name: "form1",
              title: "123322",
              children: [
                {
                  path: "/input2222",
                  name: "input",
                  children: [
                    {
                      path: "/input111111",
                      name: "input1",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "/form31222",
          icon: "el-icon-tickets",
          name: "form1",
          children: [
            {
              path: "/form1221111",
              name: "form1",
              title: "123322111",
              children: [
                {
                  path: "/input211222",
                  name: "input11",
                  children: [
                    {
                      path: "/input11111111",
                      name: "input1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: mapState({
    collapse: (state) => state.layoutModule.isCollapse,
    show: (state) => state.layoutModule.show,
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
  background: #242b30;
  color: #ffffff;
  border-radius: 20px 0 0 20px;
}
</style>
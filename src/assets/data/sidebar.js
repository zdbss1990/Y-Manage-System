/*
 * @Author: zhangyao
 * @Date: 2020-12-09 16:02:38
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-23 18:12:30
 */
const menuList=[
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
          {
            path:'/form/substep-form',
            name: "substep_form",
          }
        ],
      },
      {
        path: "/charts",
        icon: "el-icon-pie-chart",
        name: "charts",
        children: [
          {
            path: "/charts/v-charts",
            name: "v_charts",
          },
          {
            path: "/charts/apex-charts",
            name: "apex_charts",
          },
          {
            path: "/charts/fusion-chart-map",
            name: "fusion_chart_map",
          },
          {
            path:'/charts/baidu-maps',
            name: "baidu_maps",
          }
        ]
      },
      {
        path:"/editor",
        icon:'el-icon-edit',
        name: "editor",
        children: [
          {
            path: "/editor/quill-editor",
            name: "quill_editor",
          },
          {
            path: "/editor/markdown",
            name: "markdown",
          }
        ]
      },
      {
        path:"/abnormal-page",
        icon:'el-icon-warning',
        name: "abnormal_page",
        children: [
          {
            path: "/abnormal-page/404",
            name: "404",
          }
        ]
      },
      {
        path:"/module",
        icon:'el-icon-receiving',
        name: "module",
        children: [
          {
            path: "/module/video",
            name: "video",
          },
          {
            path: "/module/upload",
            name: "upload",
          }
        ]
      },
      {
        path:"/user-management",
        icon:'el-icon-user',
        name: "user_management",
        children: [
          {
            path: "/user-management/personal-center",
            name: "personal_center",
          },
          {
            path:'/user-management/personal-setting',
            name:'personal_setting'
          }
        ]
      }
]

export default menuList
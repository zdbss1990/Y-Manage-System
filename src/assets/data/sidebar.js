/*
 * @Author: zhangyao
 * @Date: 2020-12-09 16:02:38
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-09 16:03:08
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
      }
]

export default menuList
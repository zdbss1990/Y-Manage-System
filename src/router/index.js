/*
 * @Author: zhangyao
 * @Date: 2020-11-16 10:22:39
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-21 10:10:35
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import Layout from '@/views/layout/layout/layout.vue';
import NotFound from '@/views/abnormal-page/not-found/not-found.vue';
import Login from '@/views/login/login.vue';
import getPageTitle from '@utils/title/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {getSession} from '@utils/auth/session';
import store from '@store/'

NProgress.configure({ showSpinner: false }) // 不显示loading
Vue.use(VueRouter)
export const authRoutes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    },
    meta: {
      role:['admin','user']
    },
    component: Layout,
    children: [{
      path: '/home',
      name: 'home',
      redirect: {
        name: 'dashboard'
      },
      meta: {
        title: 'home',
        role:['admin','user']
      },
      component: () => import( /* webpackChunkName: "Home" */ '@views/home/index.vue'),
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          role:['admin','user']
        },
        component: () => import( /* webpackChunkName: "Dashboard" */ '@views/home/dashboard/dashboard.vue')
      }, ]
    },
    {
      path: '/list',
      name: 'list',
      redirect: {
        name: 'basic-tables'
      },
      meta: {
        title: 'list',
        role:['admin']
      },
      component: () => import( /* webpackChunkName: "List" */ '@views/list/index.vue'),
      children: [{
          path: 'basic-tables',
          name: 'basic_tables',
          meta: {
            title: 'basic_tables',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "BasicTables" */ '@views/list/basic-tables/basic-tables.vue')
        },
        {
          path: 'product-list',
          name: 'product_list',
          meta: {
            title: 'product_list',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "ProductList" */ '@views/list/product-list/product-list.vue')
        },
      ]
    },
    {
      path: '/form',
      name: 'form',
      redirect: {
        name: 'base-form'
      },
      meta: {
        title: 'form',
        role:['user']
      },
      component: () => import( /* webpackChunkName: "Form" */ '@views/form/index.vue'),
      children: [{
          path: 'base-form',
          name: 'base_form',
          meta: {
            title: 'base_form',
            role:['user']
          },
          component: () => import( /* webpackChunkName: "BaseForm" */ '@views/form/base-form/base-form.vue'),
        },
        {
          path: 'substep-form',
          name: 'substep_form',
          meta: {
            title: 'substep_form',
            role:['user']
          },
          component: () => import( /* webpackChunkName: "SubstepForm" */ '@views/form/substep-form/substep-form.vue'),
        }
      ]
    },
    {
      path:'/charts',
      name: 'charts',
      redirect: {
        name: 'v-charts'
      },
      meta: {
         title: 'charts',
         role:['user']
       },
      component: () => import( /* webpackChunkName: "Charts" */ '@views/charts/index.vue'),
      children:[
        {
          path:'v-charts',
          name: 'v_charts',
          meta: {
            title: 'v_charts',
            role:['user']
          },
          component: () => import( /* webpackChunkName: "VCharts" */ '@views/charts/v-charts/v-charts.vue'),
        },
        {
          path:'apex-charts',
          name: 'apex_charts',
          meta: {
            title:'apex_charts',
            role:['user']
          },
          component: () => import( /* webpackChunkName: "ApexCharts" */ '@views/charts/apex-charts/apex-charts.vue'),
        },
        {
           path:'fusion-chart-map',
           name:'fusion_chart_map',
           meta: {
            title:'fusion_chart_map',
            role:['user']
          },
          component: () => import( /* webpackChunkName: "FusionChartMap" */ '@views/charts/fusion-chart-map/fusion-chart-map.vue'),
        },
        {
          path:'baidu-maps',
          name:'baidu_maps',
          meta: {
           title:'baidu_maps',
           role:['user']
         },
         component: () => import( /* webpackChunkName: "BaiduMaps" */ '@views/charts/baidu-maps/baidu-maps.vue'),
       }
      ]
    },
    {
      path:'/editor',
      name:'editor',
      redirect: {
        name: 'quill_editor'
      },
      meta: {
         title: 'editor',
         role:['user']
       },
      component: () => import( /* webpackChunkName: "Editor" */ '@views/editor/index.vue'),
      children:[
          {
            path:'quill-editor',
            name: 'quill_editor',
            meta: {
              title: 'quill_editor',
              role:['user']
            },
            component: () => import( /* webpackChunkName: "QuillEditor" */ '@views/editor/quill-editor/quill-editor.vue'),
          },
          {
            path:'markdown',
            name: 'markdown',
            meta: {
              title: 'markdown',
              role:['user']
            },
            component: () => import( /* webpackChunkName: "Markdown" */ '@views/editor/markdown/markdown.vue'),
          },
      ]
    },
    {
      path:'/abnormal-page',
      name:'abnormal_page',
      redirect: {
        name: '404'
      },
      meta: {
         title: 'abnormal_page',
         role:['user']
      },
      component: () => import( /* webpackChunkName: "AbnormalPage" */ '@views/abnormal-page/index.vue'),
      children:[
         {
            path:'404',
            name: '404',
            meta: {
              title: '404',
              role:['user']
            },
            component: () => import( /* webpackChunkName: "404" */ '@views/abnormal-page/not-found/not-found.vue')
         }
      ]
    },
    {
      path: '/404',
      name: 'not_found',
      meta: {
        title: 'not_found'
      },
      component: NotFound
    },
    { path: '*', name:'404', redirect: '/404' }
   ],
  },
]
//默认路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: Login
  }
]
const resolveOriginal = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return resolveOriginal.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
  //滚动条
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

//路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  //校验token是否存在
  let token=getSession('token');
  let paths = ['/login', '/register'];
  if(token){
     NProgress.start()
    //判断用户信息是否读取成功 删选路由访问菜单
      if (to.path === '/login') {
        next({ path: '/' });
        NProgress.done()
      }else{
        if(!store.state.authModule.roles.length){
          //获取用户信息
          store.dispatch('getUserInfo').then(async res=>{
            let role=res;
            store.dispatch('getNewRoute',role).then(res=>{
              //通过权限添加路由
              router.addRoutes(res);
              next({...to,replace:true});
            });
           }).catch(async err=>{
             //获取失败后退出登录 清除登录token
             await store.dispatch('resetUser')
             next('/login')
             NProgress.done()
         })
        }else{
          return next()
        }
      }
  }else{
    if(paths.includes(to.path)){
      next()
    }else{
      next('/login')
      NProgress.done()
    }
  }
})
router.afterEach((to, from) => {
  NProgress.done();
  document.title = getPageTitle(to.meta.title)
})

export default router
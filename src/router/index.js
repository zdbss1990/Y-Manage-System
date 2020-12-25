/*
 * @Author: zhangyao
 * @Date: 2020-11-16 10:22:39
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-25 11:20:56
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
        role:['admin']
      },
      component: () => import( /* webpackChunkName: "Form" */ '@views/form/index.vue'),
      children: [{
          path: 'base-form',
          name: 'base_form',
          meta: {
            title: 'base_form',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "BaseForm" */ '@views/form/base-form/base-form.vue'),
        },
        {
          path: 'substep-form',
          name: 'substep_form',
          meta: {
            title: 'substep_form',
            role:['admin']
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
         role:['admin']
       },
      component: () => import( /* webpackChunkName: "Charts" */ '@views/charts/index.vue'),
      children:[
        {
          path:'v-charts',
          name: 'v_charts',
          meta: {
            title: 'v_charts',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "VCharts" */ '@views/charts/v-charts/v-charts.vue'),
        },
        {
          path:'apex-charts',
          name: 'apex_charts',
          meta: {
            title:'apex_charts',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "ApexCharts" */ '@views/charts/apex-charts/apex-charts.vue'),
        },
        {
           path:'fusion-chart-map',
           name:'fusion_chart_map',
           meta: {
            title:'fusion_chart_map',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "FusionChartMap" */ '@views/charts/fusion-chart-map/fusion-chart-map.vue'),
        },
        {
          path:'baidu-maps',
          name:'baidu_maps',
          meta: {
           title:'baidu_maps',
           role:['admin']
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
         role:['admin']
       },
      component: () => import( /* webpackChunkName: "Editor" */ '@views/editor/index.vue'),
      children:[
          {
            path:'quill-editor',
            name: 'quill_editor',
            meta: {
              title: 'quill_editor',
              role:['admin']
            },
            component: () => import( /* webpackChunkName: "QuillEditor" */ '@views/editor/quill-editor/quill-editor.vue'),
          },
          {
            path:'markdown',
            name: 'markdown',
            meta: {
              title: 'markdown',
              role:['admin']
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
         role:['admin']
      },
      component: () => import( /* webpackChunkName: "AbnormalPage" */ '@views/abnormal-page/index.vue'),
      children:[
         {
            path:'404',
            name: '404',
            meta: {
              title: '404',
              role:['admin']
            },
            component: () => import( /* webpackChunkName: "404" */ '@views/abnormal-page/not-found/not-found.vue')
         }
      ]
    },
    {
      path:'/module',
      name:'module',
      redirect:{
        name:'module'
      },
      meta:{
         title:'module',
         role:['admin']
      },
      component: () => import( /* webpackChunkName: "Module" */ '@views/module/index.vue'),
      children:[
        {
          path:'video',
          name: 'video',
          meta: {
            title: 'video',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "Video" */ '@views/module/video/video.vue')
        },
        {
          path:'upload',
          name: 'upload',
          meta: {
            title: 'upload',
            role:['admin']
          },
          component: () => import( /* webpackChunkName: "Upload" */ '@views/module/upload/upload.vue')
        }
      ]
    },
    {
      path:'/user-management',
      name:'user_management',
      redirect:{
        name:'personal_center'
      },
      meta:{
         title:'user_management',
         role:['admin','user']
      },
      component: () => import( /* webpackChunkName: "UserManagement" */ '@views/user-management/index.vue'),
      children:[
        {
          path:'personal-center',
          name:'personal_center',
          meta: {
            title: 'personal_center',
            role:['admin','user']
          },
          component: () => import( /* webpackChunkName: "PersonalCenter" */ '@views/user-management/personal-center/personal-center.vue')
        },
        {
          path:'personal-setting',
          name:'personal_setting',
          meta: {
            title: 'personal_setting',
            role:['admin','user']
          },
          component: () => import( /* webpackChunkName: "PersonalSetting" */ '@views/user-management/personal-setting/personal-setting.vue')
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
    { path: '*', name:'404', redirect: '/404'}
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
              router.matcher = new VueRouter({
                base: '',
                mode: 'history',
                scrollBehavior: () => ({
                  y: 0,
                }),
                routes: constantRoutes,
              }).matcher
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
      paths.includes(to.path) ? next():next({path:'/login',replace:true})
      NProgress.done()
  }
})
router.afterEach((to, from) => {
  NProgress.done();
  document.title = getPageTitle(to.meta.title)
})

export default router
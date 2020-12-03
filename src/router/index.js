/*
 * @Author: zhangyao
 * @Date: 2020-11-16 10:22:39
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-03 10:38:23
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import Layout from '@/views/layout/layout/layout.vue';
import getPageTitle from '@utils/title/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.use(VueRouter)
//userRouter
//adminRouter
const routes = [{
  path: '/',
  redirect: {name:'home'},
  component:Layout,
  children: [
    {
      path:'home',
      name: 'home',
      redirect: {name:'dashboard'},
      meta:{
        title:'home'
      },
      component: () => import( /* webpackChunkName: "Home" */ '@views/home/index.vue'),
      children:[
        {
          path: 'dashboard',
          name: 'dashboard',
          meta:{
            title:'dashboard'
          },
          component: () => import( /* webpackChunkName: "Dashboard" */ '@views/home/dashboard/dashboard.vue')
          },
      ]
    },
    {
      path:'table',
      name: 'table',
      redirect: {name:'basic-tables'},
      meta:{
        title:'table'
      },
      component: () => import( /* webpackChunkName: "Table" */ '@views/table/index.vue'),
      children:[
        {
          path: 'basic-tables',
          name: 'basic_tables',
          meta:{
            title:'basic_tables'
          },
          component: () => import( /* webpackChunkName: "BasicTables" */ '@views/table/basic-tables/basic-tables.vue')
        },
      ]
     }
   ]
  },
  
]

const resolveOriginal = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return resolveOriginal.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
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
router.beforeEach((to,from,next)=>{
  NProgress.start();
  // let token=getSession('token');
  // let paths=['/login','/register'];
  // if(!token&&!paths.includes(to.path)){
  //  return next('/login');
  // }
   next();
})
router.afterEach((to,from)=>{
  NProgress.done();
  document.title=getPageTitle(to.meta.title)
})

export default router
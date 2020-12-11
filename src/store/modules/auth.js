/*
 * @Author: zhangyao
 * @Date: 2020-12-08 10:59:10
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-10 16:51:02
 */
import {
    getSession,
    setSession
} from '@utils/auth/session.js';
import Service from '@/api/';
import notify from '@utils/notify/notify.js';
import i18n from '@utils/i18n/';
//引入路由
import {authRoutes,constantRoutes} from '@/router/'
import menuList from '@assets/data/sidebar.js';
import _ from 'loadsh'

//遍历菜单
const getTreeList=(routes,menu)=>{
    return menu.filter(v=>{
        if(routes.includes(v.name)){
           if(v.children){
              v.children=getTreeList(routes,v.children) 
           }
           return true
        }
     })
}

const handelRoute=(routes,arr)=>{
    routes.forEach(route => {
         arr.push(route.name)
         if(route.children){
             handelRoute(route.children,arr)
         }
    });
}


const hasPermission=(roles,route)=>{
   if(route.meta&&route.meta.role){
       return roles.some(role=> route.meta.role.includes(role))
   }else{
       return true
   }
}
const formatList=(authRoutes,auths)=>{
      return authRoutes.filter(v=>{
         if(hasPermission(auths,v)){
            if(v.children && v.children.length){
                v.children=formatList(v.children,auths) 
            }
            return true
         }
      })
}

const authModule = {
    state: {
        token: getSession('token'),
        user: JSON.parse(getSession('user')) || Object.create(null),
        roles:[],
        routes:[],
        addRoutes:[],
        menus:_.cloneDeep(menuList),
        routeArr:[]
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            setSession('token', state.token)
        },
        SET_USER_INFO(state, user_info) {
            state.user = user_info
            setSession('user',JSON.stringify(state.user))
        },
        SET_MENULIST(state,menu){
            state.menus=menu
        },
        SET_USER_TYPE(state,type){
             state.roles=type
            // state.role=type === 1 ? 'admin':'user';
        },
        SET_ROUTERS: (state, routes) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
         }
    },
    actions: {
       login({ commit }, data) {
           return new Promise((resolve,reject)=>{
            Service.userService.login({
                type: 'post',
                data: {
                    ...data
                },
                success: (res) => {
                    if (res.success) {
                        let token = res.token.access_token;
                        let user_info = res.user
                        commit('SET_TOKEN', token)
                        commit('SET_USER_INFO', user_info)
                        notify({
                            title: i18n.t('msg.tips'),
                            type: 'success',
                            message: i18n.t('msg.login_success')
                        })
                        resolve()
                    } else {
                        notify({
                            title: i18n.t('msg.tips'),
                            type: 'error',
                            message: i18n.t('msg.login_fail')
                        })
                        reject()
                    }
                }
              })
           })
        },
        //退出登录
        loginOut({commit,dispatch}){
            return new Promise((resolve,reject)=>{
                Service.userService.loginOut({
                    type:'post',
                    success:(res)=>{
                       if(res){
                        notify({
                            title: i18n.t('msg.tips'),
                            type: 'success',
                            message: i18n.t('msg.exit_success')
                        })
                         sessionStorage.clear()
                         resolve()
                       }
                    }
                })
            })
        },
        //其获取用户信息
        getUserInfo({commit,state}){
            //   commit('SET_USER_TYPE',state.user.type)
              commit('SET_USER_TYPE',['user','admin'])
              return ['user','admin']
            //   return state.user.type
        },
        async getNewRoute({commit,state},auths){
              let needRoutes=formatList(authRoutes,auths) || [];
              handelRoute(needRoutes[0].children,state.routeArr);
              let menu=getTreeList(state.routeArr,state.menus);
              //设置菜单
              commit('SET_MENULIST',menu)
              //设置路由
              commit('SET_ROUTERS', needRoutes);
              return needRoutes
        },
        //清除信息
        resetUser({commit}){
            return new Promise((resolve)=>{
                commit('SET_TOKEN', '')
                commit('SET_USER_INFO', Object.create(null))
                commit('SET_USER_TYPE','')
            })
        }
    }
}

export default authModule;
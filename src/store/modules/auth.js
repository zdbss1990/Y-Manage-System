/*
 * @Author: zhangyao
 * @Date: 2020-12-08 10:59:10
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-01-18 15:49:29
 */
import {
    getSession,
    setSession
} from '@utils/auth/session.js';
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
        userAvatar:getSession('userAvatar') || require('@assets/image/1.jpg'),
        token: getSession('token'),
        user: JSON.parse(getSession('user')) || Object.create(null),
        roles:[],
        routes:[],
        addRoutes:[],
        menus:[],
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
            state.roles=type;
            // state.role=type === 1 ? 'admin':'user';
        },
        SET_ROUTERS: (state, routes) => {
            state.addRoutes =routes
            state.routes = constantRoutes.concat(routes);
        },
        SET_USER_AVATAR:(state,avatar)=>{
             state.userAvatar=avatar;
        },
        SET_USER_MSG:(state,user)=>{
            state.user.type=Array.of(user.power)
            state.user=Object.assign(state.user,user);
            setSession('user',JSON.stringify(state.user))
        }
    },
    actions: {
       login({ commit,state }, data) {
           return new Promise((resolve,reject)=>{
               if(data.username==='admin' && data.password==='123456'){
                    let token='xsscqaasWQS1SSS12';
                    let user_info = {name:'admin',true_name:'张嘚吧',type:state.roles.length ?state.roles:['admin'],email:'www.zdb1990@163.com',introduction:'开开心心又一天~'};
                    commit('SET_TOKEN', token)
                    commit('SET_USER_INFO', user_info)
                    notify({
                        title: i18n.t('msg.tips'),
                        type: 'success',
                        message: i18n.t('msg.login_success')
                    })
                    resolve()
               }else{
                    notify({
                        title: i18n.t('msg.tips'),
                        type: 'error',
                        message: i18n.t('msg.login_fail')
                    })
                    reject()
               }
           })
        },
        //退出登录
        loginOut({commit}){
            return new Promise((resolve,reject)=>{
                notify({
                    title: i18n.t('msg.tips'),
                    type: 'success',
                    message: i18n.t('msg.exit_success')
                })
                sessionStorage.clear();
                resolve()
            })
        },
        //其获取用户信息
        getUserInfo({commit,state}){
              commit('SET_USER_TYPE',state.user.type)
              return state.user.type
        },
        async getNewRoute({commit,state},auths){
              let needRoutes=formatList(_.cloneDeep(authRoutes),auths) || [];
              handelRoute(needRoutes[0].children,state.routeArr);
              let menu=getTreeList(state.routeArr,_.cloneDeep(menuList));
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
                commit('SET_USER_TYPE',[])
            })
        },
        //设置用户头像
        setUserAvatar({commit},avatar){
            commit('SET_USER_AVATAR',avatar)
        },
        //更新用户基本信息
        setUserMsg({commit,dispatch,state},user){
            return new Promise((resolve,reject)=>{
                notify({
                    title: i18n.t('msg.tips'),
                    type: 'info',
                    message: '更新中'
                })
                setTimeout(()=>{
                    commit('SET_USER_MSG',user)
                    resolve()
                },1000)
               
            })
        },
    }
}

export default authModule;
/*
 * @Author: zhangyao
 * @Date: 2020-11-18 10:33:35
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-08 11:07:37
 */
import axios from 'axios';
import headers from './headers';
//引入notify
import notify from '@utils/notify/notify.js';
import i18n from '@utils/i18n/index.js';
const server=axios.create({
    baseURL:`${process.env.VUE_APP_BASE_API}/master/v1/identity`,
    timeout:3000,
})
//请求拦截 添加全局loading
server.interceptors.request.use(config=>{
    config.headers=headers();
    return config
},err=>{
    return Promise.reject(err)
})
//响应拦截
server.interceptors.response.use(response=>{
    let {status}=response;
    return {...response.data,status}
},(err)=>{
    if(err.response && err.response.status===401 &&!(router.currentRoute.fullPath).includes('/login')){
       router.replace({
           path:'/login',
           query:{redirect:router.currentRoute.fullPath}
       })
    }
    if(err.message.includes('Network Error')){
        notify({
            type:'error',
            message:`${i18n.t('msg.NetworkError')}`,
            title:`${i18n.t(`msg.Tips`)}`
        })
    }
    if(err.message.includes('timeout')){
        notify({
            type:'error',
            message:`${i18n.t('msg.Timeout')}`,
            title:`${i18n.t(`msg.Tips`)}`
        })
    }
    let {data,status}=err.response
    return Promise.reject({data,status})
})
export default server;


/*
 * @Author: zhangyao
 * @Date: 2020-11-18 14:48:50
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-01-18 14:53:22
 */
import server from './methods';
//引入notify
import notify from '@utils/notify/notify.js';
import i18n from '@utils/i18n/index.js';
class Service{
    constructor(){
        this.nowHandle=null
    }
    parseRouter(server_name,module){
        let msg=this[server_name]={};
        Object.keys(module).forEach(item=>{
            msg[item]=this.sendMsg.bind(this,server_name,item,module[item])
        })
    }
    bindName(commponent){
        this.nowHandle=commponent
        return this
    }
    sendMsg(moduleName,name,url,config){
       let configs=config || {};
       let type=config.type || 'get';
       let data=config.data || {};
       let loadingName=config.loadingName || '';
       let self=this;
       //请求前
       let before=()=>{
           if(loadingName) this.nowHandle[loadingName]=true
           self[moduleName][name].state=true
           return null
       }
       //默认请求处理
       let defauleFn=function(msg){
           self[moduleName][name].state=false;
           return msg
       }

       let defaultErrorFn=(err)=>{
           self[moduleName][name].state=false;
           if(err.data){
              notify({
                type:'error',
                message:err.data.message,
                title:`${i18n.t(`msg.tips`)}`
              })
              return err
           }
       }
       //成功
       let success=configs.success || defauleFn;
       //失败
       let error=configs.error || defaultErrorFn;
       let callback=(res)=>{
          if(loadingName) this.nowHandle[loadingName]=false
          self[moduleName][name].state=false;
          success(res)
       }
       let errCallBack=(err)=>{
          if(loadingName) this.nowHandle[loadingName]=false
          self[moduleName][name].state=false;
          error(err)
       }
       const state=(type)=>{
          let req=type==='get'? {params:data}:type==='delete'?{data:data}:data;
          return server[type](url,req).then(before()).then(callback).catch(errCallBack)
       }
       if(!self[moduleName][name].state){
            self[moduleName][name].state=true;
            state(type)
       }
    }
}

export default new Service()
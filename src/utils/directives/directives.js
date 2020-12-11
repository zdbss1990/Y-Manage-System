/*
 * @Author: zhangyao
 * @Date: 2020-12-10 10:01:22
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-10 10:34:57
 */
import store from '@store/'
const hasAction=(action)=>{
    return store.state.authModule.roles.includes(action)
}
const directives={}
directives.install=(Vue)=>{
    Vue.directive('has',{
        inserted(el,binding){
            const actionName=binding.value
            if(actionName){
                //修改dom元素禁用可用
                //  if(!hasAction(actionName)){
                //     el.setAttribute('disabled',true)
                //     let className= el.getAttribute('class');
                //     el.setAttribute('class',`${className} is-disabled`)
                //  }
                //移除dom元素
                if(!hasAction(actionName)){
                    el.parentNode && el.parentNode.removeChild(el)
                }
            }
        }
    })
}

export default directives
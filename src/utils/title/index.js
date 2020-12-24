/*
 * @Author: zhangyao
 * @Date: 2020-11-18 13:58:01
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-24 14:02:29
 */
import i18n from '@/utils/i18n'
const getPageTitle=(title)=>{
  let key=i18n.t(`route.${title}`);
  if(key){
      let appName='Y Manage System'
      return `${appName} - ${key}`
  }
  return `Y Manage System`
}

export default getPageTitle;
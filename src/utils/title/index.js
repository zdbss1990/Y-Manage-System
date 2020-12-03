import i18n from '@/utils/i18n'
const getPageTitle=(title)=>{
  let key=i18n.t(`route.${title}`);
  if(key){
      let appName=i18n.t('route.uxsino')
      return `${appName} - ${key}`
  }
  return `${i18n.t('route.uxsino')}`
}

export default getPageTitle;
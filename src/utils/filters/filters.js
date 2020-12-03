import i18n from '@/utils/i18n';
import moment from 'moment';
const filters={}
filters.install=(Vue)=>{
    Vue.filter('statusFilter',(value)=>{
        if(!value){
            return i18n.t('status.no_time')
        }
        return i18n.t(`status.${value}`)
    })
    Vue.filter('humanLimitSize',(bytes, si = false) => {
        let thresh = si ? 1000 : 1024;
        if (Math.abs(bytes) < thresh) {
            return bytes + 'B'
        }
        let units = si ? ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let u = -1
        do {
            bytes /= thresh
             ++u
        } while (Math.abs(bytes) >= thresh && u < units.length - 1)
        return (Math.ceil(bytes*100)/100)+units[u]
    })
    Vue.filter('dateFormat',(value, pattern = 'YYYY-MM-DD HH:mm:ss') => {
        if (value) {
            return moment(value).format(pattern);
        }
        return i18n.t('status.no_time')
    })
    
}

export default filters
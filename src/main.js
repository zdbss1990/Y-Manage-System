/*
 * @Author: zhangyao
 * @Date: 2020-11-16 10:22:39
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-08 10:50:57
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@assets/icon/iconfont.css';
import VueCustomScrollbar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';
//中英文适配
import i18n from '@utils/i18n/index.js';
//引入notify
import notifyMsg from '@utils/notify/notify.js';
import '@/components';
//filters
import filters from '@utils/filters/filters.js';
//配置v-charts
import VCharts from 'v-charts';
import message from '@utils/message/message.js';
import _ from 'lodash';
import Sparkline from 'vue-sparklines';
import VueAnimateNumber from 'vue-animate-number'
Vue.component('vue-custom-scrollbar', VueCustomScrollbar)
Vue.config.productionTip = false
Vue.prototype.$_notify=notifyMsg;
Vue.prototype.$_message=message
Vue.prototype._=_
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.use(VCharts)
Vue.use(filters)
Vue.use(Sparkline)
Vue.use(VueAnimateNumber)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

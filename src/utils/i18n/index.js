import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _zhCN from './zh.js';
import _en from './en.js';
Vue.use(VueI18n);
let lang = sessionStorage.getItem('language');
const i18n = new VueI18n({
    locale: lang || 'zh_CN',
    messages: {
        'zh_CN': _zhCN,
        'en': _en
    }
})

export default i18n;
/*
 * @Author: zhangyao
 * @Date: 2020-11-17 14:13:46
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-24 18:01:51
 */
import {
    getSession,
    setSession
} from '@utils/auth/session.js';
const layoutModule = {
    state: {
        isCollapse: getSession('isCollapse')==='false' ? false:true,
        show: false,
        drawer:false,
        language: getSession('language') || 'zh_CN',
        menuBg:'#2d353c',
        fold:true,
    },
    mutations: {
        CHANGE_MENU_STATE(state, show) {
            state.show = show
        },
        CHANGE_COLLAPSE(state, collapse) {
            state.isCollapse = collapse
        },
        SET_LANGUAGE(state,language){
            state.language=language
        },
        OPEN_SETTING:(state,flag)=>{
            state.drawer=flag
        },
        SET_MENU_BG_COLOR:(state,color)=>{
            state.menuBg=color
        },
        SET_FOLD_BTN:(state,show)=>{
            state.fold=show
        }
    },
    //点开面包屑
    actions: {
        changeMenuState: ({
            commit
        }, show) => {
            commit('CHANGE_MENU_STATE', show)
        },
        changeCollapse({
            commit
        }, collapse) {
            commit('CHANGE_COLLAPSE', collapse)
            setSession('isCollapse',collapse)
        },
        setLanguage({
            commit
        }, language) {
            commit('SET_LANGUAGE', language);
            setSession('language',language)
        },
          //打开设置
        openSettings({commit},flag){
            commit('OPEN_SETTING',flag)
        },
        //设置菜单颜色
        setMenuBgColor({commit},color){
            commit('SET_MENU_BG_COLOR',color)
        },
        //设置折叠按钮是否显示
        setFoldBtn({commit},show){
            commit('SET_FOLD_BTN',show)
        }
    }
}
export default layoutModule;
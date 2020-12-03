/*
 * @Author: zhangyao
 * @Date: 2020-11-17 14:13:46
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-01 14:31:54
 */
import {
    getSession,
    setSession
} from '@utils/auth/session.js';
const layoutModule = {
    state: {
        isCollapse: getSession('isCollapse')==='false' ? false:true,
        show: false,
        language: getSession('language') || 'zh_CN'
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
        }
    }
}
export default layoutModule;
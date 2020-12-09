/*
 * @Author: zhangyao
 * @Date: 2020-11-16 10:22:39
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-08 11:04:01
 */
import Vue from 'vue'
import Vuex from 'vuex'
import layoutModule from '@store/modules/layout.js'
import authModule from '@store/modules/auth.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layoutModule,
    authModule
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import layoutModule from '@store/modules/layout.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layoutModule
  }
})

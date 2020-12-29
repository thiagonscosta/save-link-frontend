import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
import folder from './modules/folder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    article,
    folder
  }
})

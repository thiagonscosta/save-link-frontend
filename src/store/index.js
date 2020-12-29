import Vue from 'vue'
import Vuex from 'vuex'
import articleStore from './modules/articleStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    articleStore: articleStore,
  },
});

import Vue from 'vue'
import Vuex from 'vuex'
import articleStore from "./modules/articleStore";
import folderStore from './modules/folderStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    articleStore,
    folderStore,
  },
});

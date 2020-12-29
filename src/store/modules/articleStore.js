import articleService from '../../services/articleService'

const articleStore = {
  namespaced: true,
  state: {
    all: [],
  },
  actions: {
    getAll({ commit }) {
      articleService.getAll()
        .then(resp => {
          commit('setAll', resp.data.articles)
        })
    }
  },
  mutations: {
    setAll(state, all) {
      state.all = all
    }
  },
}

export default articleStore;
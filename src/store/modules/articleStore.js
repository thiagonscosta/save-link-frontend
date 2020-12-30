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
    },
    getByFolder({ commit }, folderId) {
      articleService.getByFolder(folderId)
        .then(data => data.articles)
        .then(articles => commit('setAll', articles))
        .catch(err => console.log(err));
    }
  },
  mutations: {
    setAll(state, all) {
      state.all = all
    }
  },
}

export default articleStore;
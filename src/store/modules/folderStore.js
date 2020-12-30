import folderService from '../../services/folderService';

const state = () => ({
  all: null
});

const getters = {};
const actions = {
  getFolders({ commit }) {
    folderService
      .getall()
      .then((res) => res.folders)
      .then((folders) => commit("setFolders", folders))
      .catch((err) => console.log(err)); 
  }
};
const mutations = {
  setFolders(state, folders) {
    state.all = folders;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
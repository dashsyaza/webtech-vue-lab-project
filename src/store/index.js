import { createStore } from 'vuex';

const store = createStore({
  state: {
    profile: {
      name: '',
      courseYear: '',
      matricNo: '',
      address: ''
    },
    searchQuery: ''
  },
  mutations: {
    updateProfile(state, profile) {
      state.profile = profile;
    },
    resetProfile(state) {
      state.profile = {
        name: '',
        courseYear: '',
        matricNo: '',
        address: ''
      };
    },
    updateSearch(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    saveProfile({ commit }, profile) {
      commit('updateProfile', profile);
    },
    resetProfile({ commit }) {
      commit('resetProfile');
    },
    updateSearch({ commit }, query) {
      commit('updateSearch', query);
    }
  },
  getters: {
    profile: state => state.profile,
    searchQuery: state => state.searchQuery
  }
});

export default store;

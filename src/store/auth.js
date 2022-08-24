import AuthApi from "../api/auth";

export default {
  namespaced: true,
  state: {
    user: "1",
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    user: (state) => state.user,
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
  },
  actions: {
    async login({ commit }, { username, password }) {
      const response = AuthApi.login(username, password);
      console.log(response);
      commit("SET_USER", response.data);
    },
  },
};

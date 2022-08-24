import AuthApi from "../api/auth";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    user: (state) => state.user,
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await AuthApi.login(email, password);
      // console.log(response.data);
      // throw new Error("Not implemented");
      commit("SET_USER", response.data);
    },
  },
};

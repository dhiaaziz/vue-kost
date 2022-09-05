import AuthApi from "../api/auth";

export default {
  namespaced: true,
  state: {
    user: null,
    token: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
    token: (state) => state.token,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_TOKEN: (state, value) => {
      state.token = value;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await AuthApi.login(email, password);
      commit("SET_TOKEN", response.data.token);
      delete response.data.token;
      commit("SET_USER", response.data);
    },
    logout({ commit }) {
      // console.log("logout guys");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
  },
};

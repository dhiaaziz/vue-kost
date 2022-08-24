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
    async login({ commit }, { email, password }) {
      console.log(email, password);
      const response = await AuthApi.login(email, password);
      console.log(response.data);
      // throw new Error("Not implemented");
      commit("SET_USER", response.data);
    },
  },
};

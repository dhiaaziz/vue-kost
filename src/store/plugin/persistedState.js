import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";

// const ls = new SecureLS({ isCompression: false });
const dataState = createPersistedState({
  key: "dataKos",
  paths: ["auth"],
  storage: window.localStorage,
});

export default dataState;

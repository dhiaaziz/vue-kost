import store from "../store";

export default function authHeader() {
  const token = store.getters["auth/token"];
  const user = store.getters["auth/user"];
  if (token && user) {
    // console.log("token", token);
    return {
      token,
    };
    // return { Authorization: "Bearer " + token }; // for Spring Boot back-end
  }
  return {};
}

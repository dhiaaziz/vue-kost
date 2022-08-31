import store from "../store";

export default async function authHeader() {
  // return {
  const token = await store.getters["auth/token"];
  const user = await store.getters["auth/user"];
  // console.log(token)
  if (token && user) {
    return { Authorization: "Bearer " + token }; // for Spring Boot back-end
  }
  return {};
}

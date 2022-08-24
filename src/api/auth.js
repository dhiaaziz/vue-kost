import axios from "axios";

const login = async (email, password) => {
  const response = await axios.post("/user/login", {
    email,
    password,
  });
  return response.data;
};

export default {
  login,
};

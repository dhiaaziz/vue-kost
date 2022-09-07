import axios from "axios";
import authHeader from "./_authHeader";

const getAll = async () => {
  try {
    const response = await axios.get("/user/show-user", {
      headers: authHeader(),
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const response = await axios.get(`/user/show-user?user_id=${id}`, {
      headers: authHeader(),
    });
    console.log(response.data.data[0]);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  getById,
};

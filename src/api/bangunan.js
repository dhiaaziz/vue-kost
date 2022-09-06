import axios from "axios";
import authHeader from "./_authHeader";

const getAll = async () => {
  try {
    const response = await axios.get("/build/show-build", {
      headers: authHeader(),
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const create = async (data) => {
  console.log(authHeader());
  try {
    const response = await axios.post("/build/create-build", {
      headers: authHeader(),
      data: {
        ...data,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  create,
};

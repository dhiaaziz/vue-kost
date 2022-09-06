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
  try {
    const response = await axios.post("/build/create-build", data, {
      headers: authHeader(),
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id) => {
  try {
    const response = await axios.delete("/build/delete-build/" + id, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  create,
  destroy,
};

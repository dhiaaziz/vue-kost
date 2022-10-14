import axios from "axios";
import authHeader from "./_authHeader";

const getAll = async (search, page, limit) => {
  try {
    let url = "/build/show-build?";
    // url = url + "?page=" + page + "&limit=" + limit;
    // url = search ? url + `&name=${search}` : url;
    const response = await axios.get(url, {
      headers: authHeader(),
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const response = await axios.get("/build/show-build?build_id=" + id, {
      headers: authHeader(),
    });
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
  getById,
  create,
  destroy,
};

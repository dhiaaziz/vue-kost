import axios from "axios";
import authHeader from "./_authHeader";

const getAll = async (search, page, limit) => {
  try {
    let url = "/package/show-package";
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
    const response = await axios.get("/package/show-package?package_id=" + id, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const create = async (data) => {
  try {
    const response = await axios.post("/package/create-package", data, {
      headers: authHeader(),
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, data) => {
  try {
    const response = await axios.put("/package/update-package/" + id, data, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const destroy = async (id) => {
  try {
    const response = await axios.delete("/package/delete-package/" + id, {
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
  update,
  destroy,
};

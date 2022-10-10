import axios from "axios";
import authHeader from "./_authHeader";

const getAll = async () => {
  try {
    const response = await axios.get("/user/show-user", {
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
    // const response = await axios.get(`/user/show-user?user_id=${id}`, {
    //   headers: authHeader(),
    // });

    // const response = await axios.get(`/user/show-detail-user/${id}`, {
    const response = await axios.get(`/user/show-user?user_id=${id}`, {
      headers: authHeader(),
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, data) => {
  try {
    const headers = authHeader();
    headers["Content-Type"] = "multipart/form-data";
    // console.log(headers);
    // console.log(data);
    const response = await axios.put(`/user/update-user/${id}`, data, {
      headers: headers,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  getById,
  update,
};

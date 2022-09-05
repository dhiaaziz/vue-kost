import axios from "axios";
import authHeader from "./_authHeader";

const build_id = 1;

const getAll = async () => {
  // console.log(authHeader());
  try {
    const response = await axios.get("/room/show-room", {
      headers: authHeader(),
      data: {
        build_id: build_id,
      },
    });
    // console.log(response.data.data);
    return response.data.data[0].rooms;
  } catch (error) {
    console.log(error);
  }
};

const create = async (data) => {
  try {
    const response = await axios.post("/room/create-room", {
      headers: authHeader(),
      data: {
        build_id: build_id,
        ...data,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id) => {
  try {
    const response = await axios.delete("/room/delete-room/" + id, {
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

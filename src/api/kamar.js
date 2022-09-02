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
    // console.log(response);
    return response.data.data["kos jaya"];
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

export default {
  getAll,
  create,
};

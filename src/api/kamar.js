import axios from "axios";
import authHeader from "./_authHeader";

const build_id = 1;

const getAll = async (search) => {
  // console.log(authHeader());
  console.log(search);
  let url = "/room/show-room";
  url = search ? url + `?name=${search}` : url;
  console.log("url: " + url);
  try {
    const response = await axios.get(url, {
      headers: authHeader(),
      data: {
        build_id: build_id,
      },
    });
    console.log(response.data.data);
    let allRooms = [];
    //push rooms from all bangunan
    response.data.data.forEach((room) => {
      allRooms = [...allRooms, ...room.rooms];
    });
    // console.log(allRooms);
    // return response.data.data[0].rooms;
    return allRooms;
  } catch (error) {
    console.log(error);
  }
};

const create = async (data) => {
  try {
    console.log(data);
    const response = await axios.post("/room/create-room", data, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const edit = async (id, data) => {
  try {
    const response = await axios.put("/room/update-room/" + id, data, {
      headers: authHeader(),
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
  edit,
  destroy,
};

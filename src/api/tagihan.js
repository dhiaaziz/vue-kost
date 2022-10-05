import axios from "axios";
import authHeader from "./_authHeader";

// const build_id = 1;

const getAll = async (search, page, limit) => {
  // console.log(authHeader());
  // console.log(search);
  // console.log('masuk');
  
  try {
    // if(page < 1) page = 1;
    // if (limit < 1) limit = 10;
    
    let url = "/history/show-history";
    url = url + "?page=" + page + "&limit=" + limit;
    url = search ? url + `&name=${search}` : url;
    // console.log("url: " + url);
    const response = await axios.get(url, {
      headers: authHeader(),
      // data: {
      //   build_id: build_id,
      // },
    });

    return response.data.data
  } catch (error) {
    // console.log(error);
    // console.log("error")
  }
};

const create = async (data) => {
  try {
    console.log(data);
    const response = await axios.post("/history/create-history", data, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const edit = async (id, data) => {
  try {
    const response = await axios.put("/history/update-history/" + id, data, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id) => {
  try {
    const response = await axios.delete("/history/delete-history/" + id, {
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

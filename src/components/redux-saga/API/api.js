import axios from "axios";
const queryString = require("query-string");

export const API_ENDPOINT = "http://localhost:3000/";
export const url = "tasks";

// GET - lay data ve
export const getListTask = (param = {}) => {
  let queryParam = "";
  if (Object.keys(param).length > 0) {
    queryParam = `?${queryString.stringify(param)}`;
    console.log(queryParam);
  }

  return axios.get(`${API_ENDPOINT}${url}${queryParam}`);
};

// POST - tao data moi
export const postTask = (task) => {
  return axios.post(`${API_ENDPOINT}${url}`, task);
};

// PUT - cap nhat data
export const updateTask = (task, id) => {
  return axios.put(`${API_ENDPOINT}${url}/${id}`, task);
};

// DELETE - xoa data
export const removeTask = (id) => {
  return axios.delete(`${API_ENDPOINT}${url}/${id}`);
};

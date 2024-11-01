import axios from "axios";

const username = "admin";
const password = "123456";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
  auth: {
    username: username,
    password: password,
  },
});

export const api = async (method, endpoint, payload) => {
  try {
    const response = await axiosClient(endpoint, {
      method: method,
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

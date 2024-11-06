import { api } from "./api";
// import { axiosClient } from "./api";

let getListCategory = async () => {
  const url = "/categorys";
  return api("GET", url, null);
  // const response = await axiosClient.get(url);
  // return response.data;
};

export { getListCategory };

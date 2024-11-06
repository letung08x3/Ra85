import { api } from "./api";
// import { axiosClient } from "./api";

let getListManufacturer = async () => {
  const url = "/manufacturers";
  // const response = await axiosClient.get(url);
  // return response.data;
  return api("GET", url, null);
};
export { getListManufacturer };

import { api } from "./api";

let getListCategory = () => {
  return api("GET", "/categorys", null);
};

export { getListCategory };

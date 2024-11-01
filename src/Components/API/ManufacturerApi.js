import { api } from "./api";

let getListManufacturer = () => {
  return api("GET", "/manufacturers", null);
};
export { getListManufacturer };

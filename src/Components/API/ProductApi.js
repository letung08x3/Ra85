import { api } from "./api";

let getListProduct = () => {
  return api("GET", "products/", null);
};

let createNewProductAPI = (newProduct) => {
  return api("POST", "products/", newProduct);
};

let getProductById = (id) => {
  let url = `products/${id}`;
  return api("GET", url, null);
};

let deleteProductById = (id) => {
  let url = `products/${id}`;
  return api("DELETE", url, null);
};

let updateProductAPI = (productUpdate) => {
  let url = `products/${productUpdate.id}`;

  return api("PUT", url, productUpdate);
};

export {
  getListProduct,
  createNewProductAPI,
  getProductById,
  deleteProductById,
  updateProductAPI,
};

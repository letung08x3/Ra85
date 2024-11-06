import { api } from "./api";
// import { checkAuth } from "./api";

let getListProduct = async (page = 1, keyWord = "") => {
  let url = keyWord
    ? `products?page=${page}&search=${keyWord}`
    : `products?page=${page}`;
  return await api("GET", url, null);
};

let createNewProductAPI = async (newProduct) => {
  const url = "products/";
  return await api("POST", url, newProduct);
};

let getProductById = async (id) => {
  let url = `products/${id}`;
  return await api("GET", url, null);
};

let deleteProductById = async (id) => {
  let url = `products/${id}`;
  return await api("DELETE", url, null);
};

let updateProductAPI = async (productUpdate) => {
  let url = `products/${productUpdate.id}`;
  return await api("PUT", url, productUpdate);
};

export {
  getListProduct,
  createNewProductAPI,
  getProductById,
  deleteProductById,
  updateProductAPI,
};

import { api } from "./api";

let getListProduct = (page = 1, keyWord = "") => {
  // Nếu có từ khóa tìm kiếm, thêm query parameter `search` vào URL
  let url = keyWord
    ? `products?page=${page}&search=${keyWord}`
    : `products?page=${page}`;
  return api("GET", url, null);
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

let handleLogin = (userName, passWord) => {
  const loginData = { userName, passWord };
  return api("POST", "login", loginData)
    .then((response) => {
      console.log("Login successful:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Login failed:", error);
      throw error;
    });
};

export {
  getListProduct,
  createNewProductAPI,
  getProductById,
  deleteProductById,
  updateProductAPI,
  handleLogin,
};

import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
});

// Cập nhật Authorization header cho mọi request nếu đã xác thực
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("token lưu ở localStorage là: ", token);

    if (token) {
      config.headers.Authorization = `Basic ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Hàm api để tự động thêm token nếu đã xác thực
export const api = async (method, url, payload) => {
  try {
    const response = await axiosClient({
      method: method,
      url: url,
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.log("API call error:", error);
    throw error; // Để xử lý lỗi ở nơi gọi hàm
  }
};

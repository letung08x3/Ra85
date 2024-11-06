import { useEffect, useState } from "react";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import ProductDetail from "./Page/ProductDetail";
import ProductPage from "./Page/ProductPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  createNewProductAPI,
  deleteProductById,
  getListProduct,
  updateProductAPI,
} from "./Components/API/ProductApi";
import { getListManufacturer } from "./Components/API/ManufacturerApi";
import { getListCategory } from "./Components/API/CategoryApi";
import ResultSearchProduct from "./Components/Search/ResultSearchProduct";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";
import image7 from "./Images/image7.jpg";
import image8 from "./Images/image8.jpg";
import image9 from "./Images/image9.jpg";
import image10 from "./Images/image10.jpg";
import image11 from "./Images/image11.jpg";
import Login from "./Components/Login/Login";
import { axiosClient } from "./Components/API/api";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];
function App() {
  const [productList, setProductList] = useState([]);
  const [manufacturerList, setManufactureList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productUpdate, setProductUpdate] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyWord, setKeyWord] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    info: "",
    detail: "",
    ratingStar: "",
    imageName: "",
    manufacturerName: "",
    categoryName: "",
  });

  // hàm mã hóa thông tin đăng nhập cho Basic Auth
  const encodeCredentials = (username, password) => {
    return btoa(`${username}:${password}`);
  };

  // Hàm xác thực người dùng
  const handleLogin = async (userName, passWord) => {
    // console.log("đã qua bước 2");

    try {
      // Mã hóa thông tin đăng nhập và thêm vào header `Authorization`
      const encodedCredentials = encodeCredentials(userName, passWord);
      console.log("encodedCredentials:", encodedCredentials);

      // console.log("đã qua bước 3");

      const response = await axiosClient.get("login/", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      // console.log("đã qua bước 4");

      console.log("Login successful:", response.data);

      // Lưu token và cập nhật trạng thái nếu đăng nhập thành công
      let token = encodedCredentials;
      setIsAuthenticated(true);

      localStorage.setItem("token", token);
      navigate("products/");
      return response.data;
    } catch (error) {
      alert("Username hoặc password chưa đúng, mời nhập lại!");
      setIsAuthenticated(false);
      // throw error;
    }
  };
  console.log(
    "trạng thái authen sau khi chạy xog hàm login là:",
    isAuthenticated
  );

  useEffect(() => {
    console.log("đã chạy qua đoạn code này");

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // console.log("chương trình chạy vào đây");

    const fetchData = async () => {
      console.log("trạng thái authen là:", isAuthenticated);

      if (isAuthenticated) {
        try {
          await Promise.all([
            console.log("lấy danh sách nhà sx"),

            fetchManufacture(),
            console.log("lấy danh sách category"),

            fetchCategory(),
            console.log("lấy danh sách sp"),

            fetchProducts(),
          ]);
        } catch (error) {
          console.error("Có lỗi khi fetch dữ liệu:", error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, page, keyWord]);

  const fetchProducts = async () => {
    const res = await getListProduct(page, keyWord);
    console.log("Page được gọi đến là: ", page);
    setProductList(res.content);
    setTotalPages(res.totalPages);
  };

  const fetchManufacture = async () => {
    await getListManufacturer().then((res) => {
      console.log("kết quả api Manufac res =", res);

      setManufactureList(res);
    });
  };

  const fetchCategory = async () => {
    await getListCategory().then((res) => {
      console.log("kết quả api Category là", res);

      setCategoryList(res);
    });
  };

  const searchProducts = (keyWord) => {
    setKeyWord(keyWord);
  };

  const CreateNewProduct = async (newProductAPI) => {
    console.log("NewProductAPI ở App.js:", newProductAPI);

    await createNewProductAPI(newProductAPI).then((res) => {
      fetchProducts(res);
    });
    fetchProducts();
  };

  const deleteProduct = async (idDelete) => {
    const isConfirmed = window.confirm("Bạn có muốn xóa sản phẩm này không?");
    if (!isConfirmed) {
      return;
    }
    try {
      await deleteProductById(idDelete);
      await fetchProducts();
      alert("Sản phẩm đã được xóa thành công!");
    } catch (error) {
      console.error("Có lỗi xảy ra khi xóa sản phẩm:", error);
      alert("Không thể xóa sản phẩm. Vui lòng thử lại sau.");
    }
  };

  const updateProduct = async (productUpdate) => {
    console.log("Product cần update là:", productUpdate);
    console.log("ID của productUpdate là:", productUpdate.id);

    try {
      await updateProductAPI(productUpdate); // Đợi API cập nhật hoàn thành
      await fetchProducts(); // Cập nhật lại danh sách sản phẩm
    } catch (error) {
      console.error("Có lỗi xảy ra khi cập nhật sản phẩm:", error);
      alert("Không thể cập nhật sản phẩm. Vui lòng thử lại sau.");
    }
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };
  return (
    <div className="w-[85%] m-auto">
      <Header
        keyWord={keyWord}
        setKeyWord={setKeyWord}
        searchProducts={searchProducts}
        handleLogout={handleLogout}
      />
      <Banner />

      <Routes>
        <Route
          path="/login"
          element={
            <Login
              userName={userName}
              passWord={passWord}
              setUserName={setUserName}
              setPassWord={setPassWord}
              setIsAuthenticated={setIsAuthenticated}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductPage
              productList={productList}
              images={images}
              setPage={setPage}
              page={page}
              setTotalPages={setTotalPages}
              totalPages={totalPages}
              keyWord={keyWord}
              setKeyWord={setKeyWord}
            />
          }
        />
        <Route
          path="/products/:id"
          element={<ProductDetail images={images} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              productList={productList}
              manufacturerList={manufacturerList}
              categoryList={categoryList}
              CreateNewProduct={CreateNewProduct}
              newProduct={newProduct}
              setNewProduct={setNewProduct}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
              productUpdate={productUpdate}
              setProductUpdate={setProductUpdate}
              totalPages={totalPages}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/products/search-result"
          element={
            <ResultSearchProduct
              productList={productList}
              images={images}
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

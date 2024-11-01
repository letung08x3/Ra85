import { useEffect, useState } from "react";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import ProductDetail from "./Page/ProductDetail";
import ProductPage from "./Page/ProductPage";
import { Routes, Route } from "react-router-dom";
import {
  createNewProductAPI,
  deleteProductById,
  getListProduct,
  updateProductAPI,
} from "./Components/API/ProductApi";
import { getListManufacturer } from "./Components/API/ManufacturerApi";
import { getListCategory } from "./Components/API/CategoryApi";
import { generateId } from "./Components/Ultils/generateId";

function App() {
  const [productList, setProductList] = useState([]);
  const [manufacturerList, setManufactureList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productUpdate, setProductUpdate] = useState(null);

  const [newProduct, setNewProduct] = useState({
    id: generateId(),
    name: "",
    price: "",
    info: "",
    detail: "",
    ratingStar: "",
    imageName: "",
    manufacturerName: "",
    categoryName: "",
  });

  const fetchProducts = () => {
    getListProduct().then((res) => {
      setProductList(res.content);
    });
  };

  const fetchManufacture = () => {
    getListManufacturer().then((res) => {
      setManufactureList(res);
    });
  };

  const fetchCategory = () => {
    getListCategory().then((res) => {
      setCategoryList(res);
    });
  };

  const CreateNewProduct = (newProductAPI) => {
    console.log("NewProductAPI:", newProductAPI);

    createNewProductAPI(newProductAPI).then((res) => {
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

  useEffect(() => {
    fetchManufacture();
    fetchCategory();
    fetchProducts();
  }, []);
  return (
    <div className="w-[85%] m-auto">
      <Header />
      <Banner />

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route
          path="/products"
          element={<ProductPage productList={productList} />}
        />
        <Route path="/products/:id" element={<ProductDetail />} />
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

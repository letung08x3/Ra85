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

  const fetchProducts = () => {
    getListProduct(page, keyWord).then((res) => {
      console.log("Page được gọi đến là: ", page);

      setProductList(res.content);
      setTotalPages(res.totalPages);
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

  const searchProducts = (keyWord) => {
    setKeyWord(keyWord);
  };

  const CreateNewProduct = (newProductAPI) => {
    console.log("NewProductAPI ở App.js:", newProductAPI);

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
    console.log("Cập nhật lại danh sách khi page thay đổi:", page);
  }, [page, keyWord]);
  return (
    <div className="w-[85%] m-auto">
      <Header
        keyWord={keyWord}
        setKeyWord={setKeyWord}
        searchProducts={searchProducts}
      />
      <Banner />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
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

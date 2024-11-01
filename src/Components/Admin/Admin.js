import React, { useState } from "react";
import CreateButtonProduct from "../Products/CreateNewProduct/CreateButtonProduct";
import ModalCreateNewProduct from "../Products/CreateNewProduct/ModalCreateNewProduct";
import { getProductById } from "../API/ProductApi";

function Admin({
  productList,
  manufacturerList,
  categoryList,
  CreateNewProduct,
  newProduct,
  setNewProduct,
  deleteProduct,
  updateProduct,
  productUpdate,
  setProductUpdate,
}) {
  const [showModal, setShowModal] = useState(false);

  const onHandleOpenModal = () => {
    setProductUpdate(null);
    setShowModal(true);
  };

  const onHandleCloseModal = () => {
    setShowModal(false);
  };

  const onDeleteProduct = (idDelete) => {
    deleteProduct(idDelete);
  };

  const onUpdateProduct = async (idUpdate) => {
    console.log("idUpdate là:", idUpdate);

    await getProductById(idUpdate).then((result) => setProductUpdate(result));

    setShowModal(true);
  };

  return (
    <div className="mt-4">
      <CreateButtonProduct onHandleOpenModal={onHandleOpenModal} />
      <div className="mt-3">
        <p className="uppercase font-bold h-8">bảng danh sách sản phẩm</p>
        <div className="table-responsive-lg">
          <table className="table  table-hover">
            <thead className="table-dark">
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Information</th>
                <th>Product Details</th>
                <th>Rating Star</th>
                <th>Product Image</th>
                <th>ManufacturerId</th>
                <th>CategoryId</th>
                <th>Aciton</th>
              </tr>
            </thead>
            <tbody>
              {productList
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.info}</td>
                      <td>{item.detail}</td>
                      <td>{item.ratingStar}</td>
                      <td>{item.imageName}</td>
                      <td>{item.manufacturerName}</td>
                      <td>{item.categoryName}</td>
                      <td>
                        <i
                          className="fa-regular fa-pen-to-square m-2 cursor-pointer"
                          onClick={() => onUpdateProduct(item.id)}
                        ></i>
                        <i
                          className="fa-solid fa-trash cursor-pointer"
                          onClick={() => onDeleteProduct(item.id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ModalCreateNewProduct
        showModal={showModal}
        setShowModal={setShowModal}
        onHandleCloseModal={onHandleCloseModal}
        manufacturerList={manufacturerList}
        categoryList={categoryList}
        CreateNewProduct={CreateNewProduct}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        productUpdate={productUpdate}
        productList={productList}
        updateProduct={updateProduct}
        setProductUpdate={setProductUpdate}
      />
    </div>
  );
}

export default Admin;

import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

function ModalCreateNewProduct({
  showModal,
  setShowModal,
  onHandleCloseModal,
  manufacturerList,
  categoryList,
  newProduct,
  CreateNewProduct,
  setNewProduct,
  productUpdate,
  updateProduct,
  setProductUpdate,
}) {
  // Cập nhật newProduct khi modal được mở
  useEffect(() => {
    if (productUpdate && showModal) {
      setNewProduct(productUpdate); // Cập nhật newProduct với giá trị của sản phẩm cần chỉnh sửa
    } else {
      setNewProduct({}); // Reset newProduct khi mở modal cho tạo mới
      setProductUpdate(null); // Đặt lại productUpdate về null khi tạo mới
    }
  }, [productUpdate, showModal, setNewProduct, setProductUpdate]);

  const handleSaveOrUpdateProduct = () => {
    // Tìm manufacturerId và categoryId từ tên
    const manufacturer = manufacturerList.find(
      (item) => item.name === newProduct.manufacturerName
    );
    const category = categoryList.find(
      (item) => item.name === newProduct.categoryName
    );
    const newProductAPI = {
      ...(productUpdate && { id: productUpdate.id }), // Thêm id khi cập nhật
      name: newProduct.name,
      price: newProduct.price,
      info: newProduct.info,
      detail: newProduct.detail,
      imageName: newProduct.imageName,
      ratingStar: newProduct.ratingStar,
      manufacturerId: manufacturer ? manufacturer.id : null, // Sử dụng ID thay vì tên
      categoryId: category ? category.id : null,
    };

    if (productUpdate) {
      updateProduct(newProductAPI); // Cập nhật sản phẩm
      console.log("Id ở th cập nhật:", newProductAPI.id);
    } else {
      CreateNewProduct(newProductAPI); // Tạo sản phẩm mới
    }

    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetModalForm = () => {
    setNewProduct({
      id: "",
      name: "",
      price: "",
      info: "",
      detail: "",
      ratingStar: "",
      imageName: "",
      manufacturerName: "",
      categoryName: "",
    });
  };

  const onHandleCancel = () => {
    resetModalForm();
    setProductUpdate(null);
    onHandleCloseModal();
    console.log("productUpdate sau khi ấn cancel:", productUpdate);
  };

  return (
    <Container>
      <Modal
        isOpen={showModal}
        toggle={onHandleCancel}
        className="custom-modal"
        size="lg"
      >
        <ModalHeader className="text-white bg-blue-400">
          {productUpdate ? "Edit Product" : "Create New Product"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <h6>Product Name</h6>
                  <Input
                    name="name"
                    type="text"
                    value={newProduct.name || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label>Product Price</Label>
                  <Input
                    name="price"
                    type="number"
                    value={newProduct.price || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Manufacturer</Label>
                  <Input
                    id="manufacturerSelect"
                    name="manufacturerName"
                    type="select"
                    value={newProduct.manufacturerName || ""}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      -- Select Manufacturer --
                    </option>
                    {manufacturerList.map((item, index) => (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Category</Label>
                  <Input
                    id="categorySelect"
                    name="categoryName"
                    type="select"
                    value={newProduct.categoryName || ""}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      -- Select Category --
                    </option>
                    {categoryList.map((item, index) => (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Rating Star</Label>
                  <Input
                    name="ratingStar"
                    type="number"
                    value={newProduct.ratingStar || ""}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <h6 htmlFor="detail">Product Details</h6>
              <Input
                id="detail"
                name="detail"
                type="textarea"
                value={newProduct.detail || ""}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <h6 htmlFor="info">Product Information</h6>
              <Input
                id="info"
                name="info"
                type="textarea"
                value={newProduct.info || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <h6 htmlFor="productImage">Product Image</h6>
              <Input
                id="productImage"
                name="imageName"
                type="text"
                value={newProduct.imageName || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaveOrUpdateProduct}>
            {productUpdate ? "Save" : "Create"}
          </Button>
          <Button color="secondary" onClick={onHandleCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewProduct;

import React from "react";
import { Container } from "reactstrap";
import ResultFormProduct from "../Components/Products/CreateNewProduct/ResultFormProduct";

function ProductContainer({ productList }) {
  return (
    <Container>
      <ResultFormProduct productList={productList} />
    </Container>
  );
}

export default ProductContainer;

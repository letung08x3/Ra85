import React from "react";
import { Container } from "reactstrap";
import ProductCard from "./ProductCard";

function ResultFormProduct({ productList }) {
  console.log("productList:", productList);

  return (
    <Container>
      <p className="uppercase h-10 font-bold mt-3">Gian hàng chính hãng</p>
      <ProductCard productList={productList} />
    </Container>
  );
}

export default ResultFormProduct;

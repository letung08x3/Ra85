import React from "react";
import ProductContainer from "../Container/ProductContainer";

function ProductPage({ productList }) {
  return (
    <div>
      <ProductContainer productList={productList} />
    </div>
  );
}

export default ProductPage;

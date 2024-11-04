import React from "react";
import ProductContainer from "../Container/ProductContainer";

function ProductPage({
  productList,
  images,
  page,
  setPage,
  setTotalPages,
  totalPages,
  keyWord,
  setKeyWord,
}) {
  return (
    <div>
      <ProductContainer
        productList={productList}
        images={images}
        setPage={setPage}
        page={page}
        setTotalPages={setTotalPages}
        totalPages={totalPages}
        keyWord={keyWord}
        setKeyWord={setKeyWord}
      />
    </div>
  );
}

export default ProductPage;

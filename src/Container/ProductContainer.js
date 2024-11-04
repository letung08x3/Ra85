import React from "react";
import { Container } from "reactstrap";
import ResultFormProduct from "../Components/Products/CreateNewProduct/ResultFormProduct";

function ProductContainer({
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
    <Container>
      <ResultFormProduct
        productList={productList}
        images={images}
        setPage={setPage}
        page={page}
        setTotalPages={setTotalPages}
        totalPages={totalPages}
        keyWord={keyWord}
        setKeyWord={setKeyWord}
      />
    </Container>
  );
}

export default ProductContainer;

import React from "react";
import { Container } from "reactstrap";
import ProductCard from "./ProductCard";

function ResultFormProduct({
  productList,
  images,
  page,
  setPage,
  setTotalPages,
  totalPages,
  keyWord,
  setKeyWord,
}) {
  console.log("productList:", productList);

  return (
    <Container>
      <p className="uppercase h-10 font-bold mt-3">Gian hàng chính hãng</p>
      <ProductCard
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

export default ResultFormProduct;

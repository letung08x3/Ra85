import React from "react";
import ProductCard from "../Products/CreateNewProduct/ProductCard";

function ResultSearchProduct({
  productList,
  images,
  page,
  setPage,
  totalPages,
}) {
  return (
    <div>
      <h2 className="uppercase font-bold mt-4">Kết quả tìm kiếm</h2>
      <ProductCard
        productList={productList}
        images={images}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default ResultSearchProduct;

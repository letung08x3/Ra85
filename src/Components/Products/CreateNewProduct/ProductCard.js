import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ productList }) {
  const navigate = useNavigate();

  const onHandleClickCard = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
      {productList
        .slice()
        .sort((a, b) => b.id - a.id)
        .map((item, index) => {
          return (
            <div
              className="border rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              key={item.id}
              onClick={() => onHandleClickCard(item.id)}
            >
              <div className="p-4">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/image${index + 1}.jpg`}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="px-4 py-2">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <div className="flex justify-between mt-2 text-gray-500"></div>
                <div className="mt-2 flex space-x-2 justify-center">
                  <button className="px-2 py-1 bg-amber-200 rounded">
                    64GB
                  </button>
                  <button className="px-2 py-1 bg-orange-300 rounded">
                    128GB
                  </button>
                  <button className="px-2 py-1 bg-rose-200 rounded">
                    256GB
                  </button>
                </div>
                <p className="text-xl font-bold text-red-600">{item.price}đ</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="flex items-center text-yellow-500">
                    <i className="fa fa-star mr-1"></i>
                    {item.ratingStar}
                  </span>
                  <a href="#" className="text-blue-500 hover:underline">
                    So sánh
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Components/API/ProductApi";
import Slider from "react-slick";

function ProductDetail({ images }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Lấy ID từ URL

  useEffect(() => {
    // Gọi hàm API để lấy thông tin product theo id
    getProductById(id)
      .then((result) => {
        setProduct(result); // Cập nhật product với kết quả từ API
      })
      .catch((error) => {
        console.error("Lỗi khi lấy sản phẩm:", error);
      });
  }, [id]);

  // Hàm chọn ngẫu nhiên 3 ảnh
  const getRandomImages = (images) => {
    if (!images || images.length < 3) return [];
    const shuffled = images.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const randomImages = getRandomImages(images);
  // Cấu hình cho carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  console.log("Product Get By ID:", product);

  if (!product) {
    return <div>Đang tải...</div>;
  }
  return (
    <div className="">
      <div className="w-full h-[50px] text-black bg-slate-100 uppercase font-bold text-2xl">
        {product.name}
      </div>
      <div className="w-full flex ">
        <div className="w-[55%]">
          {/* Carousel chứa 3 ảnh ngẫu nhiên */}
          <Slider {...settings} className="w-full">
            {randomImages.map((img, index) => (
              <div key={index} className="p-2">
                <img
                  src={img}
                  alt={`Ảnh sản phẩm ${index + 1}`}
                  className="w-[400px] h-[400px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[45%]  bg-slate-100">
          <div className="text-red-500 text-2xl font-bold text-center">
            {product.price}
          </div>
          <div className="mt-3 text-left p-2">
            <label className="uppercase font-bold">Lựa chọn phiên bản</label>
            <div className="flex gap-3 justify-center mt-3">
              <button
                type="button"
                className="w-28 h-10 bg-blue-400 rounded-md "
              >
                64 GB
              </button>
              <button
                type="button"
                className="w-28 h-10 bg-blue-400 rounded-md "
              >
                128 GB
              </button>
              <button
                type="button"
                className="w-28 h-10 bg-blue-400 rounded-md "
              >
                256 GB
              </button>
              <button
                type="button"
                className="w-28 h-10 bg-blue-400 rounded-md "
              >
                512 GB
              </button>
            </div>
          </div>
          <div className="mt-3 text-left p-2">
            <label className="uppercase font-bold">Lựa chọn màu sắc</label>
            <div className="flex gap-3 justify-center mt-3">
              <button
                type="button"
                className="w-28 h-10 bg-slate-200 rounded-md "
              >
                Trắng
              </button>
              <button
                type="button"
                className="w-28 h-10 bg-black rounded-md text-white"
              >
                Đen
              </button>
              <button
                type="button"
                className="w-28 h-10 bg-blue-300 rounded-md "
              >
                Xanh
              </button>
              <button
                type="button"
                className="w-28 h-10 bg-yellow-200 rounded-md "
              >
                Vàng
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-[50px]">
            <button
              type="button"
              className="w-[350px] h-[50px] bg-red-500 rounded-md text-white mr-[15px]"
            >
              <p className="uppercase font-bold">Mua ngay</p>
              <p>(Gian tận nơi hoặc nhận tại cửa hàng)</p>
            </button>
            <button
              type="button"
              className="w-[150px] h-[50px] bg-white rounded-md ring-1 ring-red-500 text-red-400"
            >
              <i class="fas fa-shopping-cart"></i>
              <p>Thêm vào giỏ hàng</p>
            </button>
          </div>
          <div className="flex justify-center mt-[10px] pb-3">
            <button
              type="button"
              className="w-[250px] h-[50px] bg-teal-600 rounded-md text-white mr-[15px]"
            >
              <p>Trả góp 0%</p>
            </button>
            <button
              type="button"
              className="w-[250px] h-[50px] bg-teal-600 rounded-md text-white"
            >
              <p>Trả góp qua thẻ</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase font-bold ">Thông tin sản phẩm</p>
        <div className="h-[500px]">
          {product.info} {product.detail}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header({ keyWord, setKeyWord, searchProducts }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Ngăn form submit lại trang
    const searchInput = document.getElementById("search-input").value;

    searchProducts(searchInput);

    navigate("/products/search-result"); // Điều hướng đến trang kết quả
  };

  const handleClickLogo = () => {
    setKeyWord("");
  };

  return (
    <div className="header">
      <div className="header-top">
        <div>
          <Link
            to={"/products"}
            className="header-logo"
            onClick={handleClickLogo}
          >
            <img
              src="https://hoanghamobile.com/Content/web/img/logo-text.png"
              alt="Logo"
            />
          </Link>
          <form onSubmit={handleSearch} className="search-form">
            <input
              id="search-input"
              type="text"
              placeholder="Bạn muốn tìm gì?"
              className="input-search"
              maxLength={100}
              defaultValue={keyWord} // Hiển thị từ khóa hiện tại
            />
            <button type="submit" className="search">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div>
            <Link to={"/admin"} className="login">
              <i className="material-icons"></i>
              Admin
            </Link>
          </div>
          <div>
            <a href="/">
              <i className="fa fa-shopping-cart shopping-icon"></i>
              Giỏ hàng
            </a>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div>
          <ul>
            <li>
              <a href="/dtdd">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/phonne-24x24.png"
                    alt="icon Điện thoại"
                  />
                </i>
                <span>Điện thoại</span>
              </a>
            </li>
            <li>
              <a href="/laptop">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/laptop-24x24.png"
                    alt="icon Laptop"
                  />
                </i>
                <span>Laptop</span>
              </a>
            </li>
            <li>
              <a href="/phu-kien">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/phu-kien-24x24.png"
                    alt="icon phụ kiện"
                  />
                </i>
                <span>Phụ kiện</span>
              </a>
            </li>
            <li>
              <a href="/dong-ho">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/watch-24x24.png"
                    alt="icon Điện thoại"
                  />
                </i>
                <span>Đồng hồ</span>
              </a>
            </li>
            <li>
              <a href="/dtdd">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/tablet-24x24.png"
                    alt="icon tablet"
                  />
                </i>
                <span>Tablet</span>
              </a>
            </li>
            <li>
              <a href="/pc-print">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/PC-24x24.png"
                    alt="icon PC"
                  />
                </i>
                <span>PC, Máy in</span>
              </a>
            </li>
            <li>
              <a href="/sim">
                <i>
                  <img
                    src="https://cdn.tgdd.vn/content/sim-24x24.png"
                    alt="icon Điện thoại"
                  />
                </i>
                <span>Sim, Thẻ cào</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

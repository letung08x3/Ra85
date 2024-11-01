import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="header-top">
        <div>
          <Link to={"/products"} className="header-logo">
            <img
              src="https://hoanghamobile.com/Content/web/img/logo-text.png"
              alt="Logo"
            />
          </Link>
          <form action="/tim-kiem" className="search-form">
            <input
              type="text"
              placeholder="Bạn muốn tìm gì?"
              className="input-search"
              maxLength={100}
            />
            <button type="submit" className="search">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div>
            <Link to={"/admin"} className="login">
              <i class="material-icons"></i>
              Admin
            </Link>
          </div>
          <div>
            <a href="/">
              <i class="fa fa-shopping-cart shopping-icon"></i>
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

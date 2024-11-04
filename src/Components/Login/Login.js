import React, { useState } from "react";
import { handleLogin } from "../API/ProductApi";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    console.log("username người dùng nhập là:", userName);
    console.log("password người dùng nhập là:", passWord);
    handleLogin(userName, passWord);
    navigate("/products");
  };
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-fuchsia-100">
        <div class="flex w-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Left Side: Login Form --> */}
          <div class="w-1/2 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center">
              LOGIN
            </h2>
            <p class="text-gray-600 mb-6 text-center">Have a nice day!</p>

            <form onSubmit={onHandleSubmit}>
              <div class="mb-4">
                <label class="block text-gray-700">
                  <span class="sr-only">Username</span>
                  <div class="flex items-center border border-gray-300 rounded px-3 py-2">
                    <span class="text-gray-400 mr-2">
                      <i class="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Username"
                      class="w-full focus:outline-none"
                      onChange={(e) => setUserName(e.target.value)} // Cập nhật userName
                    />
                  </div>
                </label>
              </div>

              <div class="mb-4">
                <label class="block text-gray-700">
                  <span class="sr-only">Password</span>
                  <div class="flex items-center border border-gray-300 rounded px-3 py-2">
                    <span class="text-gray-400 mr-2">
                      <i class="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      class="w-full focus:outline-none"
                      onChange={(e) => setPassWord(e.target.value)} // Cập nhật userName
                    />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg shadow mt-4"
              >
                Login Now
              </button>
            </form>

            <p class="text-center text-gray-500 mt-6">Login with Others</p>

            <div class="flex flex-col gap-2 mt-4">
              <button class="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google Icon"
                  class="w-5 h-5 mr-2"
                />{" "}
                Login with Google
              </button>
              <button class="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
                <img
                  src="https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png"
                  alt="Facebook Icon"
                  class="w-5 h-5 mr-2"
                />{" "}
                Login with Facebook
              </button>
            </div>
          </div>

          {/* <!-- Right Side: Image with Background --> */}
          <div class="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-500 relative">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/889/532/947/baby-smile-positive-wallpaper-preview.jpg"
              alt="Baby Smile"
              class="object-cover w-full h-full opacity-80"
            />
            <div class="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
              <span class="text-yellow-500 text-lg">
                <i class="fas fa-bolt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// LoginPage.js
import React from "react";
import { Link } from "react-router-dom"; 
const LoginPage = () => {
  return (
    <div className="flex m-5 h-screen overflow-hidden rounded-[35px] rounded-br-[70px] rounded-bl-[70px]">
      {/* Left Side - Background Image */}
      <div className="w-2/3 bg-cover bg-center" style={{ backgroundImage: "url('assets/svg/left_login.svg')" }}>
        {/* You can adjust the styles and image URL as needed */}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2  flex items-center justify-center bg-white">
        <div className="w-2/3 p-8">
          <h1 className="text-3xl font-bold">Hello Again!</h1>
          <p className="text-lg mb-14">Welcome Back</p>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input type="text" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 mb-3 text-white px-4 w-full py-2 rounded-2xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
            <span className="mr-3">Don't have an account?</span>
            <Link to="/signup" className="text-blue-600">Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

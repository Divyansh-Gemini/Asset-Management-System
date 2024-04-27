import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post('http://localhost:5000/api/v1/user/signup', formData)
      .then((response) => {
        if (response.data.success) {
          window.location.href = "/login"
        }
      })
      .catch((error) => {
        console.log("Signup failed")
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }
  return (
    <div className="flex m-5 h-screen overflow-hidden rounded-[35px] rounded-br-[70px] rounded-bl-[70px]">
      {/* Left Side - Background Image */}
      <div
        className="w-2/3 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/svg/left_login.svg')" }}
      >
        {/* You can adjust the styles and image URL as needed */}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2  flex items-center justify-center bg-white">
        <div className="p-8 w-2/3">
          <h1 className="text-3xl font-bold">Hello!</h1>
          <p className="text-lg mb-14">Sign Up to get Started</p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 mb-3 text-white px-4 w-full py-2 rounded-2xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              SignUp
            </button>
            <p className="text-gray-700 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

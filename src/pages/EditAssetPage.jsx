import React, { useState } from "react";
import axios from "axios";

const EditAssetPage = () => {
  const [formData, setFormData] = useState({
    assetid:"",
    name: "",
    capacity: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pathUrl = window.location.href

    const pathname = window.location.pathname
    const assetId = pathUrl.split("?")[1]
    formData.assetid = assetId
    const response = await axios.patch(`http://localhost:5000/api/v1/asset${pathname.split("?")[0]}`, formData);

    if(response.data.success){
     console.log("Asset created successfully")
    }
  };

  return (
    <div>
      <form className="space-y-10 max-w-md m-auto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="capacity" className="block text-white font-bold mb-2">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full px-4 py-2  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-white font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-white font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-[#E73361] to-[#F3564A] text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent transition duration-300`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditAssetPage;

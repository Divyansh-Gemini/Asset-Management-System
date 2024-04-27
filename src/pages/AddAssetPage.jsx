import React, { useState } from "react";

const AddAssetPage = () => {
  return (
    <div>
      <form className="space-y-10 max-w-md m-auto">
        <div>
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
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
            className="w-full px-4 py-2  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label
            htmlFor="available_unit"
            className="block text-white font-bold mb-2"
          >
            Available Unit
          </label>
          <input
            type="number"
            id="available_unit"
            className="w-full px-4 py-2  bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-white font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
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

export default AddAssetPage;

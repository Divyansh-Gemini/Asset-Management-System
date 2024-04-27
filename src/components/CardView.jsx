import React from "react";

const CardView = () => {
  return (
    <div className="w-3/4 rounded-2xl overflow-hidden shadow-lg mx-auto bg-[#ace5f1] text-black">
      <div className="flex">
        <img
          className="w-1/3 m-5 rounded-xl"
          src="assets/images/cardview.jpg"
          alt="Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 mt-2">Auditorium</div>
          <p className="text-gray-700 text-base">
            Auditorium is fully AC Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni natus id blanditiis, autem nesciunt porro architecto aspernatur enim. Ipsam odio non et?
          </p>
          <p className="text-gray-700 font-bold mt-2">Capacity: 500</p>
          <p className="text-gray-700 font-bold">Availability: Yes</p>
        </div>
      </div>

      <div className="p-3 px-6 flex justify-end">
        <button className="bg-gradient-to-r from-[#E73361] to-[#F3564A] rounded-md hover:bg-opacity-90 focus:outline-none hover:ring-2 hover:ring-[#E73361] hover:border-transparent text-white font-bold py-2 px-2 w-24 mr-2">
          Edit
        </button>
        <button className="bg-gradient-to-r from-[#E73361] to-[#F3564A] rounded-md hover:bg-opacity-90 focus:outline-none hover:ring-2 hover:ring-[#E73361] hover:border-transparent text-white font-bold mr-2 w-24">
          Delete
        </button>
        <button className="bg-gradient-to-r from-[#E73361] to-[#F3564A] rounded-md hover:bg-opacity-90 focus:outline-none hover:ring-2 hover:ring-[#E73361] hover:border-transparent text-white font-bold  w-24">
          Reserve
        </button>
      </div>
    </div>
  );
};

export default CardView;

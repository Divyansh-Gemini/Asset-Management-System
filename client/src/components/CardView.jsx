import React from 'react';

const CardView = () => {
  return (
    <div className="w-1/2 rounded overflow-hidden shadow-lg mx-auto">
        <div className='flex'>
        <img className="w-1/3 ml-10 mt-10 my-auto" src="assets/images/cardview.jpg" alt="Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 mt-10">Auditorium</div>
        <p className="text-gray-700 text-base">Auditorium is fully AC and there is capacity of 500 students</p>
        <p className="text-gray-700 text-base">Availability: Yes</p>
      </div>      
        </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28 mr-2">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 w-28">
          Delete
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-28">
          Reserve
        </button>
      </div>
    </div>
  );
};

export default CardView;

import React from "react";

const DeveloperCard = ({ name, email, image }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-6 w-[30%] bg-white">
      <img src={image} alt={name} className="w-32 mx-auto mt-4 rounded-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-gray-700 text-base text-center">
          <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="hover:text-blue-600"
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

const DeveloperCards = () => {
  return (
    <div className="container mx-auto w-11/12 bg-[#21313C] rounded-lg h-full mb-10">
      <h2 className="text-3xl font-semibold mb-4 text-white py-4">
        Frontend Developers
      </h2>
      <div className="flex flex-wrap gap-10 p-6">
        <DeveloperCard
          name="Divyansh Gemini"
          email="divyanshgemini3232@gmail.com"
          image="/assets/images/gemini.png"
        />
        <DeveloperCard
          name="Tushar"
          email="haryanatushar@gmail.com"
          image="/assets/images/tushar.png"
        />
        <DeveloperCard
          name="Rohit Singh"
          email="rohitrsn055@gmail.com"
          image="/assets/images/rohit.png"
        />
      </div>

      <h2 className="text-3xl font-semibold mt-5 py-6 text-white">
        Backend Developers
      </h2>
      <div className="flex flex-wrap gap-10 p-6">
        <DeveloperCard
          name="Shubham Bharadwaj"
          email="shubhambharadwaj471@gmail.com"
          image="/assets/images/shubham.png"
        />
        <DeveloperCard
          name="Shivam Sharma"
          email="shivamsharma@gmail.com"
          image="/assets/images/shivam.png"
        />
      </div>
    </div>
  );
};

export default DeveloperCards;

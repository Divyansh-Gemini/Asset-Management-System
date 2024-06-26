import { useState } from "react";

function FeedbackPage() {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState("");
  const [feedbackDetails, setFeedbackDetails] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      rating,
      feedbackType,
      feedbackDetails,
    };
    console.log("Form submitted:", formData);
    setSubmittedData(formData);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const getStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) stars += "★";
    return stars;
  };

  return (
    <div className="bg-[#21313C] min-h-screen flex">
      {/* Left Side - Feedback Section */}
      <div className="w-1/2 p-8 flex flex-col ">
        <img
          src="assets/images/feedbackImage.png"
          alt="Feedback Image"
          className="w-80 mx-auto mt-40"
        />
      </div>

      {/* Right Side - Feedback Form */}
      <div className="w-1/2 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-3 ml-48 mt-10">
          Feedback
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md m-auto my-14 space-y-6"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          />
          <span className="text-base text-white">Rate your experience</span>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center mr-2">
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)}
                  className="sr-only"
                />
                <span className="text-[#E73361] text-2xl">
                  {value <= rating ? "★" : "☆"}
                </span>
              </label>
            ))}
          </div>
          <select
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            className="w-full px-4 py-2 mb-4 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
          >
            <option disabled value="">
              -select-
            </option>
            <option value="Comment">Comment</option>
            <option value="Review">Review</option>
            <option value="Complaint">Complaint</option>
            <option value="Suggestion">Suggestion</option>
          </select>
          <textarea
            placeholder="Feedback Details"
            value={feedbackDetails}
            onChange={(e) => setFeedbackDetails(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#E73361] to-[#F3564A] text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
          >
            Submit
          </button>
        </form>
        {submittedData && (
          <div className="mt-10 p-4 bg-white rounded-md">
            <h2 className="text-2xl font-bold mb-2">{submittedData.email}</h2>
            <p>Feedback Type: {submittedData.feedbackType}</p>
            <p>Feedback Details: {submittedData.feedbackDetails}</p>
            <p className="text-yellow-600 text-3xl">
              {getStars(submittedData.rating)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedbackPage;

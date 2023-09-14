import React, { useState } from "react";
import Rating from "react-rating";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PostReview = ({ title, id }) => {
  const {user} = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate()

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const form = e.target;
    // const rating = form.userRating.value;
    const message = form.message.value

    const reviews = {
      rating : userRating,
      review_text : message,
      game_id : id,
      user_email : user?.email,
      user_name : user?.displayName,
      user_img : user?.photoURL,
    }
    console.log(reviews)
      
    const url = "http://localhost:5000/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Thank You for Your Feedback",
            icon: "success",
            confirmButtonText: "Welcome",
          });
          form.reset();
        }
      });

    setIsModalOpen(false);
  };

  const feedbackMessages = {
    1: "Terrible",
    2: "Poor",
    3: "Average",
    4: "Good",
    5: "Amazing",
  };

  const handleRatingChange = (value) => {
    setUserRating(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validate = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      navigate("/login");
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-8 text-white w-[75%] flex items-center gap-3 py-7 w- mt-4 rounded-lg"
      >
        Review
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50  p-6 rounded-lg shadow-lg w-[50%] lg:mx-20">
            <form onSubmit={handleSubmitComment}>
              <div className="mb-4 border  bg-green-500 border-none   px-4 py-8 ">
                <h1 className="text-3xl font-bold ml-10 pb-5">{title}</h1>
                <div className="pl-10">
                  <Rating
                  name = "userRating"
                    initialRating={userRating}
                    onClick={handleRatingChange}
                    placeholderRating={userRating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 100 100"
                        className="icon"
                      >
                        <polygon points="50,5 61.8,35.5 94.3,35.5 67.9,57.2 79.7,90.4 50,72.9 20.3,90.4 32.1,57.2 5.7,35.5 38.2,35.5" />
                      </svg>
                    }
                    placeholderSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 100 100"
                        className="icon"
                      >
                        <polygon points="50,5 61.8,35.5 94.3,35.5 67.9,57.2 79.7,90.4 50,72.9 20.3,90.4 32.1,57.2 5.7,35.5 38.2,35.5" />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 100 100"
                        className="icon"
                      >
                        <polygon
                          points="50,5 61.8,35.5 94.3,35.5 67.9,57.2 79.7,90.4 50,72.9 20.3,90.4 32.1,57.2 5.7,35.5 38.2,35.5"
                          fill="green"
                        />
                      </svg>
                    }
                  />
                  {userRating !== null && (
                    <div  className="text-lg font-bold text-white pl-2">
                      {feedbackMessages[userRating]}
                    </div>
                  )}
                </div>
                <textarea
                  name="message"
                  id=""
                  placeholder="Describe your experience"
                  className="w-[80%]  p-5 my-5 mx-12 text-white font-bold outline-none hover:shadow-[#0b9817] shadow-inner h-[100px] resize-none bg-[#222222]"
                />
              </div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={closeModal}
                  //   className="text-gray-500 hover:text-gray-700 mr-2"
                  className=" px-5 py-2 hover:text-white mr-5 bg-gray-700 hover:bg-gray-500"
                  style={{
                    "--path":
                      "0px 0px, calc(100% - 14px) 0, 130% 100%, calc(100% - 20px) 100%, 14px 100%, 0px calc(100% - 14px)",
                    fontFamily: "resobot-bold",
                    WebkitClipPath: "polygon(var(--path))",
                    clipPath: "polygon(var(--path))",
                    textTransform: "uppercase", // Add text-transform property
                    WebkitTransition: "all 0.3s ease-in-out", // Add -webkit-transition property
                    MozTransition: "all 0.3s ease-in-out", // Add -moz-transition property
                    MsTransition: "all 0.3s ease-in-out", // Add -ms-transition property
                    OTransition: "all 0.3s ease-in-out", // Add -o-transition property
                    transition: "all 0.3s ease-in-out", // Add standard transition property
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => validate()}
                  //   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  className="custom-button px-5 py-2 text-white hover:bg-green-500"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostReview;

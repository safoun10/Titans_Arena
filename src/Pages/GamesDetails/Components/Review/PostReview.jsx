import React, { useState } from "react";
import Rating from "react-rating";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { usePostGameReviewsMutation } from "../../../../Redux/slice/GameReviewsState";

const PostReview = ({ title, id }) => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate();
  const [postGameReviews] = usePostGameReviewsMutation();
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const rating = form.userRating.value;
    const message = form.message.value;
    const currentDate = new Date();
    const reviews = {
      rating: userRating,
      review_text: message,
      game_id: id,
      user_email: user?.email,
      user_name: user?.displayName,
      user_img: user?.photoURL,
      Date: currentDate.toISOString().split("T")[0],
    };
    console.log(reviews);

    const response = await postGameReviews(reviews);

    if (response.error) {
      // Handle the error here
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Comment posted Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
      form.reset();
      setIsModalOpen(false);
    }
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
        color: "#FFFFFF",
        background:
          " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",

        confirmButtonColor: "cool",
        text: "Something went wrong!",
      });
      navigate("/login");
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-8 text-white  flex items-center gap-3 py-4 mx-auto custom-button mt-4 rounded-lg"
      >
        Add Your Review
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50  p-6 rounded-lg shadow-lg lg:w-[40%] lg:mx-20">
            <form onSubmit={handleSubmitComment}>
              <div
                style={{
                  "--path":
                    "0px 0px, calc(100% - 14px) 0, 130% 100%, calc(100% - 20px) 100%, 14px 100%, 0px calc(100% - 14px)",

                  WebkitClipPath: "polygon(var(--path))",
                  clipPath: "polygon(var(--path))",
                  textTransform: "uppercase", // Add text-transform property
                  WebkitTransition: "all 0.3s ease-in-out", // Add -webkit-transition property
                  MozTransition: "all 0.3s ease-in-out", // Add -moz-transition property
                  MsTransition: "all 0.3s ease-in-out", // Add -ms-transition property
                  OTransition: "all 0.3s ease-in-out", // Add -o-transition property
                  transition: "all 0.3s ease-in-out", // Add standard transition property
                }}
                className="mb-4  bg-slate-900    px-4 py-8 "
              >
                <h1 className="text-3xl font-bold lg:ml-10 ml-4 pb-5">
                  {title}
                </h1>
                <hr className="pb-3" />
                <div className="pl-10">
                  <p>How was your experience</p>
                  <Rating
                    name="userRating"
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
                        <polygon
                          points="50,5 61.8,35.5 94.3,35.5 67.9,57.2 79.7,90.4 50,72.9 20.3,90.4 32.1,57.2 5.7,35.5 38.2,35.5"
                          fill="white"
                        />
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
                          fill="black"
                        />
                      </svg>
                    }
                  />
                  {userRating !== null && (
                    <div className="text-lg font-bold text-white pl-2">
                      {feedbackMessages[userRating]}
                    </div>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Describe your experience"
                    className="p-4 border rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                  ></textarea>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="py-4 my-2 custom-button  rounded-md  dark:bg-red-500"
                  >
                    Cencel
                  </button>
                  <button
                    type="submit"
                    onClick={() => validate()}
                    className="py-4  rounded-md custom-button  dark:bg-[#86ff00]"
                  >
                    Post
                  </button>
                </div>
              </div>

              {/* <div className="text-right">
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
              </div> */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostReview;

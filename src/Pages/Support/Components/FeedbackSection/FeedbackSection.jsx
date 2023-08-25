import React, { useRef } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import ratingLottie from "./rating-lottie.json";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie-player";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FeedbackSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e0ht87v",
        "template_6leqolj",
        form.current,
        "vi9k8DJZjPtcYQPJ8"
      )
      .then(
        (result) => {
          console.log(result.text);
          
          toast("Message sent");
          const form = e.target;
          form.user_email.value = "";
          form.from_name.value = "";
          form.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" max-w-7xl mx-auto">
      <Title
        primaryText="Feedback Central"
        secondaryText="Your Feedback Shapes Our Future"
      ></Title>
      <div className="grid md:grid-cols-2">
        <div className="flex justify-center my-auto">
          <Lottie
            loop
            animationData={ratingLottie}
            play
            // style={{ width: 450, height: 450 }}
            className="md:w-[450px] md:h-[450px]"
          />
        </div>
        
        {/* feedback form */}
        <div className=" text-white flex items-center justify-center">
          <div className="w-full p-6 shadow-md rounded-lg">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block  font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="border-b bg-transparent text-black w-full py-2 px-3"
                  placeholder="Your Name"
                  name="from_name"
                />
              </div>
              <div className="mb-4">
                <label className="block   font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="border-b   bg-transparent text-black w-full py-2 px-3"
                  placeholder="Your Email"
                  name="user_email"
                />
              </div>
              <div className="mb-4">
                <label className="block  font-medium mb-1">
                  Feedback Details
                </label>
                <textarea
                  className="border-b  bg-transparent text-black w-full py-2 px-3"
                  rows="4"
                  placeholder="Enter your feedback"
                  name="message"
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="border-2 rounded-tl-box rounded-br-box p-3 w-full font-bold hover:bg-green-500 my-4 border-green-500"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;

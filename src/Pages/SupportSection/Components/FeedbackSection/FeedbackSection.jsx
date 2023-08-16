import React, { useRef } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import emailjs from '@emailjs/browser';

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Title
        primaryText="Feedback Central"
        secondaryText="Your Feedback Shapes Our Future"
      ></Title>
      <div className="min-h-screen text-white border-2 flex items-center justify-center">
        <div className="max-w-md w-full p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-3"
                placeholder="Your Name"
                name="from_name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="border rounded-md w-full py-2 px-3"
                placeholder="Your Email"
                name="user_email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Feedback Details
              </label>
              <textarea
                className="border rounded-md w-full py-2 px-3"
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
  );
};

export default FeedbackSection;

import React from "react";
import { FaBookmark } from "react-icons/fa";
import {
  FaCalendarDays,
  FaFacebookF,
  FaComments,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const BlogElement = ({ blog }) => {
  const { user } = useAuth();
  const {
    _id,
    title,
    author,
    date,
    comments,
    content,
    featured_image,
    facebook,
    twitter,
    linked_in,
  } = blog;
  const handleBookMark = () => {
    const requestBody = {
      _id: _id, // Send the _id from the singleTournament
    };

    fetch(
      `https://titans-arena-server.vercel.app/blogBookMarks/${user.email}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody), // Send the request body as JSON
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Game Bookmarked In Dashboard",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Already Added Bookmark",
            icon: "error",
            confirmButtonColor: "#86ff00",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="bg-[#182029] mb-10">
      <img
        className="w-full"
        src={featured_image}
        alt="blog-image"
        loading="lazy"
      />
      <div className="py-3 px-4 lg:py-6 lg:px-11">
        <div className="text-white flex gap-2 lg:gap-6">
          <p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
            By{" "}
            <span className="duration-200 hover:text-[#45f882]">{author}</span>
          </p>
          <p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
            <FaCalendarDays className="text-[#45f882]" /> <span>{date}</span>
          </p>
          <p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
            <FaComments className="text-[#45f882] text-lg" />{" "}
            <span>
              {comments?.length == 0
                ? "No Comments"
                : `${(comments?.length, "Comments")}`}
            </span>{" "}
            <button onClick={handleBookMark} className=" ">
              <FaBookmark className="w-5 h-5 text-green-500" />
            </button>
          </p>
        </div>

        <div className="text-white">
          <h1 className="text-2xl lg:text-4xl py-5 font-bold duration-200 hover:text-[#45f882]">
            {title}
          </h1>
          <p className="text-slate-400 text-base lg:text-xl font-semibold pb-3">
            {content.slice(0, 250)}...
          </p>
        </div>

        <div className="text-slate-400 py-4 text-sm lg:text-lg flex justify-between font-semibold items-center">
          <div className="flex items-center">
            <Link
              className="hover:text-[#45f882] group flex items-center"
              to={`/blog/${_id}`}
            >
              READ MORE
              <span className="inline-block pl-2 text-[#45f882] rotate-arrow group-hover:rotate-0">
                <FaArrowRight className="rotate-arrow -rotate-45" />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <p className="mr-2">SHARE :</p>
            <Link to={twitter}>
              {" "}
              <FaTwitter className="text-white hover:text-[#45f882] transition-colors" />
            </Link>
            <Link to={facebook}>
              {" "}
              <FaFacebookF className="text-white hover:text-[#45f882] transition-colors" />
            </Link>
            <Link to={linked_in}>
              <FaLinkedinIn className="text-white hover:text-[#45f882] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogElement;

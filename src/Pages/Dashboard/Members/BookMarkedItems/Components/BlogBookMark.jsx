import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";

const BlogBookMark = ({ blogId }) => {
  const { user } = useAuth();
  const [bookMarkedBlog, setBookMarkedBlog] = useState({});
  useEffect(() => {
    axios
      .get(`https://titans-arena-server.vercel.app/blogs/${blogId}`)
      .then((response) => {
        setBookMarkedBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [blogId]);

  const { title, content, featured_image } = bookMarkedBlog;

  const limitDescription = (content, limit) => {
    const words = content.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };

  const limitedDescription = limitDescription(
    bookMarkedBlog?.content || "",
    15
  );

  const handleDeleteBlogBookMark = () => {
    axios
      .patch(`http://localhost:5000/removeBlogBookmark/${user?.email}`, {
        blogIdToRemove: blogId, // Change the property name to match the server
      })
      .then((response) => {
        console.log("Blog bookmark removed:", response.data.message);
        // Handle success, if needed
      })
      .catch((error) => {
        console.error("Error removing blog bookmark:", error);
        // Handle the error, if needed
      });
  };
  https: return (
    <div
      style={{ backgroundColor: "#282828" }}
      className="bg-gray-200 rounded-lg p-3"
    >
      <div
        style={{
          position: "relative",
          paddingTop: "100%",
          marginBottom: "1rem",
        }}
      >
        <img
          className="block absolute inset-0 h-40 w-40"
          src={featured_image}
          alt=""
        />
      </div>
      <Link to={`/blog/${blogId}`}>
        <div className="font-bold text-white text-line-clamp-1 mb-1 block">
          <h3 className="text-center hover:text-green-500">{title}</h3>
        </div>
        <div
          style={{ position: "relative", paddingBottom: "1.25rem" }}
          className="relative pb-5"
        >
          <span
            style={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
            className="text-xs  text-gray-400 text-line-clamp-1"
          >
            <h3 className="text-center">{limitedDescription}</h3>
          </span>
        </div>
      </Link>
      <button
        onClick={handleDeleteBlogBookMark}
        className="custom-button py-4 px-4  !bg-red-500"
      >
        Remove Enrollment
      </button>
    </div>
  );
};

export default BlogBookMark;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogBanner from "../BlogBanner";
import {
  FaCalendarDays,
  FaFacebookF,
  FaComments,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SingleBlog = () => {
  const { id } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log("first", blog);

  return (
    <div>
      <BlogBanner title="Single Blog" />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-8 pt-24 pb-16 bg-[#0f161b]">
        {/* Blogs page left side start*/}
        <div className="col-span-4">
          {/* single blog start*/}
          <div className="bg-[#182029] mb-10">
            <img
              className="w-full"
              src={blog.featured_image}
              alt="blog-image"
            />
            <div className="py-6 px-11">
              <div className="text-white flex gap-6">
                <p className="flex gap-3 items-center font-semibold text-lg">
                  By{" "}
                  <span className="duration-200 hover:text-[#45f882]">
                    {blog.author}
                  </span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-lg">
                  <FaCalendarDays className="text-[#45f882]" />{" "}
                  <span>{blog.date}</span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-lg">
                  <FaComments className="text-[#45f882] text-lg" />{" "}
                  {/* <span>{blog.comments.length == 0 ? "No Comments" : `${blog.comments.length,"Comments"}`}</span>{" "} */}
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-4xl py-5 font-bold duration-200 hover:text-[#45f882]">
                  {blog.title}
                </h1>
                <p className="text-slate-400 text-xl font-semibold pb-3">
                  {blog.content}
                </p>
              </div>

              <div className="text-slate-400 py-4 text-lg flex justify-between font-semibold items-center">
                <div className="flex items-center">
                  <Link
                    className="hover:text-[#45f882] group flex items-center"
                    to={`/`}
                  >
                    Back to Home
                    <span className="inline-block pl-2 text-[#45f882] rotate-arrow group-hover:rotate-0">
                      <FaArrowRight className="rotate-arrow -rotate-45" />
                    </span>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <p className="mr-2">SHARE :</p>
                  <FaTwitter className="text-white hover:text-[#45f882] transition-colors" />
                  <FaFacebookF className="text-white hover:text-[#45f882] transition-colors" />
                  <FaLinkedinIn className="text-white hover:text-[#45f882] transition-colors" />
                </div>
              </div>
            </div>
          </div>
          {/* single blog end*/}
        </div>
        {/* Blogs page left side end*/}
        {/* Blogs page right side start */}
        <div className="col-span-2">
          <form action="" className="relative flex items-center">
            <input
              type="text"
              placeholder="SEARCH HERE..."
              className="input bg-transparent text-white placeholder:text-lg placeholder:font-semibold input-bordered input-success w-full max-w-lg "
            />
            <button
              type="submit"
              className="absolute right-4 text-gray-500 hover:text-[#45f882] duration-200"
            >
              <FaSearch />
            </button>
          </form>
          {/* RECENT POSTS part Start*/}

          <div className="text-white py-6">
            <h1 className="font-bold text-2xl pb-6">RECENT POSTS</h1>
            {blogs.slice(2, 6).map((blog, i) => (
              <Link key={i}>
                <div className="flex gap-4 pb-4">
                  <img
                    className="w-[128px] rounded-md"
                    src={blog.featured_image}
                    alt=""
                  />
                  <div className="">
                    <h2 className="lg:pr-7 text-xl font-semibold hover:text-[#45f882] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-lg font-semibold text-slate-500">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* RECENT POSTS part end*/}
          {/* NEWS LETTER part start*/}
          <div className="text-white ">
            <h1 className="text-2xl font-bold uppercase pb-3 text-white">
              NEWSLETTER
            </h1>
            <p className="text-xl font-semibold pb-3 text-slate-400">
              {" "}
              Scripting the Epic Tale of Gaming News!
            </p>
            <form className="flex items-center relative">
              <input
                type="text"
                placeholder="ENTER YOUR EMAIL"
                className="w-full max-w-lg  
             font-semibold placeholder-[#45f882] pb-3 bg-transparent focus:outline-none border-b-2 border-gray-800
             "
              />
              <button className="absolute right-2" type="submit">
                <FaArrowRight className="rotate-arrow -rotate-45 text-[#45f882]" />
              </button>
            </form>
          </div>
          {/* NEWS LETTER part end*/}
          
          {/* TAG CLOUD */}
          <div className="py-6">
            <h1 className="text-2xl font-bold uppercase pb-6 text-white">
              TAG CLOUD
            </h1>
            <div className="flex flex-wrap gap-4">
              {blog.length == 0 ? (
                <>
                  <Link className="styled-link">E-SPORTS</Link>
                  <Link className="styled-link">FANTSY</Link>
                  <Link className="styled-link">TOURNAMENTS</Link>
                  <Link className="styled-link">GAME</Link>
                  <Link className="styled-link">MATCHES</Link>
                  <Link className="styled-link">STREAMERS</Link>
                </>
              ) : (
                blog?.tags.map((tag, i) => (
                  <Link className="styled-link">{tag}</Link>
                ))
              )}
            </div>
          </div>
        </div>
        {/* Blogs page right side start */}
      </div>
    </div>
  );
};

export default SingleBlog;
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
import { Helmet } from "react-helmet-async";
import {
  useAddNewsLetterMutation,
  useGetBlogByIdQuery,
  useGetBlogsQuery,
} from "../../../Redux/api/blogApi";
import { useRef, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const SingleBlog = () => {
  const { id } = useParams();
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const { data: blogs } = useGetBlogsQuery();
  const { data: blog, isLoading } = useGetBlogByIdQuery(id);
  const [addNewsLetter, { data, isSuccess }] = useAddNewsLetterMutation();

  // const handleSearch = () => {
  //   setSearch(searchRef.current.value);
  //   searchRef.current.value = "";
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     handleSearch();
  //   }
  // };


  const handleNersletter = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const newEmail = {
      userEmail: user.email,
      email: email,
    };
    addNewsLetter(newEmail);
    console.log(newEmail);
  };

  if (isSuccess === true) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your email is added to the newsletter.",
      showConfirmButton: false,
      timer: 1500,
    });
  }


  return (
    <div>
      <Helmet>
        <title>TitanArena || Blog</title>
      </Helmet>
      <BlogBanner title="Single Blog" />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-4 lg:px-8 pt-24 pb-16 bg-[#0f161b]">
        {/* Blogs page left side start*/}
        <div className="col-span-4">
          {/* single blog start*/}
          <div className="bg-[#182029] mb-10">
            <img
              className="w-full"
              src={blog?.featured_image}
              alt="blog-image"
            />
            <div className="py-3 px-4 lg:py-6 lg:px-11">
              <div className="text-white flex gap-3 lg:gap-6">
                <p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
                  By{" "}
                  <span className="duration-200 hover:text-[#45f882]">
                    {blog?.author}
                  </span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
                  <FaCalendarDays className="text-[#45f882]" />{" "}
                  <span>{blog?.date}</span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
                  <FaComments className="text-[#45f882] text-lg" /> Comments
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-2xl lg:text-4xl py-5 font-bold duration-200 hover:text-[#45f882]">
                  {blog?.title}
                </h1>
                <p className="text-slate-400 text-base lg:text-xl font-semibold pb-3">
                  {blog?.content}
                </p>
              </div>

              <div className="text-slate-400 py-4 text-sm lg:text-lg flex justify-between font-semibold items-center">
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
                  <Link to={blog?.twitter}>
                    {" "}
                    <FaTwitter className="text-white hover:text-[#45f882] transition-colors" />
                  </Link>
                  <Link to={blog?.facebook}>
                    {" "}
                    <FaFacebookF className="text-white hover:text-[#45f882] transition-colors" />
                  </Link>
                  <Link to={blog?.linked_in}>
                    <FaLinkedinIn className="text-white hover:text-[#45f882] transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* single blog end*/}
        </div>
        {/* Blogs page left side end*/}
        {/* Blogs page right side start */}
        <div className="col-span-2">
          {/* <div className="form-control w-full max-w-lg">
            <div className="input-group">
              <input
                type="text"
                ref={searchRef}
                placeholder="Search…"
                onKeyPress={handleKeyPress}
                className="input text-white font-bold input-bordered border-[#45f882] bg-transparent w-full max-w-lg"
              />
              <button
                onClick={handleSearch}
                className="border px-2 border-[#45f882] bg-transparent text-gray-500 hover:text-[#45f882] duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div> */}
          {/* RECENT POSTS part Start*/}

          <div className="text-white pb-6">
            <h1 className="font-bold text-2xl pb-6">RECENT POSTS</h1>
            {blogs?.slice(2, 6).map((blog, i) => (
              <Link to={`/blog/${blog?._id}`} key={i}>
                <div className="flex gap-4 pb-4">
                  <img
                    className="w-[160px] rounded-md"
                    src={blog?.featured_image}
                    alt=""
                  />
                  <div className="">
                    <h2 className="lg:pr-7 text-lg font-semibold hover:text-[#45f882] transition-colors">
                      {blog?.title.slice(0, 54)}...
                    </h2>
                    <p className="text-lg font-semibold text-slate-500">
                      {blog?.date}
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
            <form
              onSubmit={handleNersletter}
              className="flex items-center relative"
            >
              <input
                type="email"
                name="email"
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
              CLOUD TAG
            </h1>
            <div className="flex flex-wrap gap-4">
              {blog?.length == 0 ? (
                <>
                  <Link className="styled-link"># E-SPORTS</Link>
                  <Link className="styled-link"># FANTSY</Link>
                  <Link className="styled-link"># TOURNAMENTS</Link>
                  <Link className="styled-link"># GAME</Link>
                  <Link className="styled-link"># MATCHES</Link>
                  <Link className="styled-link"># STREAMERS</Link>
                </>
              ) : (
                blog?.tags.map((tag, i) => (
                  <Link key={i} className="styled-link">
                    <span>#</span>
                    {tag}
                  </Link>
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

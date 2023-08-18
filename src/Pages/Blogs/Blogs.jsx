import React from "react";
import {
  FaCalendarDays,
  FaFacebookF,
  FaComments,
  FaLinkedinIn,
  FaTwitter,

  FaArrowRight,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import img from "../../../public/Images/Banner1.png";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      {/* blog page banner start */}
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('../../../public/breadcrumb_bg02.jpg')",
        }}
      >
        <div className="py-24 text-center text-white font-bold">
          <h1 className="pt-16 text-5xl">BLOG STANDARD</h1>
          <h2 className="text-xl">BLOG LIST</h2>
        </div>
      </div>
      {/* blog page banner end */}

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-8 pt-24 pb-16 bg-[#0f161b]">
        {/* Blogs page left side start*/}
        <div className="col-span-4">
          {/* single blog start*/}
          <div className="bg-[#182029] mb-10">
            <img className="" src={img} alt="blog-image" />
            <div className="py-6 px-11">
              <div className="text-white flex gap-6">
                <p className="flex gap-3 items-center font-semibold text-lg">
                  By{" "}
                  <span className="duration-200 hover:text-[#45f882]">
                    ADMIN
                  </span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-lg">
                  <FaCalendarDays className="text-[#45f882]" />{" "}
                  <span>AUG 19, 2023</span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-lg">
                  <FaComments className="text-[#45f882] text-lg" />{" "}
                  <span>comments</span>{" "}
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-4xl py-5 font-bold duration-200 hover:text-[#45f882]">
                  ZOMBIE LAND TOURNAMENT MAX
                </h1>
                <p className="text-slate-400 text-xl font-semibold pb-3">
                  Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                  solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard.
                </p>
              </div>

              <div className="text-slate-400 py-4 text-lg flex justify-between font-semibold items-center">
                <div className="flex items-center">
                  <Link className="hover:text-[#45f882] group flex items-center">
                    READ MORE
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
          {/* single blog start*/}
          <div className="bg-[#182029] mb-10">
            <img className="" src={img} alt="blog-image" />
            <div className="py-6 px-11">
              <div className="text-white flex gap-6">
                <p className="flex gap-3 items-center font-semibold text-lg">
                  By{" "}
                  <span className="duration-200 hover:text-[#45f882]">
                    ADMIN
                  </span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-lg">
                  <FaCalendarDays className="text-[#45f882]" />{" "}
                  <span>AUG 19, 2023</span>
                </p>
                <p className="flex gap-3 items-center font-semibold text-lg">
                  <FaComments className="text-[#45f882] text-lg" />{" "}
                  <span>comments</span>{" "}
                </p>
              </div>
              <div className="text-white">
                <h1 className="text-4xl py-5 font-bold duration-200 hover:text-[#45f882]">
                  ZOMBIE LAND TOURNAMENT MAX
                </h1>
                <p className="text-slate-400 text-xl font-semibold pb-3">
                  Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                  solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard.
                </p>
              </div>

              <div className="text-slate-400 py-4 text-lg flex justify-between font-semibold items-center">
                <div className="flex items-center">
                  <Link className="hover:text-[#45f882] group flex items-center">
                    READ MORE
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
          <button type="submit" className="absolute right-4 text-gray-500 hover:text-[#45f882] duration-200"><FaSearch/></button>
          </form>
          {/* RECENT POSTS part Start*/}
          <div className="text-white py-6">
            <h1 className="font-bold text-2xl pb-6">RECENT POSTS</h1>
            <Link>
              <div className="flex gap-4 pb-4">
                <img className="w-[128px] rounded-md" src={img} alt="" />
                <div className="">
                  <h2 className="lg:pr-7 text-xl font-semibold hover:text-[#45f882] transition-colors">
                    ZOMBIE TOURNAMENT LAND MAX
                  </h2>
                  <p className="text-lg font-semibold text-slate-500">
                    AUG 19, 2023
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex gap-4 pb-4">
                <img className="w-[128px] rounded-md" src={img} alt="" />
                <div className="">
                  <h2 className="pr-7 text-xl font-semibold hover:text-[#45f882] transition-colors">
                    ZOMBIE TOURNAMENT LAND MAX
                  </h2>
                  <p className="text-lg font-semibold text-slate-500">
                    AUG 19, 2023
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex gap-4 pb-4">
                <img className="w-[128px] rounded-md" src={img} alt="" />
                <div className="">
                  <h2 className="pr-7 text-xl font-semibold hover:text-[#45f882] transition-colors">
                    ZOMBIE TOURNAMENT LAND MAX
                  </h2>
                  <p className="text-lg font-semibold text-slate-500">
                    AUG 19, 2023
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex gap-4 pb-4">
                <img className="w-[128px] rounded-md" src={img} alt="" />
                <div className="">
                  <h2 className="pr-7 text-xl font-semibold hover:text-[#45f882] transition-colors">
                    ZOMBIE TOURNAMENT LAND MAX
                  </h2>
                  <p className="text-lg font-semibold text-slate-500">
                    AUG 19, 2023
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* RECENT POSTS part end*/}
          {/* NEWS LETTER part start*/}
          <div className="text-white ">
            <h1 className="text-2xl font-bold uppercase pb-3 text-white">NEWSLETTER</h1>
            <p className="text-xl font-semibold pb-3 text-slate-400"> Scripting the Epic Tale of Gaming News!</p>
            <form className="flex items-center relative">
            <input type="text" placeholder="ENTER YOUR EMAIL" className="w-full max-w-lg  
             font-semibold placeholder-[#45f882] pb-3 bg-transparent focus:outline-none border-b-2 border-gray-800
             "/>
            <button className="absolute right-2" type="submit"><FaArrowRight className="rotate-arrow -rotate-45 text-[#45f882]" /></button>
            </form>
          </div>
          {/* NEWS LETTER part end*/}
          {/* TAG CLOUD */}
          <div className="py-6">
            <h1 className="text-2xl font-bold uppercase pb-6 text-white">TAG CLOUD</h1>
            <div className="flex flex-wrap gap-4">
              <Link className="styled-link">E-SPORTS</Link>
              <Link className="styled-link">E-SPORTS</Link>
              <Link className="styled-link">E-SPORTS</Link>
              <Link className="styled-link">E-SPORTS</Link>
              <Link className="styled-link">E-SPORTS</Link>
            </div>
          </div>
        </div>
        {/* Blogs page right side start */}
      </div>
    </div>
  );
};

export default Blogs;

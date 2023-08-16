import React from "react";
import {
  FaCalendarDays,
  FaFacebookF,
  FaComments,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa6";
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
      
      <div className="grid grid-cols-6 gap-6 pl-8 pt-24 pb-16 bg-[#0f161b]">
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
        <div className="">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Blogs;

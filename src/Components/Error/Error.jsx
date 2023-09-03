import React from "react";
import error1 from "../../../public/ErrorImg/404page-image-1.jpg";
import error2 from "../../../public/ErrorImg/404page-image-2.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative">
      <img src={error1} className="h-[100vh] lg:h-full" alt="" />
      <div className="absolute top-52 px-16 lg:left-96 lg:top-40">
        <img src={error2} alt="" />
        <h1 className="uppercase font-bold lg:text-3xl lg:left-28 left-14 text-2xl absolute text-white pt-9">
          Sorry Nothing to See Here
        </h1>
        <Link to={"/"}>
        <button
          className="border-2 uppercase md:text-[13px] mt-28 w-[80%]  p-3 absolute lg:-left-7 left-9 text-white lg:w-full rounded  font-bold bg-blue-700 hover:bg-[rgb(254,45,45)] hover:border-[rgb(254,45,45)] border-blue-500 transition duration-500 transform  ease-in-out "
          style={{
            clipPath:
              "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
          }}
        >
        Go To Homepage
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

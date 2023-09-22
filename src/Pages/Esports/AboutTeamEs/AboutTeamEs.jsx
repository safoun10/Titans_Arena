import React from "react";
import aboutPic from "../../../../public/EsportsPic/animation_llylw6vz (1).json";
import { Player } from "@lottiefiles/react-lottie-player";

const AboutTeamEs = () => {
  return (
    <div className=" bg-black bg-opacity-20 ">
      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
        <div className="z-30 relative lg:w-1/2">
          <div className="hidden bg-slate-900 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
            <div className="w-full lg:w-auto lg:-mr-32">
              {/* <img
                src="https://www.insiderintelligence.com/static/fffd9458239a0ebafb8206b07f8f2f73/esports-2021-scaled.jpeg"
                alt="image with decent chairs"
                className="w-full relative z-30 lg:pl-20 px-6 py-14"
              /> */}
              <Player
                className=" w-full relative z-30 lg:pl-10 px-3 py-7"
                autoplay
                loop
                src={aboutPic}
              ></Player>
            </div>
          </div>
          <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
          <div className="w-full h-full lg:hidden">
            <Player
              className=" w-full relative z-30 lg:pl-20 px-6 py-14"
              autoplay
              loop
              src={aboutPic}
            ></Player>
          </div>
        </div>
        <div className="bg- lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
          <div>
            <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
              ABOUT CLOUX <span className="text-green-500"> ESPORT TEAM</span>
            </h1>
            <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
              Get inspired by our curated selection of luxiwood interiors. We
              hope get inspired to have luxiwood interior yourself. You’ll find
              tips here where you can buy a lot of cool furniture,decorations,
              plants, etc.
            </p>
            <button className="active  border  border-green-400 rounded-md  dark:hover:bg-green-400 dark:hover:text-gray-100  sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2  font-medium leading-none text-white py-4 px-8  flex items-center">
              Explore
              <div className="ml-2 mt-0.5">
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33301L12.6667 7.99967"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamEs;

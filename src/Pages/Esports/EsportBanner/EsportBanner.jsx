import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./EsportBanner.css";
import { FaArrowRight, FaSearch } from "react-icons/fa";

import Banner1 from "../../../../public/EsportsPic/wallpaperflare.com_wallpaper.jpg";
import Banner2 from "../../../../public/EsportsPic/wallpaperflare.com_wallpaper.jpg";
import Banner3 from "../../../../public/EsportsPic/wallpaperflare.com_wallpaper.jpg";

const EsportBanner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-64" // Set a fixed height of 16rem (adjust as needed)
      >
        <SwiperSlide>
          {/* Slide 1 */}
          <div className="max-w-full relative ">
            <img
              className="h-cover w-full  bg-black bg-opacity-80"
              src={Banner1}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-5xl font-bold ">
                Welcome to <span className="text-green-500">Esports</span>
              </h1>
              <p className="text-lg">Experience the thrill of gaming.</p>
              <button className="active  border border-green-400 rounded-md  dark:hover:bg-green-400  mt-4 px-4 py-2  hover:bg-blue-600  text-white">
                Learn More
              </button>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search for games"
                  className="px-4 py-2 rounded-lg w-full bg-gray-200 text-black transition-colors duration-300 focus:bg-white focus:text-black"
                />
                <FaSearch className="text-gray-500 absolute top-1/2 right-3 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 2 */}
          <div className="max-w-full relative">
            <img className="h-cover w-full" src={Banner2} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-5xl font-bold">
                Join the Esports{" "}
                <span className="text-green-500">Community</span>{" "}
              </h1>
              <p className="text-lg">Compete with players worldwide.</p>
              <button className="active border border-green-400 rounded-md  dark:hover:bg-green-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
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
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search tournaments.."
                  className="px-4 py-2 rounded-lg w-full bg-gray-200 text-black transition-colors duration-300 focus:bg-white focus:text-black"
                />
                <FaSearch className="text-gray-500 absolute top-1/2 right-3 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 3 */}
          <div className="max-w-full relative">
            <img className="h-cover w-full" src={Banner3} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-5xl font-bold">
                Esports <span className="text-green-500">Championships</span>{" "}
              </h1>
              <p className="text-lg">Watch the best teams compete.</p>
              <button className="mt-4 px-4 py-2 active border border-green-400 rounded-md  dark:hover:bg-green-400  text-white">
                View Schedule
              </button>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search events.."
                  className="px-4 py-2 rounded-lg w-full bg-gray-200 text-black transition-colors duration-300 focus:bg-white focus:text-black"
                />
                <FaSearch className="text-gray-500 absolute top-1/2 right-3 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default EsportBanner;

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
              <h1 className="text-2xl font-bold">Welcome to Esports</h1>
              <p className="text-lg">Experience the thrill of gaming.</p>
              <button className="active  mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white">
                Learn More
              </button>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search for games..."
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
              <h1 className="text-2xl font-bold">Join the Esports Community</h1>
              <p className="text-lg">Compete with players worldwide.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white">
                Get Started
              </button>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search for tournaments..."
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
              <h1 className="text-2xl font-bold">Esports Championships</h1>
              <p className="text-lg">Watch the best teams compete.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white">
                View Schedule
              </button>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search for esports events..."
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

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Banner1 from '../../../../public/Images/Banner1.png';
import Banner2 from '../../../../public/Images/Banner2.png';
import Banner3 from '../../../../public/Images/Banner3.png';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-full">
            <img className="h-cover w-full"
              src={Banner1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-full">
            <img className="h-cover w-full"
              src={Banner2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-full">
            <img className="h-cover w-full"
              src={Banner3}
              alt=""
            />
          </div>
        </SwiperSlide>
      
      
      </Swiper>
    </>
  );
};

export default Banner;

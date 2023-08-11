import React from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSection.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ReviewSection = () => {
  const isMobileDevice = window.innerWidth <= 500;

  return (
    <div>
      <Title
        primaryText="Review Section"
        secondaryText="Honest Reviews"
      ></Title>
      <div className="md:mx-16 mx-6">
        <Swiper
          slidesPerView={isMobileDevice ? 1 : 3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1389823038/vector/young-man-working-on-the-laptop-computer-and-having-a-idea-freelance-job-creativity.jpg?s=612x612&w=0&k=20&c=eAlHMALZxQG21xy8n5RNd-kXDIy9Gvz3d9AZJL8BPMc= "
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem] text-white items-center text-center">
                <h2 className="card-title md:text-base text-sm">Name</h2>
                <p className="text-sm">Star Rating</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1389823038/vector/young-man-working-on-the-laptop-computer-and-having-a-idea-freelance-job-creativity.jpg?s=612x612&w=0&k=20&c=eAlHMALZxQG21xy8n5RNd-kXDIy9Gvz3d9AZJL8BPMc= "
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem] text-white items-center text-center">
                <h2 className="card-title md:text-base text-sm">Name</h2>
                <p className="text-sm">Star Rating</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1389823038/vector/young-man-working-on-the-laptop-computer-and-having-a-idea-freelance-job-creativity.jpg?s=612x612&w=0&k=20&c=eAlHMALZxQG21xy8n5RNd-kXDIy9Gvz3d9AZJL8BPMc= "
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem] text-white items-center text-center">
                <h2 className="card-title md:text-base text-sm">Name</h2>
                <p className="text-sm">Star Rating</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1389823038/vector/young-man-working-on-the-laptop-computer-and-having-a-idea-freelance-job-creativity.jpg?s=612x612&w=0&k=20&c=eAlHMALZxQG21xy8n5RNd-kXDIy9Gvz3d9AZJL8BPMc= "
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem] text-white items-center text-center">
                <h2 className="card-title md:text-base text-sm">Name</h2>
                <p className="text-sm">Star Rating</p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;

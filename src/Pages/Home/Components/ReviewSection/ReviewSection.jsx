import React from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSection.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ReviewSection = () => {
  return (
    <div>
      <Title
        primaryText="Review Section"
        secondaryText="Honest Reviews"
      ></Title>
      <div className="mx-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl bg-primary">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1389823038/vector/young-man-working-on-the-laptop-computer-and-having-a-idea-freelance-job-creativity.jpg?s=612x612&w=0&k=20&c=eAlHMALZxQG21xy8n5RNd-kXDIy9Gvz3d9AZJL8BPMc= "
                  alt="Shoes"
                  className="cus-rounded"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Name</h2>
                <p>Star Rating</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;

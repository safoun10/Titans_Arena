import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSection.css";

import { AiFillStar } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useGetHomeReviewQuery } from "../../../../Redux/slice/HomeReviewState";

const ReviewSection = () => {
  const isMobileDevice = window.innerWidth <= 500;
  const [review, setReview] = useState([]);

  const { data } = useGetHomeReviewQuery();

  useEffect(() => {
    setReview(data);
  }, [data]);

  return (
    <div className="my-20">
      <Title primaryText="GET HONEST" secondaryText="REVIEW FROM MEMBER" />

      <div className="md:mx-0 ml-12">
        <Swiper
          slidesPerView={isMobileDevice ? 1 : 4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {review?.map((data, i) => (
            <SwiperSlide key={i}>
              <div>
                <div className="card md:w-72 md:h-80 w-72 h-72 shadow-xl mt-20 bg-[#121a23] border-4 border-green-400 flex-col flex items-center ">
                  <img
                    src={data.image}
                    alt="Shoes"
                    className=" cus-rounded md:h-44 md:w-44 h-36 w-36 -top-20 absolute border-4"
                  />
                  <div className="card-body md:mt-24 mt-16">
                    <div className="flex flex-col items-center text-center">
                      <h2 className="card-title text-white uppercase ">
                        {data.title}
                      </h2>
                      <p className="md:text-sm pt-4 text-white">
                        {data.comment}
                      </p>
                      <div className="flex bg-golden text-2xl my-4">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;

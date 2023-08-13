import React from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSection.css";
import { AiFillStar } from 'react-icons/ai';
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
                  src="https://media.istockphoto.com/id/1398115884/photo/smiling-mature-businessman-standing-with-his-arms-crossed-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=gDW4mNyIof2KcM0ojmTnMNk8nt7OekyIPzvi6TTmBvw="
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
                <h2 className="card-title text-white md:text-base text-sm">Md. Masud</h2>
                <p className="text-xl flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1450789968/photo/portrait-of-smiling-asian-man-on-white-background.jpg?s=612x612&w=0&k=20&c=-u4wiJ-m3ITAU8xrfIK5Te2qDlqo9KqN9j_XuhdhlCw="
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
                <h2 className="card-title text-white md:text-base text-sm">Ashraful Alam</h2>
                <p className="text-xl flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/482100176/photo/confident-in-his-business-ability.jpg?s=612x612&w=0&k=20&c=FCmJDrcEsX7U8euCb_rFlnpD_owJ6t1tw3pBJJW34uY="
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
                <h2 className="card-title text-white md:text-base text-sm">Sourav Uddin</h2>
                <p className="text-xl flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1365730050/photo/portrait-of-a-mature-businessman-standing-with-his-arms-folded-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=VVXOoJOYY9RaviU2OLpCRaWeqhi8EIIeYYexMUKn5M8="
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
                <h2 className="card-title text-white md:text-base text-sm">Rafiqul Alam</h2>
                <p className="text-xl flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-primary relative">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1440614646/photo/close-up-studio-portrait-of-a-cheerful-13-year-old-teenager-boy-in-a-black-t-shirt-against-a.jpg?s=612x612&w=0&k=20&c=M_Uq1PfI_aPR9A7JsAbKWe2-Wx2SNFPOqeHtI5rDXqs="
                  alt="Shoes"
                  className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
                />
              </figure>
              <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
                <h2 className="card-title text-white md:text-base text-sm">Ali Hussen</h2>
                <p className="text-xl flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;

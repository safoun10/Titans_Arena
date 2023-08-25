import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSection.css";

import { AiFillStar } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ReviewSection = () => {
  const isMobileDevice = window.innerWidth <= 500;
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log("review",review);


  return (
    <div className="my-20">
       <Title
        primaryText="GET HONEST"
        secondaryText="REVIEW FROM MEMBER"
        
      />
   
      <div className="md:mx-0 ml-12">
        <Swiper 
          slidesPerView={isMobileDevice ? 1 : 4}
          spaceBetween={30}
          
          modules={[Pagination]}
          className="mySwiper"
        >
          {review.map((data, i) => (
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
                        {data.description}
                        Laboriosam assumenda, possimus sint ducimus autem et.
                      </p>
                      <p className="flex bg-golden text-2xl my-4">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />{" "}
                      </p>
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

// <SwiperSlide>
//   <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-[#121a23] border-4 relative">
//     <figure className="px-10 pt-10">
//       <img
//         src="https://media.istockphoto.com/id/1450789968/photo/portrait-of-smiling-asian-man-on-white-background.jpg?s=612x612&w=0&k=20&c=-u4wiJ-m3ITAU8xrfIK5Te2qDlqo9KqN9j_XuhdhlCw="
//         alt="Shoes"
//         className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
//       />
//     </figure>
//     <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
//       <h2 className="card-title text-white md:text-2xl uppercase text-sm">Ashraful Alam</h2>
//       <p className="flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
//       <p className="text-sm text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda, possimus sint ducimus autem et.</p>
//     </div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-[#121a23] border-4 relative">
//     <figure className="px-10 pt-10">
//       <img
//         src="https://media.istockphoto.com/id/482100176/photo/confident-in-his-business-ability.jpg?s=612x612&w=0&k=20&c=FCmJDrcEsX7U8euCb_rFlnpD_owJ6t1tw3pBJJW34uY="
//         alt="Shoes"
//         className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
//       />
//     </figure>
//     <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
//       <h2 className="card-title text-white md:text-2xl uppercase text-sm">Sourav Uddin</h2>
//       <p className="flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
//       <p className="text-sm text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda, possimus sint ducimus autem et.</p>
//     </div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-[#121a23] border-4 relative">
//     <figure className="px-10 pt-10">
//       <img
//         src="https://media.istockphoto.com/id/1365730050/photo/portrait-of-a-mature-businessman-standing-with-his-arms-folded-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=VVXOoJOYY9RaviU2OLpCRaWeqhi8EIIeYYexMUKn5M8="
//         alt="Shoes"
//         className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
//       />
//     </figure>
//     <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
//       <h2 className="card-title text-white md:text-2xl uppercase text-sm">Rafiqul Alam</h2>
//       <p className="flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
//       <p className="text-sm text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda, possimus sint ducimus autem et.</p>
//     </div>
//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="card md:w-96 md:h-96 w-72 h-72 shadow-xl mt-20 bg-[#121a23] border-4 relative">
//     <figure className="px-10 pt-10">
//       <img
//         src="https://media.istockphoto.com/id/1440614646/photo/close-up-studio-portrait-of-a-cheerful-13-year-old-teenager-boy-in-a-black-t-shirt-against-a.jpg?s=612x612&w=0&k=20&c=M_Uq1PfI_aPR9A7JsAbKWe2-Wx2SNFPOqeHtI5rDXqs="
//         alt="Shoes"
//         className="absolute cus-rounded md:h-48 md:w-48 h-24 w-24"
//       />
//     </figure>
//     <div className="card-body absolute md:top-[10rem] top-[5rem] left-[4.5rem] md:left-[7rem]  items-center text-center">
//       <h2 className="card-title text-white md:text-2xl uppercase text-sm">Ali Hussen</h2>
//       <p className="flex bg-golden"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </p>
//       <p className="text-sm text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda, possimus sint ducimus autem et.</p>
//     </div>
//   </div>
// </SwiperSlide>

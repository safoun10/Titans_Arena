import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FreeMode,EffectCoverflow, Pagination } from "swiper/modules";

const LatestGalleryCarousel = () => {
  const isMobileDevice = window.innerWidth <= 768;
  return (
    <>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 50,
          stretch: 5,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      > */}
         {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      > */}
        <Swiper
    slidesPerView={isMobileDevice ? 1.9 : 4}

        spaceBetween={12}
        freeMode={true}
       
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChST7aAuPmBhuE_87wAvWGgIfV1vihBJdHg&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyL-LaOsBdTJDFB5uH48xbgZfztNJnJc8H9w&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://media.gamestop.com/i/gamestop/ExoprimalSD_WK21_455x455_Any_Column_Product_Only_DM.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQlaF2DDdpO35qTsSzgJlB5G_KWvvah_1Iw&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiGhjTbqkC00S-TycnnUn1_4gIaYlOSwILg&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://wallpapercave.com/wp/wp6780072.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2cZiR29Noh6Tbg8bTTVdiLbH8ZQMMxHh0Q&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuz0xSPqrWUF1d9HelTjUA1MdaXuihe_z-w&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[21rem] h-[22rem] w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHX9UrGpIDN3MUo1quDXHYO-bU9tExxsbeQ&usqp=CAU"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LatestGalleryCarousel;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner1 from "../../../../public/Images/Banner1.png";
import Banner2 from "../../../../public/Images/Banner2.png";
import Banner3 from "../../../../public/Images/Banner3.png";
import { Parallax } from "react-parallax";
import "./Banner.css";
import { Link } from "react-router-dom";

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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/20581916.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                  Gaming Galaxies Collide: Your Odyssey Begins!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage={Banner1}
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Conquer the TitanArena: Gaming Glory Awaits!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage={Banner3}
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Unleashed: Power Up Your Play
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529877.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                TitanArena Chronicles: Where Heroes Rise!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529969.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Unleash Your Inner Titan: Join the Gaming Revolution!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/10218.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Beyond Reality: Where Gamers Become Immortals
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529980.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Forge Your Legend: Where Titans Converge!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529998.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Code, Compete, Conquer: The Titan's Way
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/991044.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Gamevolution: From Player to Legend!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5530218.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Unleash the Roar: TitanArena Awaits!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/20581938.png"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Phenomenon Unleashed: Dare to Dominate!
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaperaccess.com/full/1657059.jpg"
            blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
              <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
                <div className="bg-gradient-to-l from-transparent to-[#54966a] lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
                  Dream Gaming Website
                </div>
                <div className="lg:text-8xl sm:text-5xl md:text-6xl text-3xl text-shadow font-bold py-6">
                  Titans A
                  <span className="bg-[#45f8819d] text-black text-shadow-2 bg-opacity-60">
                    rena
                  </span>
                </div>

                <div className="lg:text-3xl text-xl text-white-500 my-3">
                Chronicles of Titans: Script Your Victory Tale
                </div>
                <Link to="/allgame">
                  <div
                    className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    View All Games
                  </div>
                </Link>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

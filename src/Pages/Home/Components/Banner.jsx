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
            bgImage={Banner1}
              blur={{ min: -15, max: 12 }}
            
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Conquer the Titans Arena: Gaming Glory Awaits!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Prepare to conquer the ultimate gaming challenge at
                    TitanArena! Engage in epic matches, immerse yourself in live
                    streams, and embrace the thrill of victory. The arena awaits
                    your ascent!
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage={Banner3}
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen  h-96 flex items-center ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Unleashed: Power Up Your Play
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Unleash your gaming prowess at TitanArena! Dive into a world
                    of intense tournaments, electrifying live streams, and game
                    specifications that will fuel your passion for play.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529877.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  TitanArena Chronicles: Where Heroes Rise!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Embark on your gaming journey in the TitanArena Chronicles!
                    Immerse yourself in thrilling tournaments, electrifying live
                    streams, and detailed game insights that will shape your
                    destiny.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529969.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Unleash Your Inner Titan: Join the Gaming Revolution!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Embrace the chaos of epic tournaments, electrifying live
                    streams, and fierce rivalries. Become the legend you're
                    destined to be in the world of gaming.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/10218.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Beyond Reality: Where Gamers Become Immortals
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Step into a realm where pixels transform into legends.
                    Engage in heart-racing tournaments, immerse in live streams
                    that defy norms, and sculpt your gaming destiny.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529980.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Forge Your Legend: Where Titans Converge!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Forge your legend in the arena where titans converge. Engage
                    in tournaments that define eras, dive into live streams that
                    resonate, and witness the birth of new gaming myths."
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        {/* perfect1 */}
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5529998.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Code, Compete, Conquer: The Titan's Way
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Embrace the titan's way: code your destiny, compete in
                    fierce tournaments, and conquer the hearts of gamers through
                    live streams that amplify the gaming pulse.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        {/* perfect2 */}
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/991044.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Gamevolution: From Player to Legend!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Experience the gamevolution firsthand. Evolve from player to
                    legend in epic tournaments, dive into live streams that
                    evolve reality, and be part of the revolution.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/5530218.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Unleash the Roar: TitanArena Awaits!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Unleash the roar of the titan within at TitanArena! Roar
                    through tournaments that echo in eternity, witness live
                    streams that amplify the adrenaline, and make your mark.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/20581916.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Gaming Galaxies Collide: Your Odyssey Begins!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    As gaming galaxies collide, your odyssey unfolds. Engage in
                    tournaments that create galaxies of rivalries, embark on
                    live streams that warp reality, and become the cosmic gamer.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaper.dog/large/20581938.png"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Phenomenon Unleashed: Dare to Dominate!
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Unleash the gaming phenomenon within you. Dare to dominate
                    in intense tournaments, witness live streams that echo
                    victory, and let your prowess illuminate the gaming cosmos.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            bgImage="https://wallpaperaccess.com/full/1657059.jpg"
              blur={{ min: -15, max: 12 }}
            className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96 "
          >
            <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
              <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                <h2 className="font-bold md:text-6xl text-yellow-500 my-3">
                  Chronicles of Titans: Script Your Victory Tale
                </h2>
                <div>
                  <p className="text-gray-200 font-thin">
                    Step into the Chronicles of Titans, where victory tales are
                    scripted. Engage in tournaments that echo through time, dive
                    into live streams that chronicle greatness, and script your
                    own legacy
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

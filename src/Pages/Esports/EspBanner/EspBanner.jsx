import React from "react";
import "./EspBanner.css";

const EspBanner = () => {
  return (
    <div className="esproot">
      <section
        className=" espoBanner  "
        id="home"
        aria-label=""
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.60fpsgaming.com/wp-content/uploads/2021/07/valorant-error.jpg')`,
        }}
      >
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
          <div className="flex justify-between  items-stretch flex-row">
            <div className="flex items-center rounded-full bg-yellow-500 justify-center">
              <p className="transform flex flex-shrink-0 -rotate-90 text-1xl font-extrabold  tracking-wide leading-normal text-white">
                JOIN NOW
              </p>
            </div>
            <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
              <div>
                <p className="text-3xl text-white mb-5 xl:text-6xl font-semibold leading-9  ">
                  Esports<span className="text-green-500 ">Arena</span>{" "}
                  <span className="text-yellow-400 ">Hub</span>
                </p>
              </div>
              <div className="xl:mt-4 mt-2">
                <p className="text-base xl:text-xl leading-7  text-white pr-4">
                  Embark on a journey into the exhilarating world of esports br
                  with us. As passionate gamers and industry enthusiasts, we're{" "}
                  dedicated to bringing you the latest news
                </p>
                <button className=" active  border border-yellow-500 rounded-lg p-1 mt-5 hover:bg-black hover:text-yellow-500">
                  {" "}
                  Explore
                </button>
              </div>
            </div>
            <div className="hidden md:block h-44 border p-2 border-green-500 rounded-full bg-black bg-opacity-70 md:h-60 xl:h-72">
              <img
                className="hidden h-full xl:block"
                src="https://i.ibb.co/dgVWx1z/hero-banner.png"
                alt="pexels-dmitry-zvolskiy-2082090-1"
              />
              <img
                className="xl:hidden rounded-full  border-amber-300 border h-full"
                src="https://i.ibb.co/nchHmW3/pngwing-com-12.png"
                alt="pexels-dmitry-zvolskiy-2082090-1-1"
              />
            </div>
          </div>
          <div className="md:hidden mt-6 w-full">
            <img
              src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png"
              alt="pexels-dmitry-zvolskiy-2082090-1"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EspBanner;

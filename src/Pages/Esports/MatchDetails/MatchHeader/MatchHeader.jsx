import React from "react";
import "./MatchHeader.css";
import { FaVideo } from "react-icons/fa";

const MatchHeader = () => {
  return (
    <div>
      <div className="esproot ">
        <section
          className=" matchHeader  "
          id="home"
          aria-label=""
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.1)), url('https://www.extron.com/img/mktg/open_graph/esports.jpg')`,
          }}
        >
          <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between  items-stretch flex-row">
              <div className="">
                <div className="hidden md:block border-b-yellow-500 border-b-2 h-44    rounded-full  bg-opacity-70 md:h-60 xl:h-72 ">
                  <img
                    className="hidden h-full rounded-b-full rounded-full xl:block"
                    src="https://i.ibb.co/h9yttXs/pngwing-com-22.png"
                    alt="pexels-dmitry-zvolskiy-2082090-1"
                  />
                  <img
                    className="xl:hidden rounded-full    h-full"
                    src="https://i.ibb.co/h9yttXs/pngwing-com-22.png"
                    alt="pexels-dmitry-zvolskiy-2082090-1-1"
                  />
                </div>
              </div>
              <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-10 px-10 md:px-0 md:py-0  mx-16  ">
                <div>
                  <p className="text-3xl text-white mb-5 xl:text-6xl font-semibold leading-9  ">
                    ESL
                    <span className="text-green-500 ">Pro</span>{" "}
                    <span className="text-yellow-400 ">League</span>
                  </p>
                </div>
                <div className="xl:mt-4 mt-2 text-2xl text-white mb-5 xl:text-1xl font-semibold leading-9 ">
                  <h1>
                    TEAM-A <span className="text-yellow-400">VS </span> TEAM-B{" "}
                  </h1>
                  <h1 className=" animate-bounce">
                    03 <span className="text-yellow-400">VS </span> 04{" "}
                  </h1>
                  <button className="animate-ping ani text-yellow-500 hover:underline ">
                    WATCH LIVE STREAM
                  </button>
                </div>
              </div>
              <div className="hidden md:block h-44    rounded-full border-b-yellow-500 border-b-2 bg-opacity-70 md:h-60 xl:h-72">
                <img
                  className="hidden h-full rounded-b-full rounded-full xl:block"
                  src="https://i.ibb.co/pXp4M9J/pngwing2222-com.png"
                  alt="pexels-dmitry-zvolskiy-2082090-1"
                />
                <img
                  className="xl:hidden rounded-b-full     h-full"
                  src="https://i.ibb.co/pXp4M9J/pngwing2222-com.png"
                  alt="pexels-dmitry-zvolskiy-2082090-1-1"
                />
              </div>
            </div>
            <div className="hidden mt-6 w-full">
              <img
                src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png"
                alt="pexels-dmitry-zvolskiy-2082090-1"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatchHeader;

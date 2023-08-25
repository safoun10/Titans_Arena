import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import victoryLogo from "../../../../../public/EsportsPic/animation_llpca4jv.json";

const ESportVictories = () => {
  const victory = [
    {
      date: "25-4-18",
      name: "GLORIA XTRA 2017 LEAGUE",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "FIFA 2018 SUPER LEAGUE",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "CS: GO PERFECT SUPER CUP",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "LOL 2018 SUPER LEAGUE",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "GLORIA XTRA 2017 LEAGUE",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "FIFA 2018 SUPER LEAGUE",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "CS: GO PERFECT SUPER CUP",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
    {
      date: "25-4-18",
      name: "LOL 2018 SUPER LEAGUE",
      about:
        "Esports, short for electronic sports, is a form of competition using video games.",
    },
  ];

  return (
    <div className="bg-[url('https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/08/17/16291886670895.jpg')]">
      <div className=" bg-black bg-opacity-20 ">
        <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
          <div className="bg-black bg-opacity-50  lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
              <div className="avatar">
                <div className="w-32 rounded-lg bg-black">
                  <Player
                    className=" "
                    autoplay
                    loop
                    src={victoryLogo}
                    // style={{ height: "500px", width: "700px" }}
                  ></Player>
                </div>
              </div>

              <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                VICTORIES OF <span className="text-green-500">CLOUX</span>
              </h1>
              <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
                Get inspired by our curated selection of luxiwood interiors. We
                hope get inspired to have luxiwood interior yourself. You’ll
                find tips here where you can buy a lot of cool
                furniture,decorations, plants, etc.
              </p>
              <button className="active border border-green-400 rounded-md  dark:hover:bg-green-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                Explore
                <div className="ml-2 mt-0.5">
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 8H12.6666"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.6667L12.6667 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 5.33301L12.6667 7.99967"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="z-30 relative lg:w-1/2">
            <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
              <div className="w-full lg:w-auto lg:-mr-32">
                <img
                  src="https://gumlet.assettype.com/afkgaming%2F2021-12%2F547a5851-0a6e-4e8a-b23d-eda251239dd3%2FCover_Image___S1mple__NAVI_Win_Best_Esports_Athlete_And_Best_Esports_Team_At_The_Game_Awards_2021.jpg?compress=true&dpr=1&w=1200"
                  alt="image with decent chairs"
                  className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14 "
                />
              </div>
            </div>
            <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full lg:hidden">
              <img
                src="https://gumlet.assettype.com/afkgaming%2F2021-12%2F547a5851-0a6e-4e8a-b23d-eda251239dd3%2FCover_Image___S1mple__NAVI_Win_Best_Esports_Athlete_And_Best_Esports_Team_At_The_Game_Awards_2021.jpg?compress=true&dpr=1&w=1200"
                alt="image with decent chairs"
                className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14 "
              />
            </div>
          </div>
        </div>

        <div>
          {/* ------------------------------ */}

          <div
            class="flex items-center  w-screen "
            // style="font-family: 'Muli', sans-serif;"
          >
            <div class="container ml-auto mr-auto flex flex-wrap items-start">
              <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
                <h1 class="text-3xl lg:text-4xl text-green-500 font-extrabold">
                  GLORIA XTRA 2017 LEAGUE
                </h1>
              </div>
              {victory.map((win) => (
                <div
                  win={win}
                  class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
                >
                  <div class=" border  rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <div class="rounded-lg  flex flex-col">
                      <div>
                        <h5 class="text-white text-2xl font-bold leading-none">
                          {win.name}
                        </h5>
                        <span class="text-xs text-gray-400 leading-none">
                          {win.about}
                        </span>
                      </div>
                      <div class="flex items-center">
                        <div class="text-lg text-white font-light">
                          Date : {win.date}
                        </div>
                        <button
                          href="javascript:;"
                          class="rounded-full bg-green-500 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-current m-auto"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESportVictories;

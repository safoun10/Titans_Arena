import React, { useEffect, useState } from "react";
import "./GalleryParallax.css";

import {
  FaCalendarDays,
  FaFacebookF,
  FaComments,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const GalleryParallax = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(
      "https://titans-arena-server.vercel.app/blogs/64f2c74b99376762899a529d"
    )
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  function getFirst10Words(text, blogId) {
    if (text) {
      const words = text.split(" ");
      const first10Words = words.slice(0, 10).join(" ");

      if (words.length > 10) {
        return (
          <div>
            {first10Words}
            <span>...</span>
          </div>
        );
      } else {
        return first10Words; // Return the truncated text without the "Read More" button
      }
    } else {
      return ""; // Return an empty string if text is undefined or empty
    }
  }

  return (
    <div className="text-white">
      <div>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <video
            className="md:h-screen mb-3 z-0 xl:h-screen sm:h-screen"
            src="https://generationzero.com/content/1-home/herobgvideo.mp4"
            playsInline
            loop
            muted
            autoPlay
            style={{ width: "100%", objectFit: "cover" }}
          ></video>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "24px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
            className="text-center"
          >
            <span className="text-3xl font-semibold">
              The largest gaming platform
            </span>
            <br />
            <span className="text-[120px] bg-gradient-to-b from-transparent to-[#68fb9a] font-bold">
              Titans Arena
            </span>
            <br />
            <span>PLAY TO LIVE, LIVE TO WIN</span>
          </div>
        </div>

        <div className="parallax mb-3 md:h-screen h-96 z-10 flex bg-[url('https://asphalt9.assets.gameloft.com/assets/bg_banner_desktop_v2_79125a46ce.jpg')]">
          <div className="my-auto items-center  mx-4 px-4">
            <div className="sub-title-gallery text-2xl font-bold ">
              Asphalt Adventures
            </div>
            <div className="w-96 gallery-subtitle">
              Race Through Urban Streets, Drift Around Corners, and Dominate the
              Asphalt in Heart-Pounding Excitement Unleash your inner speed
              demon in the world of Asphalt Adventures. Take control of
              high-performance cars, tackle challenging tracks, and compete
              against fierce opponents. Are you ready to rule the asphalt?
            </div>
          </div>
        </div>
        <div className="parallax mb-3 md:h-screen h-96 z-20 flex bg-[url('https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2022/08/20124311/Call-of-Duty.jpg')]">
          <div className="my-auto items-center  mx-4 px-4">
            <div className="sub-title-gallery text-2xl font-bold ">
              Call of Duty: Warfare Unleashed
            </div>
            <div className="w-96 gallery-subtitle">
              Immerse Yourself in the Intense World of Modern Warfare. Engage in
              Heart-Pounding Combat, Tactical Strategy, and Unforgettable
              Campaigns. Join the Global Battle for Supremacy and Prove Your
              Skills in the Most Iconic FPS Series of All Time.
            </div>
          </div>
        </div>
        <div className="parallax mb-3 md:h-screen h-96 z-20 flex  via-transparent bg-[url('https://ggtalks.com/wp-content/uploads/2022/01/PUBG-Battleground.jpg')]">
          <div className="my-auto items-center  mx-4 px-4">
            <div className="sub-title-gallery text-2xl font-bold ">
              PUBG: Battlegrounds Unleashed
            </div>
            <div className="w-96 gallery-subtitle">
              Step into the adrenaline-pumping world of PlayerUnknown's
              Battlegrounds (PUBG), where survival and strategy collide.
              Scavenge, strategize, and outlast opponents in the most intense
              Battle Royale game ever. Will you be the last one standing in this
              epic fight for victory?
            </div>
          </div>
        </div>
        <div className="parallax mb-3 md:h-screen h-96 z-20 bg-[url('https://generationzero.com/content/1-home/pests-1.jpg')]">
          <div>
            <div className="text-center font-bold text-3xl p-4">
              NEWS & UPDATES
            </div>
            <div className="text-center text-[24px]">
              Read the latest news from the Tech Titans development team.
            </div>
            <div className="bg-[#182029] mb-10 w-1/2 mx-auto">
              <div className="lg:flex">
                <div>
                  <img
                    className="w-96 h-full rounded p-4"
                    src={blog.featured_image}
                    alt="blog-image"
                  />
                </div>
                <div className="text-white lg:my-6  gap-3 text-center lg:gap-6">
                  <div className="font-semibold text-xs lg:text-lg px-2 m-2">
                    By{" "}
                    <span className="duration-200 hover:text-[#45f882]">
                      {blog.author}
                    </span>
                  </div>
                  <div className=" font-semibold text-xs lg:text-lg px-2 m-2">
                    <FaCalendarDays className="text-[#45f882] inline-flex" />{" "}
                    <span>{blog.date}</span>
                  </div>
                  <div className="font-semibold text-xs lg:text-lg px-2 m-2">
                    <FaComments className="text-[#45f882] text-lg inline-flex" />{" "}
                    Comments
                  </div>
                </div>
              </div>
              <div className="py-3 px-4 lg:py-6 lg:px-11">
                <div className="text-white">
                  <h1 className="text-xl lg:text-2xl py-5 font-bold duration-200 hover:text-[#45f882]">
                    {blog.title}
                  </h1>
                  <p className="text-slate-400 text-base lg:text-xl font-semibold pb-3">
                    {getFirst10Words(blog.content)}
                  </p>
                </div>
                {/*  blogs card start*/}

                <div className="text-slate-400 py-4 text-sm lg:text-lg lg:flex lg:justify-between  font-semibold items-center">
                  <div className="flex items-center">
                    <Link
                      className="hover:text-[#45f882] group flex py-2 lg:py-0 items-center"
                      to="/blogs"
                    >
                      Read More
                      <span className="inline-block pl-2 text-[#45f882] rotate-arrow group-hover:rotate-0">
                        <FaArrowRight className="rotate-arrow -rotate-45" />
                      </span>
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="mr-2">SHARE :</p>
                    <Link to={blog.twitter}>
                      {" "}
                      <FaTwitter className="text-white hover:text-[#45f882] transition-colors" />
                    </Link>
                    <Link to={blog.facebook}>
                      {" "}
                      <FaFacebookF className="text-white hover:text-[#45f882] transition-colors" />
                    </Link>
                    <Link to={blog.linked_in}>
                      <FaLinkedinIn className="text-white hover:text-[#45f882] transition-colors" />
                    </Link>
                  </div>
                </div>
                {/*  blogs card ends*/}
              </div>
            </div>
          </div>
        </div>
        <div className="parallax md:h-screen h-96 z-20 px-5 lg:px-0 flex justify-around bg-[url('https://generationzero.com/content/1-home/herobg_blur.jpg')]">
          {/* screen shots section */}
          <div className="px-4">
            <div className="text-4xl  font-bold text-center">
              Screen Shots
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:pl-0 pl-20 max-w-[1260px] mx-0 lg:mx-auto gap-4 text-black">
              <div class="w-2/3 lg:w-full">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <img
                    className="w-full lg:mx-4"
                    src="https://generationzero.com/content/1-home/multiplayer-customization.jpg"
                    alt=""
                  />
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="w-cus rounded-xl mx-auto"
                      src="https://generationzero.com/content/1-home/multiplayer-customization.jpg"
                      alt=""
                    />
                  </div>
                </dialog>
              </div>
              <div class="w-2/3 lg:w-full">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <img
                    className="w-full lg:mx-4"
                    src="https://nxtmag.tech/wp-content/uploads/2019/09/pubg-mobile-prime-ss.jpg"
                    alt=""
                  />
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="w-cus rounded-xl mx-auto"
                      src="https://nxtmag.tech/wp-content/uploads/2019/09/pubg-mobile-prime-ss.jpg"
                      alt=""
                    />
                  </div>
                </dialog>
              </div>
              <div class="w-2/3 lg:w-full">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <img
                    className="w-full lg:mx-4"
                    src="https://www.videogameschronicle.com/files/2020/04/MW2R_SS_FavelaGameplay.jpg"
                    alt=""
                  />
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="w-cus rounded-xl mx-auto"
                      src="https://www.videogameschronicle.com/files/2020/04/MW2R_SS_FavelaGameplay.jpg"
                      alt=""
                    />
                  </div>
                </dialog>
              </div>
              <div class="w-2/3 lg:w-full">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <img
                    className="w-full lg:mx-4"
                    src="https://i0.wp.com/insider-gaming.com/wp-content/uploads/2023/07/assassins-creed.jpg?fit=1920%2C1080&ssl=1"
                    alt=""
                  />
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="w-cus rounded-xl mx-auto"
                      src="https://i0.wp.com/insider-gaming.com/wp-content/uploads/2023/07/assassins-creed.jpg?fit=1920%2C1080&ssl=1"
                      alt=""
                    />
                  </div>
                </dialog>
              </div>
              <div class="w-2/3 lg:w-full">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <img
                    className="w-full lg:mx-4"
                    src="https://i.ytimg.com/vi/jmZs8lX_QkY/maxresdefault.jpg"
                    alt=""
                  />
                </button>
                <dialog id="my_modal_5" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="w-cus rounded-xl mx-auto"
                      src="https://i.ytimg.com/vi/jmZs8lX_QkY/maxresdefault.jpg"
                      alt=""
                    />
                  </div>
                </dialog>
              </div>
             <div class="w-2/3 lg:w-full">
                <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_6").showModal()
                  }
                >
                  <img
                    className="w-full lg:mx-4"
                    src="https://images.pushsquare.com/3b0b5d4aec6bc/1280x720.jpg"
                    alt=""
                  />
                </button>
                <dialog id="my_modal_6" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      className="w-cus rounded-xl mx-auto"
                      src="https://images.pushsquare.com/3b0b5d4aec6bc/1280x720.jpg"
                      alt=""
                    />
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryParallax;

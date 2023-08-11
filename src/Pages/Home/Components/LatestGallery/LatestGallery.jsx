import LatestGalleryCarousel from "./LatestGalleryCarousel";
import { MdDoubleArrow, MdPlayArrow } from "react-icons/md";
const LatestGallery = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="text-center my-10">
        <h3 className="text-[#68fb9a] font-semibold ">GET NEW IMAGE</h3>
        <h1 className="text-white text-4xl font-bold my-2">FROM NEW GAMES</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 mx-auto"
          fill="#68fb9a"
          viewBox="0 0 65 5"
          fillRule="evenodd"
        >
          <path
            d="M968,5630h65l-4,5H972Z"
            transform="translate(-968 -5630)"
          ></path>
        </svg>
      </div>
      <div className="md:flex text-center justify-center items-center py-10">
        <div className="md:w-1/3 text-white ">
          <h2 className="text-4xl font-bold">Letest Gallery</h2>
          <p className="font-semibold text-sm text-[#45f882]">Letest Gallery</p>
        </div>
        <div className="text-white flex items-center relative mx-3">
          <MdDoubleArrow
            style={{
              animation: "fadeInOut .5s ease-in-out infinite",
              color: "#45f882", // Green color
            }}
            className="h-12 w-12 absolute right-7"
          />

          <MdDoubleArrow
            style={{
              animation: "fadeInOut2 .5s ease-in-out infinite",
              color: "white", // Green color
            }}
            className="h-12 w-12"
          />
        </div>
        <div className="md:w-3/4 ">
          <LatestGalleryCarousel />
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes fadeInOut2 {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LatestGallery;

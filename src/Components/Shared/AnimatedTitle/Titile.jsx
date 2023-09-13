import React from "react";
// import "./AnimatedTitle.css";

const Title = ({ primaryText, secondaryText }) => {
  return (
    <div>
      {/* <div id="wrapper" className="mx-auto text-center">
        <div id="bar" className="w-1/2"></div>
        <div id="bar2" className=""></div>
        <h1>
          <div className="main">
            <h1 className="main-heading">
              <span className="main-heading-primary text-center">{primaryText}</span>
              <span className="main-heading-secondary">{secondaryText}</span>
            </h1>
          </div>
        </h1>
        <div id="bar2"></div>
      </div> */}
       <div className="text-center my-10 lg:mx-0 mx-5">
        <h3 className="text-[#68fb9a] font-semibold text-lg uppercase">{primaryText}</h3>
        <h1 className="text-white text-4xl font-bold mb-2  uppercase">{secondaryText}</h1>
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
    </div>
  );
};

export default Title;

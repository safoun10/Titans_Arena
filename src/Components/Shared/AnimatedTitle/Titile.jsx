import React from "react";

const Title = ({ primaryText, secondaryText }) => {
  return (
    <div>
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

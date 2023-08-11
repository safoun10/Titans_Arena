import React from "react";
import "./AnimatedTitle.css";

const Title = ({ primaryText, secondaryText }) => {
  return (
    <div>
      <div id="wrapper" className="mx-auto text-center">
        {/* <div id="bar" className="w-1/2"></div> */}
        <div id="bar2" className=""></div>
        <h1>
          <div className="main">
            <h1 className="main-heading">
              <span className="main-heading-primary">{primaryText}</span>
              <span className="main-heading-secondary">{secondaryText}</span>
            </h1>
          </div>
        </h1>
        <div id="bar2"></div>
      </div>
    </div>
  );
};

export default Title;

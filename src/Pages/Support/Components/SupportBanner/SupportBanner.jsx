import React from "react";

const SupportBanner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('../../../public/breadcrumb_bg02.jpg')",
        }}
      >
        <div className="py-24 text-center text-white font-bold">
          <h1 className="pt-16 text-5xl">SUPPORT BEYOND EXPECTATIONS </h1>
          <h2 className="text-xl">Your Support Journey Starts Here</h2>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;

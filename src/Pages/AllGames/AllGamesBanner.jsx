import React from "react";

const AllGamesBanner = () => {
  return (
    <div
      className="bg-cover bg-center h-96"
      style={{
        backgroundImage: "url('../../../public/breadcrumb_bg02.jpg')",
      }}
    >
      <div className="py-24 text-center text-white font-bold">
        <h1 className="pt-16 text-5xl">Gamer's Paradise</h1>
        <h2 className="text-xl">Your Epic Journey Begins Here</h2>
      </div>
    </div>
  );
};

export default AllGamesBanner;

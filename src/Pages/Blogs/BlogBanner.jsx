import React from "react";

const BlogBanner = ({title}) => {
  return (
    <div
      className="bg-cover bg-center h-96"
      style={{
        backgroundImage: "url('../../../public/breadcrumb_bg02.jpg')",
      }}
    >
      <div className="py-24 text-center text-white font-bold">
        <h1 className="pt-16 text-5xl">BLOG STANDARD</h1>
        <h2 className="text-xl">{title}</h2>
      </div>
    </div>
  );
};

export default BlogBanner;

import React from "react";
import { Helmet } from "react-helmet-async";
import GalleryParallax from "./Components/GalleryParallax/GalleryParallax";

const Gallery = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <Helmet>
        <title>Titans Arena || Gallery</title>
      </Helmet>
      <GalleryParallax></GalleryParallax>
    </div>
  );
};

export default Gallery;
import "./Gallery.scss";

import banner_img from "../../assets/images/homebanner.jpeg";
import { gallery } from "../../assets/imageData";
import { useState } from "react";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery">
      <div className="gallery-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="gallery-content">
        <h2>
          Explore memorable moments and vibrant campus life through our gallery.
        </h2>

        <div className="gallery-imgs">
          {gallery.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.img} alt={item.img} loading="lazy" />
              <p>Best Of 2025</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

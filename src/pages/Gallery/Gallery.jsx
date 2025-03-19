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
        <h2>Explore memorable moments and vibrant campus life through our gallery.</h2>
        

        <div className="gallery-imgs">
          {gallery.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.img}
              onClick={() => setSelectedImg(item.img)}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Fullscreen Preview" loading="lazy" />
          <span className="close-btn" onClick={() => setSelectedImg(null)}>
            ×
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;

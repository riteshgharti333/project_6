import "./HomeContent.scss";
import rotate_img from "../../assets/images/rotate.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="homeContent">
      <div className="homeContent-container">
        <div className="homeContent-left">
          <h1>Welcome to International Academy of Design</h1>
          <p>
            At International Academy of Design, we are dedicated to fostering
            creativity, innovation, and technical expertise in the fields of
            design and development. Our academy offers a diverse range of
            courses tailored to equip students with the skills necessary to
            excel in the dynamic world of design.
          </p>
        </div>
        <div className="homeContent-right">
          <div className="homeContent-right-imgs">
            <div className="homeContent-imgs-left">
              <img
                src={rotate_img}
                alt=""
                className="top-img"
                data-aos="fade-down"
              />
              <img src={rotate_img} alt="" data-aos="fade-right" />
            </div>

            <div className="homeContent-imgs-right">
              <img src={rotate_img} alt="" data-aos="fade-left" />
              <img src={rotate_img} alt="" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

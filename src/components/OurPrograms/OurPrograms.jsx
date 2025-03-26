import "./OurPrograms.scss";
import { courses } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const OurPrograms = () => {
  return (
    <div className="ourPrograms">
      <div className="ourPrograms-top">
        <h1>Courses</h1>
        <p>
          We provide comprehensive training in various disciplines, including:
        </p>
      </div>

      <div className="ourPrograms-cards">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".program-swiper-next",
            prevEl: ".program-swiper-prev",
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 4 },
          }}
          className="program-swiper"
        >
          {courses.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`${item.link}`}>
                <div
                  className="ourPrograms-card"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  <div className="ourPrograms-card-desc">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="program-swiper-prev">❮</div>
        <div className="program-swiper-next">❯</div>
      </div>
    </div>
  );
};

export default OurPrograms;

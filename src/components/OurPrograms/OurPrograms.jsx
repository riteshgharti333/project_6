import "./OurPrograms.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../main";

import course_img from "../../assets/images/rotate.jpeg";

const OurPrograms = () => {
  const [mainCourses, setMainCourses] = useState([]);
  const [ugCourses, setUgCourses] = useState([]);
  const [pgCourses, setPgCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/course/all-course`);
        const allCourses = data?.courses || [];

        setMainCourses(
          allCourses.filter((course) => course.courseType === "Main Course")
        );
        setUgCourses(
          allCourses.filter((course) => course.courseType === "UG Course")
        );
        setPgCourses(
          allCourses.filter((course) => course.courseType === "PG Course")
        );
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  // Combine and order all course types
  const allCoursesOrdered = [...mainCourses, ...ugCourses, ...pgCourses];

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
          {allCoursesOrdered.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/course/${item.courseType}/${item._id}/${item.bannerTitle}`}
              >
                <div
                  className="ourPrograms-card"
                  style={{
                    backgroundImage: `url(${course_img})`,
                  }}
                >
                  <div className="ourPrograms-card-desc">
                    <h3>{item.bannerTitle}</h3>
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

import "./OurPrograms.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../main";
import Loader from "../../components/Loader/Loader";

// Fetch all courses
const fetchCourses = async () => {
  const { data } = await axios.get(`${baseUrl}/course/all-course`);
  return data.courses || [];
};

const OurPrograms = () => {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-courses"],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isLoading) return <Loader />;

  if (isError) {
    console.error("❗ Course fetch error:", error?.message);
    return (
      <div className="error">
        <div className="error-desc">
          <h3>Failed to load courses</h3>
          <p>Try refreshing the page or check your network connection.</p>
        </div>
      </div>
    );
  }

  // Grouping and ordering courses by type
  const mainCourses = courses.filter((c) => c.courseType === "Main Course");
  const ugCourses = courses.filter((c) => c.courseType === "UG Course");
  const pgCourses = courses.filter((c) => c.courseType === "PG Course");

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
                    backgroundImage: `url(${item.smCourseImage})`,
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

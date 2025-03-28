import "./Student.scss";

import banner_img from "../../assets/images/homebanner.jpeg";
import { toast } from "sonner";
import { baseUrl } from "../../main";
import axios from "axios";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { student } from "../../assets/data";

const Student = () => {
  const [enrollmentId, setEnrollmentId] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const getCertificate = async (e) => {
    e.preventDefault();

    if (!enrollmentId.trim()) {
      toast.error("Please enter a valid Enrollment ID");
      return;
    }

    setLoading(true);
    setCertificateUrl("");

    try {
      const { data } = await axios.get(
        `${baseUrl}/certificate/${enrollmentId}`,
        { responseType: "blob" }
      );

      const imageUrl = URL.createObjectURL(data);
      setCertificateUrl(imageUrl);

      toast.success("Certificate loaded successfully!");
    } catch (error) {
      console.error("Failed to get certificate:", error);
      toast.error("Failed to load certificate. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Hide the certificate preview
  const closePreview = () => {
    setCertificateUrl("");
  };
  return (
    <div className="student">
      <div className="student-banner">
        <div className="img-wrapper">
          <img src={banner_img} alt="" />
          <h1>Student Corner</h1>
        </div>
      </div>

      <div className="student-cards">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".student-swiper-next",
            prevEl: ".student-swiper-prev",
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
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 2 },
          }}
          className="student-swiper"
        >
          {student.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="student-card">
                <img src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="student-swiper-prev">❮</div>
        <div className="student-swiper-next">❯</div>
      </div>

      <div className="certificate-content">
        <h3>Get Your Certificate</h3>
        <form onSubmit={getCertificate}>
          <input
            type="text"
            placeholder="Enter Enrollment ID"
            value={enrollmentId}
            onChange={(e) => setEnrollmentId(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Certificate"}
          </button>
        </form>

        {/* ✅ Display the certificate preview with close button */}
        {certificateUrl && (
          <div className="certificate-preview">
            <img src={certificateUrl} alt="Certificate" />
            <span className="close-btn" onClick={closePreview}>
              ×
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;

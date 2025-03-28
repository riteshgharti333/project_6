import "./Student.scss";

import { toast } from "sonner";
import { baseUrl } from "../../main";
import axios from "axios";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { student_banners } from "../../assets/data";

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
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          speed={1200}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="services-slide"
        >
          {student_banners.map((item, index) => (
            <SwiperSlide key={index} className="service_slide">
              <img src={item.img} alt="banner-img" loading="lazy" />
              <h1>Student Corner</h1>
            </SwiperSlide>
          ))}
        </Swiper>
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

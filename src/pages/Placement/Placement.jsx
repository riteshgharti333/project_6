import "./Placement.scss";

import banner_img from "../../assets/images/homebanner.jpeg";

import { toast } from "sonner";
import axios from "axios";
import { baseUrl } from "../../main";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const fetchStaffs = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(`${baseUrl}/alumni/all-alumnies`);
  return data.alumni;
};

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(
    `${baseUrl}/banner/alumni-banner/67e7726c768539d1e124549e`,
  );
  return data?.image;
};

const Placement = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["alumni"],
    queryFn: fetchStaffs,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const {
    data: bannerImg,
    isLoading: isBannerLoading,
    isError: isBannerError,
  } = useQuery({
    queryKey: ["alumniBanner"],
    queryFn: fetchBanner,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isError) {
    if (error.name === "AxiosError") {
      const isNetworkError =
        !error.response ||
        error.message.includes("ECONNRESET") ||
        error.response?.data?.message === "read ECONNRESET";

      if (isNetworkError) {
        setTimeout(() => {
          toast.error("🚫 Network error. Please check your connection.");
        }, 100);
      } else {
        console.error("❗ Server Error:", error.response?.status);
      }
    }
  }

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <div className="error">
        <div className="error-desc">
          <h3>Failed to load alumni data.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="placement">
      <div className="placement-banner">
        <div className="img-wrapper">
          <img src={bannerImg} alt="" />
          <h1>Alumini</h1>
        </div>
      </div>

      <div className="placement-content">
        <h2>Meet Our Achievers: Students Placed at Top Companies</h2>
        <div className="placement-cards">
          {data?.map((item, index) => (
            <div className="placement-card" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="alumini-details">
                <h3>{item.name}</h3>
                <p>
                  <FaUserTie className="alumni-icon" />
                  {item.designation}
                </p>
                <p>
                  <FaBuilding className="alumni-icon" />
                  {item.company}
                </p>
                <p>
                  <FaLocationDot className="alumni-icon" />
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placement;

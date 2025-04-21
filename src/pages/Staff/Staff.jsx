import "./Staff.scss";
import { TiLocationArrow } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

import banner_img from "../../assets/images/homebanner.jpeg";
import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";

const fetchStaffs = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(`${baseUrl}/staff/all-staffs`);
  return data.staff;
};

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(
    `${baseUrl}/banner/mentor-banner/67e7722bc95a30104036fdbe`,
  );
  return data?.image;
};

const Staff = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["staffs"],
    queryFn: fetchStaffs,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const {
    data: bannerImg,
    isLoading: isBannerLoading,
    isError: isBannerError,
  } = useQuery({
    queryKey: ["mentorBanner"],
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

  if (isLoading || isBannerLoading) return <Loader />;

  if (isError) {
    return (
      <div className="error">
        <div className="error-desc">
          <h3>Failed to load staff data.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="staff">
      <div className="staff-banner">
        <div className="img-wrapper">
          <img src={bannerImg} alt="banner" />
          <h1>Our Staff</h1>
        </div>
      </div>

      <div className="staff-container">
        <div className="staff-cards">
          {data?.map((item) => (
            <div className="staff-card" key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className="staff-card-desc">
                <h3>{item.name}</h3>
                <p>{item.position}</p>
                <p>
                  {item.location} <TiLocationArrow className="staff-icon" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;

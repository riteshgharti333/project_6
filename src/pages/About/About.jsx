import "./About.scss";
import banner_img from "../../assets/images/homebanner.jpeg";
import { aboutContent } from "../../assets/data";
import Founder from "../../components/Founder/Founder";

import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/banner/about-banner/67e7720bf86def3cbf7ba215`
  );
  return data;
};

const About = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["about-banner"],
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
          <h3>Failed to about banner</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="about">
      <div className="about-banner">
        <div className="img-wrapper">
          <img src={data.image} alt="" />
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-content">
        {aboutContent.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="about-member">
        <Founder />
      </div>
    </div>
  );
};

export default About;

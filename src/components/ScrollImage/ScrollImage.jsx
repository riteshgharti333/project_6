import { sliderImage } from "../../assets/data";
import "./ScrollImage.scss";

import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchAffiliate = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(`${baseUrl}/affiliate/all-affiliates`);
  return data.affiliated;
};

const ScrollImage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Affiliate"],
    queryFn: fetchAffiliate,
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
          <h3>Failed to load Affiliate</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="scrollImage">
      <h1>Affiliated Colleges</h1>
      <div className="scrollImage-cards-container">
        <div className="scrollImage-cards-track">
          {[...data, ...data].map((item, index) => (
            <div className="scrollImage-card" key={index}>
              <img src={item.image} alt="brand-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollImage;

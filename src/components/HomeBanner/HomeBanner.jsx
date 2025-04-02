import "./HomeBanner.scss";
import home_banner from "../../assets/images/homebanner.jpeg";

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
    `${baseUrl}/banner/home-banner/67e771c7f86def3cbf7ba1fd`
  );
  return data;
};

const HomeBanner = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["home-banner"],
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
          <h3>Failed to home banner</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="homeBanner">
      <div className="img-wrapper">
        <img src={data.image} alt="Home Banner" />
      </div>
    </div>
  );
};

export default HomeBanner;

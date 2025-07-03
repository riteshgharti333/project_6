import "./Mentor.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { toast } from "sonner";

import { baseUrl } from "../../main";
import useFullUrl from "../../utils/useFullUrl";
import SEO from "../../components/SEO/SEO";

const fetchStaffs = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(`${baseUrl}/founder/all-founders`);
  return data.founders;
};

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(
    `${baseUrl}/banner/staff-banner/67e7723fc95a30104036fdc1`
  );
  return data?.image;
};

const Mentor = () => {
  const fullUrl = useFullUrl();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["staff"],
    queryFn: fetchStaffs,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const {
    data: bannerImg,
    isLoading: isBannerLoading,
    isError: isBannerError,
  } = useQuery({
    queryKey: ["staffBanner"],
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
          <h3>Failed to load data.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="mentor">
      <SEO
        title="Meet Our Mentors | International Academy of Design – Learn from Industry Experts"
        description="Explore the mentors at International Academy of Design—seasoned professionals from fashion, interior, architecture, web development, and digital marketing guiding students with real-world expertise."
        keywords="design mentors, fashion design teachers, architecture faculty, interior design instructors, web development mentors, expert-led design education, IAD mentors"
        url={fullUrl}
      />

      <div className="staff-banner">
        <div className="img-wrapper">
          <img src={bannerImg} alt="Mentor Banner" loading="lazy" />
          <h1>Mentors</h1>
        </div>
      </div>

      <div className="staff-container">
        <div className="staff-cards">
          {data?.map((item) => (
            <div className="staff-card" key={item._id}>
              <div className="staff-img-round">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="staff-card-desc">
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;

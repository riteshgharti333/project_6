import "./About.scss";
import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import founder_img from "../../assets/images/founder.png";
import SEO from "../../components/SEO/SEO";
import useFullUrl from "../../utils/useFullUrl";

// Fetch About Banner
const fetchBanner = async () => {
  if (!navigator.onLine) throw new Error("NETWORK_ERROR");
  const { data } = await axios.get(
    `${baseUrl}/banner/about-banner/67e7720bf86def3cbf7ba215`
  );
  return data;
};

// Fetch About Content
const fetchAboutContent = async () => {
  if (!navigator.onLine) throw new Error("NETWORK_ERROR");
  const { data } = await axios.get(`${baseUrl}/about/about-content`);
  return data.about?.content || [];
};

const About = () => {
   const fullUrl = useFullUrl();

  const {
    data: bannerData,
    isLoading: bannerLoading,
    isError: bannerError,
    error: bannerErrorData,
  } = useQuery({
    queryKey: ["about-banner"],
    queryFn: fetchBanner,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const {
    data: aboutData,
    isLoading: aboutLoading,
    isError: aboutError,
    error: aboutErrorData,
  } = useQuery({
    queryKey: ["about-content"],
    queryFn: fetchAboutContent,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (bannerLoading || aboutLoading) return <Loader />;

  if (bannerError || aboutError) {
    const errorMsg =
      bannerErrorData?.message === "NETWORK_ERROR" ||
      aboutErrorData?.message === "NETWORK_ERROR"
        ? "🚫 Network error. Please check your connection."
        : "❗ Server Error occurred.";
    setTimeout(() => toast.error(errorMsg), 100);

    return (
      <div className="error">
        <div className="error-desc">
          <h3>Failed to load data</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="about">
      <SEO
        title="About Us | International Academy of Design – Empowering Creatives through Education"
        description="Discover the story and mission behind the International Academy of Design. Learn how we empower future designers through expert-led education in fashion, interior, architecture, and more."
        keywords="about international academy of design, design education India, fashion design institute, interior design college, architecture design school, creative learning, about IAD Sikar"
        url={fullUrl}
      />

      <div className="about-banner">
        <div className="img-wrapper">
          <img src={bannerData.image} alt="about banner" loading="lazy" />
          <h1>About Us</h1>
        </div>
      </div>

      <div className="about-content">
        <div className="about-content-left">
          <div className="about-content-right-desc">
            {aboutData?.slice(0, 2)?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <div className="about-content-right">
            <img src={founder_img} alt="founder" />
            <p>
              <span>Sumit Kumar</span> <span>Founder</span>
            </p>
          </div>
        </div>

        {aboutData?.slice(2)?.map((item, index) => (
          <p key={index + 2}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default About;

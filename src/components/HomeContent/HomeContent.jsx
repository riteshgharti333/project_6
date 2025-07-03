import "./HomeContent.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../main";
import Loader from "../../components/Loader/Loader";

const fetchHomeContentImages = async () => {
  const { data } = await axios.get(
    `${baseUrl}/home-content/all-homeContent-images`
  );
  return data?.homeContent || [];
};

const HomeContent = () => {
  

  
  const [homeContentData, setHomeContentData] = useState({});

  useEffect(() => {
    const homeContentDetails = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/home-content-details/only`
        );

        if (data && data.success) {
          setHomeContentData(data.content);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    homeContentDetails()
  },[]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Use React Query
  const {
    data: allData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["home-content-images"],
    queryFn: fetchHomeContentImages,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  if (isLoading) return <Loader />;

  if (isError) {
    console.error("❗ Course fetch error:", error?.message);
    return (
      <div className="error">
        <div className="error-desc">
          <h3>Failed to load content</h3>
          <p>Try refreshing the page or check your network connection.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="homeContent">
      <div className="homeContent-container">
        <div className="homeContent-left">
          <h1>{homeContentData.title}</h1>
          <p>
            {homeContentData.description}
          </p>
        </div>

        <div className="homeContent-right">
          <div className="homeContent-right-imgs">
            <div className="homeContent-imgs-left">
              <img
                src={allData[0]?.image}
                alt="Top Left"
                className="top-img"
                data-aos="fade-down"
                loading="lazy"
              />
              <img
                src={allData[1]?.image}
                alt="Bottom Left"
                data-aos="fade-right"
                loading="lazy"
              />
            </div>

            <div className="homeContent-imgs-right">
              <img
                src={allData[2]?.image}
                alt="Top Right"
                data-aos="fade-left"
                loading="lazy"
              />
              <img
                src={allData[3]?.image}
                alt="Bottom Right"
                data-aos="fade-up"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

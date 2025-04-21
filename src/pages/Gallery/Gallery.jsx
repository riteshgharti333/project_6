import "./Gallery.scss";

import banner_img from "../../assets/images/homebanner.jpeg";
import { useState } from "react";
import { baseUrl } from "../../main";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

const fetchFolders = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/gallery-folder/all-gallery-folders`,
  );
  return data.folders;
};

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(
    `${baseUrl}/banner/gallery-banner/67e772a7768539d1e12454a4`,
  );
  return data?.image;
};

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["folders"],
    queryFn: fetchFolders,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const {
    data: bannerImg,
    isLoading: isBannerLoading,
    isError: isBannerError,
  } = useQuery({
    queryKey: ["folderBanner"],
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
          <h3>Failed to load image folder.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <div className="gallery-banner">
        <div className="img-wrapper">
          <img src={bannerImg} alt="" />
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="gallery-content">
        <h2>
          Explore memorable moments and vibrant campus life through our gallery.
        </h2>

        <div className="gallery-imgs">
          {data.map((item, index) => (
            <Link
              to={`/gallery/${item._id}?title=${encodeURIComponent(
                item.folderTitle,
              )}`}
            >
              <div className="gallery-card" key={index}>
                <img
                  src={item.folderImage}
                  alt={item.folderTitle}
                  loading="lazy"
                />
                <p>{item.folderTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

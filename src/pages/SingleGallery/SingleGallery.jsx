import "./SingleGallery.scss";

import banner_img from "../../assets/images/homebanner.jpeg";
import { useState } from "react";
import { baseUrl } from "../../main";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Link, useParams } from "react-router-dom";
import useFullUrl from "../../utils/useFullUrl";
import SEO from "../../components/SEO/SEO";

const fetchGallery = async (id) => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(`${baseUrl}/gallery-folder/${id}`);
  return data.folder;
};

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(
    `${baseUrl}/banner/gallery-banner/67e772a7768539d1e12454a4`
  );
  return data?.image;
};

const SingleGallery = () => {
  const fullUrl = useFullUrl();

  const [selectedImg, setSelectedImg] = useState(null);
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gallery", id],
    queryFn: () => fetchGallery(id),
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
          <h3>Failed to load gallery</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }


  const seoTitle = data?.folderTitle
    ? `${data.folderTitle} | Gallery | International Academy of Design`
    : "Gallery | International Academy of Design – Campus, Events & Student Life";

  const seoDescription = data?.folderTitle
    ? `Explore the vibrant "${data.folderTitle}" gallery at International Academy of Design. See photos of campus, student life, events, and creative projects.`
    : "Explore the vibrant life at International Academy of Design through our gallery. See photos from our campus, classrooms, creative events, student projects, and cultural celebrations.";

  const seoKeywords = data?.folderTitle
    ? `${data.folderTitle.toLowerCase()}, international academy of design, gallery, campus life, student events, design projects`
    : "international academy of design gallery, student events, campus photos, design institute gallery, creative work, classroom snapshots, design projects";

  return (
    <div className="singleGallery">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={fullUrl}
      />

      <div className="gallery-banner">
        <div className="img-wrapper">
          <img src={bannerImg} alt="" loading="lazy" />
          <h1>{data.folderTitle}</h1>
        </div>
      </div>

      <div className="gallery-content">
        <h2>
          Explore memorable moments and vibrant campus life through our gallery.
        </h2>

        <div className="gallery-imgs">
          {data.galleryImages.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={item.imageUrl}
                loading="lazy"
                onClick={() => setSelectedImg(item.imageUrl)}
                alt={item.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Fullscreen Preview" loading="lazy" />
          <span className="close-btn" onClick={() => setSelectedImg(null)}>
            ×
          </span>
        </div>
      )}
    </div>
  );
};

export default SingleGallery;

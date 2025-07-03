import "./Gallery.scss";

import banner_img from "../../assets/images/homebanner.jpeg";
import { useState } from "react";
import { baseUrl } from "../../main";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import useFullUrl from "../../utils/useFullUrl";
import SEO from "../../components/SEO/SEO";
import { toast } from "sonner";

const fetchFolders = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }
  const { data } = await axios.get(
    `${baseUrl}/gallery-folder/all-gallery-folders`
  );
  return data.folders;
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

const Gallery = () => {
  const fullUrl = useFullUrl();
  const [selectedImg, setSelectedImg] = useState(null);

  const {
    data: folders,
    isLoading: isFoldersLoading,
    isError: isFoldersError,
    error: foldersError,
  } = useQuery({
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

  if (isFoldersError) {
    if (foldersError.name === "AxiosError") {
      const isNetworkError =
        !foldersError.response ||
        foldersError.message.includes("ECONNRESET") ||
        foldersError.response?.data?.message === "read ECONNRESET";

      if (isNetworkError) {
        setTimeout(() => {
          toast.error("🚫 Network error. Please check your connection.");
        }, 100);
      } else {
        console.error("❗ Server Error:", foldersError.response?.status);
      }
    }
  }

  if (isFoldersLoading || isBannerLoading) return <Loader />;

  return (
    <div className="gallery">
      <SEO
        title="Gallery | International Academy of Design – Campus, Events & Student Life"
        description="Explore the vibrant life at International Academy of Design through our gallery. See photos from our campus, classrooms, creative events, student projects, and cultural celebrations."
        keywords="International Academy of Design gallery, student events, campus photos, design institute gallery, creative work, classroom snapshots, design projects"
        url={fullUrl}
      />

      <div className="gallery-banner">
        <div className="img-wrapper">
          <img
            src={bannerImg || banner_img}
            alt="Gallery Banner"
            loading="lazy"
          />
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="gallery-content">
        <h2>
          Explore memorable moments and vibrant campus life through our gallery.
        </h2>

        {isFoldersError ? (
          <div className="error">
            <div className="error-desc">
              <h3>Failed to load gallery folders.</h3>
              <p>Try refreshing the page or check your connection.</p>
            </div>
          </div>
        ) : folders.length === 0 ? (
          <div className="no-data">
            <p>No gallery folders found.</p>
          </div>
        ) : (
          <div className="gallery-imgs">
            {folders.map((item, index) => (
              <Link
                to={`/gallery/${item._id}?title=${encodeURIComponent(
                  item.folderTitle
                )}`}
                key={index}
              >
                <div className="gallery-card">
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
        )}
      </div>
    </div>
  );
};

export default Gallery;

import "./SingleCourse.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import { interior } from "../../assets/serviceData";

import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

import { useParams } from "react-router-dom";
import useFullUrl from "../../utils/useFullUrl";
import SEO from "../../components/SEO/SEO";

const fetchCourse = async ({ queryKey }) => {
  const [, id] = queryKey;

  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(`${baseUrl}/course/${id}`);
  return data?.course;
};

const SingleCourse = () => {
  const fullUrl = useFullUrl();
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id],
    queryFn: fetchCourse,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isError) {
    console.log(error);
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
          <h3>Failed to load course.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  const {
    bannerImage,
    bannerTitle,
    courseDescription,
    courseListDesc,
    courseListTitle,
    courseLists,
    courseTitle,
    courseOfCoursesTitle,
    courseOfCoursesLists,
    topicTitle,
    topicLists,
    careerTitle,
    careerLists,
    overviewTitle,
    overviewDesc,
  } = data;

  // Dynamic SEO generation
  const seoTitle = courseTitle
    ? `${courseTitle} | International Academy of Design`
    : "International Academy of Design | Premier Design & Professional Education in India";

  const seoDescription = courseDescription
    ? courseDescription.length > 150
      ? courseDescription.substring(0, 147) + "..."
      : courseDescription
    : "International Academy of Design offers premier courses in fashion, interior, architecture, graphic design, and more.";

  // Combine course title, topics, career options into keywords (clean and lowercased)
  const keywordsSet = new Set();

  if (courseTitle) keywordsSet.add(courseTitle.toLowerCase());
  if (topicLists)
    topicLists.forEach((t) => t.item && keywordsSet.add(t.item.toLowerCase()));
  if (careerLists)
    careerLists.forEach((c) => c.item && keywordsSet.add(c.item.toLowerCase()));

  // Add some fixed branding keywords
  ["design courses india", "professional education", "IAD Sikar"].forEach(
    (kw) => keywordsSet.add(kw)
  );

  const seoKeywords = Array.from(keywordsSet).join(", ");

  return (
    <div className="SingleCourse">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={fullUrl}
      />
      <div className="SingleCourse-banner interior-design">
        <img src={bannerImage} alt="" loading="lazy" />

        <div className="interior-design-desc">
          <h1>{bannerTitle}</h1>
        </div>
      </div>

      <div className="SingleCourse-content">
        <div className="SingleCourse-content-left">
          <h2>{courseTitle}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{courseDescription}</p>

          <h3>{courseOfCoursesTitle}</h3>

          {courseOfCoursesLists?.some((item) => item.item?.trim() !== "") && (
            <ul>
              {courseOfCoursesLists
                .filter((item) => item.item?.trim() !== "")
                .map((item, index) => (
                  <li key={index}>{item.item}</li>
                ))}
            </ul>
          )}

          <h3>{topicTitle}</h3>

          {topicLists?.some((item) => item.item?.trim() !== "") && (
            <ul>
              {topicLists?.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ul>
          )}

          <h3>{careerTitle}</h3>

          {careerLists?.some((item) => item.item?.trim() !== "") && (
            <ul>
              {careerLists?.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ul>
          )}

          <h3>{courseListTitle}</h3>
          <p>{courseListDesc}</p>

          {courseLists?.some((item) => item.title?.trim() !== "") && (
            <ul>
              {courseLists?.map((item, index) => (
                <li key={index}>
                  <span>{item.title}</span>
                  <br />
                  {item.desc}
                </li>
              ))}
            </ul>
          )}

          <h3>{overviewTitle}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{overviewDesc}</p>
        </div>
        <div className="SingleCourse-content-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;

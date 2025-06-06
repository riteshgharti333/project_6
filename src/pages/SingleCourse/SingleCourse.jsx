import "./SingleCourse.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import { interior } from "../../assets/serviceData";

import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

import {useParams} from "react-router-dom"

const fetchCourse = async ({ queryKey }) => {

  const [, id] = queryKey;

  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/course/${id}`
  );
  console.log(data);
  return data?.course;
};

const SingleCourse = () => {

  const {id} = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", id],
    queryFn: fetchCourse,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isError) {
    console.log(error)
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
          <h3>Failed to load data.</h3>
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

  return (
    <div className="SingleCourse">
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

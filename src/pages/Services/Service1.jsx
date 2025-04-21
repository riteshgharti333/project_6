import "./Service.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import { interior } from "../../assets/serviceData";

import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";

const fetchCourse = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/course/68062f6fcfc1977e5c7edb1f`
  );
  console.log(data);
  return data?.course;
};

const Service1 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourse,
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
          <h3>Failed to load data.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service">
      <div className="service-banner interior-design">
        <img src={data.bannerImage} alt="" />

        <div className="interior-design-desc">
          <h1>{data.bannerTitle}</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{data.courseTitle}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{data.courseDescription}</p>

          <h3>{data.courseListTitle}</h3>
          <p>{data.courseListDesc}</p>

          <ul>
            {data.courseLists.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
                <br />
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
        <div className="service-content-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Service1;

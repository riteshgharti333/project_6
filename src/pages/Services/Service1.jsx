import "./Service.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import { interior } from "../../assets/serviceData";

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
    `${baseUrl}/banner/interior-design-banner/67e7735d768539d1e12454bc`
  );
  return data;
};

const Service1 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["interior-banner"],
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
          <h3>Failed to load data.</h3>
          <p>Try refreshing the page or check your connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service">
      <div className="service-banner interior-design">
        <img src={data.image} alt="" />

        {/* <div className="interior-design-desc">
          <h1>Interior&nbsp;&nbsp;Design</h1>
          <p>(B.VOC 3 YEAR )</p>
        </div> */}
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{interior.title}</h2>
          {interior.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{interior.list.title}</h3>
          <p>{interior.list.desc}</p>

          <ul>
            {interior.list.listPoints.map((item, index) => (
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

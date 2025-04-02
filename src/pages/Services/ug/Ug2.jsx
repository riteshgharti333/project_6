import "../Service.scss";

import Sidebar from "../../../components/Sidebar/Sidebar";
import { bComProgram } from "../../../assets/courses";

import { baseUrl } from "../../../main";
import { toast } from "sonner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";

const fetchBanner = async () => {
  if (!navigator.onLine) {
    throw new Error("NETWORK_ERROR");
  }

  const { data } = await axios.get(
    `${baseUrl}/banner/bcom-banner/67e773be768539d1e12454ce`
  );
  return data;
};

const Ug2 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bcom-banner"],
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
      <div className="service-banner">
        <img src={data.image} alt="" />
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{bComProgram.title}</h2>
          {bComProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{bComProgram.list.title}</h3>
          <p>{bComProgram.list.desc}</p>

          <ul>
            {bComProgram.list.listPoints.map((item, index) => (
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

export default Ug2;

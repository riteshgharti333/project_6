import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { mbaProgram } from "../../../assets/courses";

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
    `${baseUrl}/banner/mba-banner/67e774b9bc173bd1217b6e32`,
  );
  return data;
};

const Pg4 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["mba-banner"],
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
          <h2>{mbaProgram.title}</h2>
          {mbaProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{mbaProgram.list.title}</h3>
          <p>{mbaProgram.list.desc}</p>

          <ul>
            {mbaProgram.list.listPoints.map((item, index) => (
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

export default Pg4;

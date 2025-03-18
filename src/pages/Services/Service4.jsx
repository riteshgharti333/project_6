import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { webDesignDevelopment } from "../../assets/serviceData";

const Service4 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="web-title">Web Design & Development</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2 className="web-sm">{webDesignDevelopment.title}</h2>
          {webDesignDevelopment.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{webDesignDevelopment.list.title}</h3>
          <p>{webDesignDevelopment.list.desc}</p>

          <ul>
            {webDesignDevelopment.list.listPoints.map((item, index) => (
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

export default Service4;

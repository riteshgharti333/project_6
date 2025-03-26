import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { architecture } from "../../assets/serviceData";

const Service7 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="architecture-title">Architecture&nbsp;&nbsp;Design</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{architecture.title}</h2>
          {architecture.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{architecture.list.title}</h3>
          <p>{architecture.list.desc}</p>

          <ul>
            {architecture.list.listPoints.map((item, index) => (
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

export default Service7;

import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { interior } from "../../assets/serviceData";

const Service1 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>Interior&nbsp;&nbsp;Design</h1>
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

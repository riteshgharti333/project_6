import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { digitalMarketing } from "../../assets/serviceData";

const Service8 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>Digital&nbsp;&nbsp;Marketing</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{digitalMarketing.title}</h2>
          {digitalMarketing.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{digitalMarketing.list.title}</h3>
          <p>{digitalMarketing.list.desc}</p>

          <ul>
            {digitalMarketing.list.listPoints.map((item, index) => (
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

export default Service8;

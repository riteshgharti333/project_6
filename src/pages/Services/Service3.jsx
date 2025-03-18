import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fashion } from "../../assets/serviceData";

const Service3 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>Fashion&nbsp;&nbsp;Design</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{fashion.title}</h2>
          {fashion.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{fashion.list.title}</h3>
          <p>{fashion.list.desc}</p>

          <ul>
            {fashion.list.listPoints.map((item, index) => (
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

export default Service3;

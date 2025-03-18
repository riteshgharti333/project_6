import "./Service.scss";

import service_banner from "../../assets/images/card.jpg";
import Sidebar from "../../components/Sidebar/Sidebar";
import { graphic } from "../../assets/serviceData";

const Service2 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1>Graphic&nbsp;&nbsp;Design</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{graphic.title}</h2>
          {graphic.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{graphic.list.title}</h3>
          <p>{graphic.list.desc}</p>

          <ul>
            {graphic.list.listPoints.map((item, index) => (
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

export default Service2;

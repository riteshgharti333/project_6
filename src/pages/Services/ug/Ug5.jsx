import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { bLib } from "../../../assets/courses";

const Ug5 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">B.Lib</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2 className="lib-title">{bLib.title}</h2>
          {bLib.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{bLib.list.title}</h3>
          <p>{bLib.list.desc}</p>

          <ul>
            {bLib.list.listPoints.map((item, index) => (
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

export default Ug5;

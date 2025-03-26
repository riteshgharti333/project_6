import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { mLib } from "../../../assets/courses";

const Pg5 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">M.Lib</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2 className="lib-title">{mLib.title}</h2>
          {mLib.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{mLib.list.title}</h3>
          <p>{mLib.list.desc}</p>

          <ul>
            {mLib.list.listPoints.map((item, index) => (
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

export default Pg5;

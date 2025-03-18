import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { bComProgram  } from "../../../assets/courses";

const Ug2 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">B.Com</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{bComProgram .title}</h2>
          {bComProgram .desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{bComProgram .list.title}</h3>
          <p>{bComProgram .list.desc}</p>

          <ul>
            {bComProgram .list.listPoints.map((item, index) => (
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

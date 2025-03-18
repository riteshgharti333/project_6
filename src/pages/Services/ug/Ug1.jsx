import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { baProgram } from "../../../assets/courses";

const Ug1 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">B.A</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{baProgram.title}</h2>
          {baProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{baProgram.list.title}</h3>
          <p>{baProgram.list.desc}</p>

          <ul>
            {baProgram.list.listPoints.map((item, index) => (
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

export default Ug1;

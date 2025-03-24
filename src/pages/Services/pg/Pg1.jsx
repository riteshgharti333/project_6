import "../Service.scss";

import service_banner from "../../../assets/images/card.jpg";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { maProgram } from "../../../assets/courses";

const Pg1 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <img src={service_banner} alt="" />
        <h1 className="course-title">M.A</h1>
      </div>

      <div className="service-content">
        <div className="service-content-left">
          <h2>{maProgram.title}</h2>
          {maProgram.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h3>{maProgram.list.title}</h3>
          <p>{maProgram.list.desc}</p>

          <ul>
            {maProgram.list.listPoints.map((item, index) => (
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

export default Pg1;
